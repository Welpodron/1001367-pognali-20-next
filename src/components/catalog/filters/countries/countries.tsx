import { Collapse } from "@/components/generic/collapse/collapse";

import DecorationIcon from "/public/icons/svg/192144-utils-filter-spd.svg";
import DotsIcon from "/public/icons/svg/192144-utils-dots-spd.svg";
import CloseIcon from "/public/icons/svg/192144-utils-close.svg";
import React, { useState } from "react";

export const Countries = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <form className="p-5 bg-[#E2E5F2] rounded-b-xl">
      <Collapse isCollapsed={isCollapsed}>
        <div className="flex items-center text-[#192144]">
          <div className="flex items-center">
            <DecorationIcon
              className="mr-2 shrink-0"
              fill="currentcolor"
              width={15}
              height={10}
            />
            <p className="font-bold text-[16px] leading-none uppercase">
              Фильтрация по странам
            </p>
          </div>
          <Collapse.Control
            className="ml-auto shrink-0"
            type="button"
            aria-label="Открыть/Закрыть"
            listener={(isCollapsed) => {
              setIsCollapsed(isCollapsed);
            }}
          >
            {isCollapsed ? (
              <DotsIcon fill="currentcolor" width={17} height={3} />
            ) : (
              <CloseIcon fill="currentcolor" width={17} height={17} />
            )}
          </Collapse.Control>
        </div>
        <Collapse.Content className="space-y-5">
          <ul className="space-y-2">
            <li>Европа</li>
            <li>Азия</li>
            <li>Америка</li>
            <li>Острова</li>
          </ul>
          <ul className="grid grid-cols-5">
            {[
              "а",
              "б",
              "в",
              "г",
              "д",
              "е",
              "з",
              "и",
              "к",
              "л",
              "м",
              "н",
              "о",
              "п",
              "р",
              "с",
              "т",
              "у",
              "ф",
              "х",
              "ч",
              "ш",
              "э",
              "ю",
              "я",
            ].map((letter, index) => (
              <li key={index}>
                <button
                  className="uppercase bg-white p-5 w-full h-full text-center text-[#1D2E5B] font-medium text-[14px] leading-none"
                  type="button"
                >
                  {letter}
                </button>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {[
              "Австралия",
              "Австрия",
              "Азербайджан",
              "Албания",
              "Алжир",
              "Ангола",
              "Андорра",
              "Антигуа и Барбуда",
              "Аргентина",
              "Армения",
              "Афганистан",
            ].map((country, index) => (
              <li key={index}>
                <button type="button">{country} </button>
              </li>
            ))}
          </ul>
        </Collapse.Content>
      </Collapse>
    </form>
  );
};

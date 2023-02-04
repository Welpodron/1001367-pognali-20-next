// Companions block start

import React from "react";

import ArrowRightIcon from "/public/icons/svg/1D2E5B-utils-triangle-arrow-right.svg";

import { COMPANIONS, COUNTRIES, TRANSPORTS } from "@/data/data";

import { Tooltip } from "@/components/generic/tooltip/tooltip";

import Image from "next/image";

export const Companions = () => {
  return (
    <>
      <ul className="grid gap-5 md:grid-cols-2">
        {[...COMPANIONS]
          .sort(
            (companionCurrent, companionNext) =>
              companionNext.likes - companionCurrent.likes
          )
          .map((companion, index) => (
            <li
              key={index}
              className="bg-white rounded-xl overflow-hidden space-y-5"
            >
              <div className="p-5 pb-0 space-y-5">
                <div className="flex items-start relative">
                  <div className="h-[70px] w-[70px] rounded-full overflow-hidden relative shrink-0 mr-3">
                    <Image
                      src={companion.img}
                      fill={true}
                      alt={`Изображение ${companion.name}`}
                      className="object-cover object-center"
                    />
                  </div>
                  <a
                    className="font-bold text-[#1D2E5B] text-[20px] leading-none"
                    href="#"
                  >
                    {companion.firstname}
                    <br />
                    {companion.lastname}
                  </a>
                  <button
                    type="button"
                    aria-label="Поставить/Убрать лайк"
                    className="absolute left-[50px] top-[40px] bg-[#E2E5F2] rounded-full w-[32px] h-[32px]"
                  ></button>
                </div>
                <p>{companion.hashtags}</p>
              </div>
              <div className="p-5 pt-0 space-y-5">
                <ul className="space-y-3 uppercase text-[#1D2E5B] text-[15px] leading-[16px] font-medium">
                  {companion.countries.map((country, index) => (
                    <li key={index} className="flex items-center">
                      {COUNTRIES.find((c) => c.name === country)?.icon({
                        width: 26,
                        height: 18,
                        className: "mr-2 shrink-0",
                      })}
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
                <ul className="flex">
                  {TRANSPORTS.map((transport, index) => (
                    <Tooltip key={index} text={transport.name}>
                      <li className="w-[32px] h-[32px] rounded-full bg-[#EDEFF6] grid place-content-center place-items-center">
                        {transport.icon({
                          width: 16,
                          height: 16,
                          fill: "#1D2E5B",
                          className: `${
                            companion.transports.includes(transport.name)
                              ? "opacity-100"
                              : "opacity-25"
                          }`,
                        })}
                      </li>
                    </Tooltip>
                  ))}
                </ul>
                <button
                  className="bg-[#FFD74B] px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px]"
                  type="button"
                >
                  Позвать!
                </button>
              </div>
            </li>
          ))}
      </ul>
      <button
        type="button"
        className="text-[#1D2E5B] uppercase text-[17px] leading-[30px] font-bold flex"
      >
        Показать еще
      </button>
      <nav>
        <button className="bg-white" type="button"></button>
        <button className="bg-white" type="button"></button>
      </nav>
    </>
  );
};

// Companies block end

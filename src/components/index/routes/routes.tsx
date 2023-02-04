// Routes block start

import React from "react";

import { ROUTES, COUNTRIES } from "@/data/data";

import UserIcon from "/public/icons/svg/192144-icon-user-spd.svg";
import ArrowRightIcon from "/public/icons/svg/1D2E5B-utils-triangle-arrow-right.svg";

import Image from "next/image";

export const Routes = () => {
  return (
    <section className="bg-[#E6E8F1] relative after:bg-inherit after:absolute after:top-full after:z-[2] after:block after:rounded-b-xl after:w-full after:h-[30px]">
      <div className="p-5 pb-0 pt-[calc(30px+30px)] space-y-5">
        <header className="space-y-5">
          <h2 className="font-bold text-[24px] leading-none text-orange-400 md:text-[45px]">
            Направления
          </h2>
          <p className="font-light text-[16px] leading-[22px] text-[#444444] md:text-[28px] md:leading-[33px]">
            Мы не продаем туры
            <br />и ничего не рекламируем. Люди сами пишут о странах, куда
            хотели бы отправиться и чем можно там заняться.
          </p>
        </header>
        <ul className="space-y-5">
          {ROUTES.map((route, index) => (
            <li
              className="rounded-xl overflow-hidden md:flex md:flex-row-reverse"
              key={index}
            >
              <div className="h-[110px] bg-red-300 md:h-auto md:w-[200px] relative">
                <Image
                  src={route.img}
                  fill={true}
                  alt={`Изображение ${route.name}`}
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5 rounded-xl bg-white -mt-3 relative flex items-start md:flex-col md:grow md:mt-0 md:rounded-r-none md:p-8">
                {COUNTRIES.find((c) => c.name === route.name)?.icon({
                  width: 35,
                  height: 25,
                  className:
                    "absolute bottom-full translate-y-1/2 md:bottom-2/3 md:left-full md:-translate-x-1/2 md:w-16 md:h-16",
                })}
                <div className="mr-2 md:mr-0">
                  <h3 className="font-bold text-xl mb-2 md:text-[24px] md:leading-[24px]">
                    {route.name}
                  </h3>
                  <p className="font-medium text-[#444444] md:text-[20px] md:leading-[20px]">
                    {route.description}
                  </p>
                </div>
                <div className="font-medium text-[#444444] inline-flex items-center ml-auto mt-1 md:ml-0 md:mt-6 md:text-[20px] md:leading-[20px]">
                  <UserIcon
                    fill="currentcolor"
                    width={14}
                    height={14}
                    className="shrink-0 mr-1"
                  />
                  <span className="max-w-[60px] truncate">
                    {route.watchers}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a
          className="bg-yellow-400 p-5 rounded-xl font-bold flex items-center"
          href="catalog.html"
        >
          Показать все
          <ArrowRightIcon className="ml-auto shrink-0" width={13} height={13} />
        </a>
      </div>
    </section>
  );
};

// Routes block end

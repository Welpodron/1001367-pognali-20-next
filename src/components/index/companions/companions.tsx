// Companions block start

import React from "react";

import ArrowRightIcon from "/public/icons/svg/1D2E5B-utils-triangle-arrow-right.svg";

import { COMPANIONS, COUNTRIES, TRANSPORTS } from "@/data/data";

import { Tooltip } from "@/components/generic/Tooltip/Tooltip";

import Image from "next/image";

export const Companions = () => {
  return (
    <section className="bg-[#192144] relative after:bg-inherit after:absolute after:top-full after:z-[2] after:block after:rounded-b-xl after:w-full after:h-[30px]">
      <div className="p-5 pb-0 pt-[calc(30px+30px)] space-y-5">
        <header className="companions__header space-y-5 text-white">
          <h2 className="font-bold text-2xl text-orange-400">Попутчики</h2>
          <p className="companions__subtitle subtitle">
            Все мы индивидуальны и у каждого свой взгляд на идеальный отдых.
            Одному нужен пляж и коктейль,
            <br /> а другому маршрут для хайкинга.
          </p>
          <p className="font-bold">
            Теперь можно легко
            <br className="companions__br-tablet" /> найти единомышленников!
          </p>
        </header>
        <ul className="text-center grid gap-5 md:grid-cols-2">
          {[...COMPANIONS]
            .sort(
              (companionCurrent, companionNext) =>
                companionNext.likes - companionCurrent.likes
            )
            .slice(0, 2)
            .map((companion, index) => (
              <li key={index} className="bg-white rounded-xl overflow-hidden">
                <div className="h-[280px] relative">
                  <Image
                    src={companion.img}
                    fill={true}
                    alt={`Изображение ${companion.name}`}
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5 grid gap-2">
                  <ul className="flex flex-wrap justify-center -mt-10 relative">
                    {companion.countries.map((country, index) => (
                      <Tooltip key={index} text={country}>
                        {COUNTRIES.find((c) => c.name === country)?.icon({
                          width: 35,
                          height: 25,
                          className: "my-1 mx-2",
                        })}
                      </Tooltip>
                    ))}
                  </ul>
                  <a className="font-bold text-2xl" href="#">
                    {companion.name}
                  </a>
                  <p>{companion.hashtags}</p>
                  <ul className="flex flex-wrap justify-center">
                    {TRANSPORTS.map((transport, index) => (
                      <Tooltip key={index} text={transport.name}>
                        {transport.icon({
                          width: 25,
                          height: 25,
                          fill: "#1D2E5B",
                          className: `${
                            companion.transports.includes(transport.name)
                              ? "opacity-100"
                              : "opacity-25"
                          } my-1 mx-2`,
                        })}
                      </Tooltip>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
        </ul>
        <a
          className="bg-yellow-400 p-5 rounded-xl font-bold flex items-center"
          href="catalog.html"
        >
          Показать всех
          <ArrowRightIcon className="ml-auto shrink-0" width={13} height={13} />
        </a>
      </div>
    </section>
  );
};

// Companies block end

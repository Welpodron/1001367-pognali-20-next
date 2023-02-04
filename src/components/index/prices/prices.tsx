import { BASIC_PRICES, BUSINESS_PRICES } from "@/data/data";
import { useCallback, useRef } from "react";

import Image from "next/image";

export const Prices = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleDialogOpen = useCallback(() => {
    if (!dialogRef || !dialogRef.current) {
      return;
    }

    dialogRef.current.showModal();
  }, [dialogRef]);

  const handleDialogClose = useCallback(() => {
    if (!dialogRef || !dialogRef.current) {
      return;
    }

    dialogRef.current.close();
  }, [dialogRef]);

  return (
    <section className="bg-[#E6E8F1] relative after:bg-inherit after:absolute after:top-full after:z-[2] after:block after:rounded-b-xl after:w-full after:h-[30px]">
      <div className="p-5 pb-0 pt-[calc(30px+30px)] space-y-5">
        <header className="flex items-center">
          <h2 className="font-bold text-2xl text-orange-400 mr-2">
            Добавьте свой профиль
          </h2>
          <Image
            src="/images/rates@2x.png"
            alt="Иконка цен"
            width={100}
            height={100}
            className="shrink-0 ml-auto"
          />
        </header>
        <dl className="space-y-5 text-[#444444] index-prices-items">
          {BASIC_PRICES.map((price, index) => (
            <div key={index} className="index-prices-item flex items-center">
              <div className="border-b-[1px] border-[#E1E3E9] grow mr-4 pb-4">
                <dt>{price.feature}</dt>
                <dd>{price.price}</dd>
              </div>
            </div>
          ))}
        </dl>
        <button
          className="text-[#132576] font-bold"
          type="button"
          onClick={handleDialogOpen}
        >
          Показать тарифы для бизнеса
        </button>
        <dialog className="rounded-2xl p-0 w-full" ref={dialogRef}>
          <div className="p-6 space-y-5">
            <h3 className="font-bold text-2xl text-orange-400 text-center">
              Бизнес-тарифы
            </h3>
            <dl className="space-y-5 text-[#444444] text-[16px] leading-[22px] font-light">
              {BUSINESS_PRICES.map((price, index) => (
                <div key={index}>
                  <dt>{price.feature}</dt>
                  <dd>{price.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <button
            className="px-6 py-4 bg-[#F3F4F8] w-full text-center text-[#1D2E5B] uppercase font-bold text-[16px] leading-[24px]"
            type="button"
            onClick={handleDialogClose}
          >
            Закрыть окно
          </button>
        </dialog>
      </div>
    </section>
  );
};

import PhoneIcon from "/public/icons/svg/161C35-topmenu-phone-spd.svg";
import MailIcon from "/public/icons/svg/STATIC-contacts-mail.svg";

import Image from "next/image";
import { AppContext } from "@/pages/_app";
import { useContext } from "react";

export const Promo = () => {
  const { defaultHeaderHeight } = useContext(AppContext);

  return (
    <section className="bg-[#192144] text-white">
      <div
        className="p-5 space-y-5"
        style={{ paddingTop: defaultHeaderHeight + 30 }}
      >
        <h1 className="text-[36px] leading-[40px] text-center font-bold">
          В путешествие с крутыми попутчиками!
        </h1>
        <div className="relative h-[255px]">
          <Image
            src="/images/traveller-illustration-mobile@2x.png"
            alt="Иконка путешественник"
            className="object-contain"
            fill={true}
          />
        </div>
        <div className="flex">
          <ul className="flex">
            <li className="flex">
              <a
                className="w-[40px] h-[40px] grid place-content-center p-1 bg-[#FF8D30] rounded-full"
                href="tel:+88005558628"
                aria-label="Позвонить нам (8 800 555-86-28)"
              >
                <PhoneIcon fill="#161C35" width={20} height={20} />
              </a>
            </li>
            <li className="flex">
              <a
                className="w-[40px] h-[40px] grid place-content-center p-1 bg-[#FFBD30] rounded-full"
                href="mailto:mail@htmlacademy.ru"
                aria-label="Написать нам письмо (mail@htmlacademy.ru)"
              >
                <MailIcon fill="#161C35" width={20} height={20} />
              </a>
            </li>
          </ul>
          <a
            className="bg-[#FFD74B] items-center justify-center text-center py-1 grow px-4 rounded-full font-bold inline-flex text-black uppercase text-[17px] leading-[20px]"
            href="auth.html"
          >
            Авторизация
          </a>
        </div>
        <blockquote className="space-y-5">
          <p className="font-light text-[16px] leading-[22px]">
            «Лучшее приложение,
            <br />
            что я видел в жизни!»
          </p>
          <cite className="font-bold not-italic block text-[16px] leading-[22px]">
            Мурат Эльтазин
            <br />
            главный редактор газеты «гаджетлайф»
          </cite>
        </blockquote>
        <ol className="text-[#161C35] text-[18px] leading-none font-bold index-promo-items">
          <li className="index-promo-item">
            <p>
              Выберите
              <br />
              направление
            </p>
          </li>
          <li className="index-promo-item">
            <p>
              Изучите идеи
              <br />
              путешественников
            </p>
          </li>
          <li className="index-promo-item">
            <p>
              Находите тех,
              <br />
              кто похож на вас
            </p>
          </li>
          <li className="index-promo-item">
            <p>
              Путешествуйте
              <br />
              вместе!
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

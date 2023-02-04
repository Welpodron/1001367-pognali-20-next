import { useCallback, useRef, useState } from "react";

import ArrowRightIcon from "/public/icons/svg/1D2E5B-utils-triangle-arrow-right.svg";
import PhoneIcon from "/public/icons/svg/STATIC-contacts-phone.svg";
import MailIcon from "/public/icons/svg/STATIC-contacts-mail.svg";
import MarkerIcon from "/public/icons/svg/FFD74B-contacts-location.svg";

import Image from "next/image";

export const Contacts = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isFormSubmitting) {
        return;
      }

      setIsFormSubmitting(true);

      if (!emailRef || !emailRef.current) {
        return setIsFormSubmitting(false);
      }

      emailRef.current.focus();

      if (!email.length) {
        return setIsFormSubmitting(false);
      }

      console.log(email);

      setTimeout(() => {
        setIsFormSubmitting(false);
      }, 2000);
    },
    [email, isFormSubmitting, setIsFormSubmitting, emailRef]
  );

  return (
    <>
      <section className="bg-[#192144] text-white text-center relative after:bg-inherit after:absolute after:top-full after:z-[2] after:block after:rounded-b-xl after:w-full after:h-[30px]">
        <div className="p-5 pb-0 pt-[calc(30px+30px)] space-y-5">
          <h2 className="font-bold text-2xl text-orange-400">
            Заинтересовались?
          </h2>
          <p className="register__subtitle subtitle">
            Зарегистрируйтесь,
            <br className="register-mobile-br" /> это быстро и бесплатно!
            <br />
            Уже зарегистрированы? Тогда скорее {""}
            <a className="text-[#FFD74B] underline" href="auth.html">
              авторизуйтесь
            </a>
            .
          </p>
          <form onSubmit={handleSubmit} className="flex relative">
            <input
              className="p-4 pr-16 text-black rounded-xl grow"
              type="email"
              name="email"
              placeholder="E-mail"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              required={true}
              ref={emailRef}
            />
            <button
              className="py-4 px-5 bg-yellow-400 rounded-xl h-full absolute right-0 top-0"
              type="submit"
              aria-label="Отправить"
              disabled={isFormSubmitting}
            >
              <ArrowRightIcon width={13} height={13} />
            </button>
          </form>
          <p>
            Остались вопросы?
            <br /> Мы с радостью на них ответим!
          </p>
          <ul className="font-bold text-left uppercase">
            <li>
              <a
                className="text-[#FFD74B] inline-flex items-center flex-wrap"
                href="tel:+88005558628"
              >
                <span className="bg-[#121936] p-4 rounded-full shrink-0 mr-4">
                  <PhoneIcon fill="currentcolor" width={20} height={20} />
                </span>
                <span>8 800 555-86-28</span>
              </a>
            </li>
            <li>
              <a
                className="text-[#FFD74B] inline-flex items-center flex-wrap"
                href="mailto:mail@htmlacademy.ru"
              >
                <span className="bg-[#121936] p-4 rounded-full shrink-0 mr-4">
                  <MailIcon fill="currentcolor" width={20} height={20} />
                </span>
                <span>mail@htmlacademy.ru</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="bg-[#FFD74B] relative after:bg-inherit after:absolute after:top-full after:z-[2] after:block after:rounded-b-xl after:w-full after:h-[30px]">
        <address className="p-5 pb-0 pt-[calc(30px+30px)] space-y-5 not-italic">
          <a
            className="text-[#192144] inline-flex items-center flex-wrap uppercase font-bold"
            href="mailto:mail@htmlacademy.ru"
          >
            <span className="bg-[#121936] p-4 rounded-full shrink-0 mr-4">
              <MarkerIcon fill="#FFD74B" width={20} height={20} />
            </span>
            <span>
              ул. Большая
              <br /> Конюшенная, 19/8
            </span>
          </a>
          <a
            className="p-5 rounded-xl text-[18px] leading-none text-[#192144] font-bold flex items-center border-[3px] border-[#192144]"
            href="catalog.html"
          >
            Проложить маршрут
            <ArrowRightIcon
              fill="currentcolor"
              className="ml-auto shrink-0"
              width={13}
              height={13}
            />
          </a>
        </address>
      </div>
      <div className="relative h-[420px]">
        <Image
          src="/images/map-desktop@2x.jpg"
          alt="Карта"
          className="object-cover object-center"
          fill={true}
        />
      </div>
    </>
  );
};

import FacebookIcon from "/public/icons/svg/192144-social-facebook-spd.svg";
import InstIcon from "/public/icons/svg/192144-social-instagram-spd.svg";
import VkIcon from "/public/icons/svg/192144-social-vk-spd.svg";
import MailIcon from "/public/icons/svg/STATIC-contacts-mail.svg";
import PhoneIcon from "/public/icons/svg/STATIC-contacts-phone.svg";
import MenuClosedIcon from "/public/icons/svg/icon_menu_closed.svg";
import MenuOpenedIcon from "/public/icons/svg/icon_menu_opened.svg";
import { AppContext } from "@/pages/_app";
import Link from "next/link";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const { defaultHeaderHeight, setDefaultHeaderHeight } =
    useContext(AppContext);

  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    if (!headerRef || !headerRef.current) {
      return;
    }

    if (window.scrollY >= defaultHeaderHeight) {
      return setIsSticky(true);
    }

    return setIsSticky(false);
  }, [headerRef, defaultHeaderHeight, setIsSticky]);

  useEffect(() => {
    if (!headerRef || !headerRef.current) {
      return;
    }

    const { height: headerHeight } = headerRef.current.getBoundingClientRect();
    setDefaultHeaderHeight(headerHeight);

    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef, handleScroll, setDefaultHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className={`bg-transparent w-full z-30 top-0 left-0 ${
        isOpened ? "bg-white/90" : isSticky ? "bg-white/70" : ""
      } ${isSticky || isOpened ? "fixed backdrop-blur-sm" : "absolute"}`}
    >
      <div className="p-5">
        <div className="flex">
          <a href=""></a>
          <button
            className="p-2 ml-auto shrink-0"
            onClick={() => setIsOpened((value) => !value)}
            type="button"
          >
            {isOpened ? <MenuOpenedIcon /> : <MenuClosedIcon />}
          </button>
        </div>
        <div className={`space-y-5 pt-5 ${isOpened ? "" : "hidden"}`}>
          <nav className="text-center text-[#192144] uppercase font-medium text-[30px] leading-[35px]">
            <ul className="grid gap-2">
              <li>
                <Link href="/">О сервисе</Link>
              </li>
              <li>
                <Link href="/form">Направления</Link>
              </li>
              <li>
                <Link href="/catalog">Попутчики</Link>
              </li>
            </ul>
          </nav>
          <a
            className="bg-[#FFD74B] items-center justify-center text-center p-4 grow rounded-full font-bold flex text-black uppercase text-[17px] leading-[20px]"
            href="auth.html"
          >
            Авторизация
          </a>
          <ul className="font-bold text-left uppercase">
            <li>
              <a
                className="text-[#121936] inline-flex items-center flex-wrap"
                href="tel:+88005558628"
              >
                <span className="bg-[#121936] p-4 rounded-full shrink-0 mr-4">
                  <PhoneIcon fill="#FFD74B" width={20} height={20} />
                </span>
                <span>8 800 555-86-28</span>
              </a>
            </li>
            <li>
              <a
                className="text-[#121936] inline-flex items-center flex-wrap"
                href="mailto:mail@htmlacademy.ru"
              >
                <span className="bg-[#121936] p-4 rounded-full shrink-0 mr-4">
                  <MailIcon fill="#FFD74B" width={20} height={20} />
                </span>
                <span>mail@htmlacademy.ru</span>
              </a>
            </li>
          </ul>
          <ul className="flex justify-center">
            <li className="m-1">
              <a
                className="inline-flex p-4"
                href="https://www.facebook.com/htmlacademy"
                aria-label="Погнали на Facebook"
              >
                <FacebookIcon width={18} height={18} />
              </a>
            </li>
            <li className="m-1">
              <a
                className="inline-flex p-4"
                href="https://vk.com/htmlacademy"
                aria-label="Погнали в Вконтакте"
              >
                <VkIcon width={18} height={18} />
              </a>
            </li>
            <li className="m-1">
              <a
                className="inline-flex p-4"
                href="https://www.instagram.com/htmlacademy"
                aria-label="Погнали в Instagram"
              >
                <InstIcon width={18} height={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

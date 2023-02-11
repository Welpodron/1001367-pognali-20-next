import AcademyIcon from "/public/icons/svg/192144-social-academy-spd.svg";
import FacebookIcon from "/public/icons/svg/192144-social-facebook-spd.svg";
import InstIcon from "/public/icons/svg/192144-social-instagram-spd.svg";
import VkIcon from "/public/icons/svg/192144-social-vk-spd.svg";
import LogoIcon from "/public/images/logo-mobile-blue@2x.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white relative before:bg-inherit before:absolute before:bottom-full after:z-[2] before:block before:rounded-t-xl before:w-full before:h-[30px]">
      <div className="p-5 grid gap-10">
        <Link
          className="w-[96px] h-[19px] inline-flex relative mx-auto"
          href="/"
        >
          <Image
            className="object-cover"
            alt="Логотип сайта"
            fill={true}
            src={LogoIcon}
          />
        </Link>
        <ul className="flex justify-center">
          <li className="m-1">
            <a
              className="inline-flex bg-[#FFD74B] p-4 rounded-full"
              href="https://www.facebook.com/htmlacademy"
              aria-label="Погнали на Facebook"
            >
              <FacebookIcon width={18} height={18} />
            </a>
          </li>
          <li className="m-1">
            <a
              className="inline-flex bg-[#FFD74B] p-4 rounded-full"
              href="https://vk.com/htmlacademy"
              aria-label="Погнали в Вконтакте"
            >
              <VkIcon width={18} height={18} />
            </a>
          </li>
          <li className="m-1">
            <a
              className="inline-flex bg-[#FFD74B] p-4 rounded-full"
              href="https://www.instagram.com/htmlacademy"
              aria-label="Погнали в Instagram"
            >
              <InstIcon width={18} height={18} />
            </a>
          </li>
        </ul>
        <a
          className="flex items-center"
          href="https://htmlacademy.ru/intensive/adaptive"
        >
          <span className="text-[#444444] text-[16px] leading-none">
            Разработано
          </span>
          <AcademyIcon
            className="ml-auto shrink-0"
            fill="#192144"
            width={27}
            height={34}
          />
        </a>
      </div>
    </footer>
  );
};

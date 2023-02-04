import { Footer } from "@/components/global/footer/footer";
import { Header } from "@/components/global/header/header";

import { Companions } from "@/components/index/companions/companions";
import { Contacts } from "@/components/index/contacts/contacts";
import { Prices } from "@/components/index/prices/prices";
import { Promo } from "@/components/index/promo/promo";
import { Routes } from "@/components/index/routes/routes";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

const About = () => {
  return (
    <section className="bg-[#192144] text-white relative after:bg-inherit after:absolute after:top-full after:z-[2] after:block after:rounded-b-xl after:w-full after:h-[30px]">
      <div className="p-5 space-y-5">
        <header className="space-y-5">
          <h2 className="font-bold text-[#FF8D30] text-[24px] leading-none">
            О сервисе
          </h2>
          <p className="font-light text-[16px] leading-[22px]">
            Любое путешествие веселее
            <br /> с попутчиками, которые на одной волне с тобой! Делитесь
            своими идеями путешествий
            <br /> и черпайте вдохновение в чужих.
          </p>
          <p className="font-bold text-[16px] leading-[22px]">
            А если найдете кого-то близкого по духу — скорее зовите в совместный
            трип!
          </p>
        </header>
        {/* <a
          className="bg-yellow-400 p-5 rounded-xl font-bold inline-flex text-black"
          href="#"
        >
          Подробнее
        </a> */}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main>
        <Promo></Promo>
        <About></About>
        <Routes></Routes>
        <Companions></Companions>
        <Prices></Prices>
        <Contacts></Contacts>
      </Main>
      <Footer></Footer>
    </>
  );
}

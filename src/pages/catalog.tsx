import { Footer } from "@/components/global/footer/footer";
import { Header } from "@/components/global/header/header";

import { Countries as CountriesFilter } from "@/components/catalog/filters/countries/countries";

import React from "react";
import { Companions as CompanionsFilter } from "@/components/catalog/filters/companions/companions";
import { Companions } from "@/components/catalog/companions/companions";

export default function Catalog() {
  return (
    <>
      {/* <Header></Header> */}
      <main>
        <CountriesFilter />
        <section className="bg-[#EDEFF6] p-5 space-y-5">
          <CompanionsFilter />
          <Companions />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

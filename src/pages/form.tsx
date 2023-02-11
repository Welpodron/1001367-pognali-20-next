import { CurrentPlans } from "@/components/form/current-plans/CurrentPlans";
import { FuturePlans } from "@/components/form/future-plans/FuturePlans";
import { Personal } from "@/components/form/personal/Personal";
import { Footer } from "@/components/global/footer/Footer";
import { Header } from "@/components/global/header/Header";

export default function Form() {
  return (
    <>
      <Header />
      <main>
        <Personal />
        <CurrentPlans />
        <FuturePlans />
      </main>
      <Footer />
    </>
  );
}

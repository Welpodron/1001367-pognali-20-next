import { PLANS } from "@/data/data";

export const Plans = () => {
  return (
    <section className="bg-[#DFE3F0]">
      <div className="p-5">
        <h2 className="text-[#1D2E5B] font-bold text-[24px] leading-none">
          Мои планы:
        </h2>
        <ol className="space-y-3">
          {PLANS.map((plan, index) => (
            <li className="bg-white p-5 rounded-xl" key={index}>
              <p>{plan.route}</p>
              <p>{plan.companions} попутчика</p>
              <p>
                <time dateTime={plan.time.start}>
                  {new Date(plan.time.start).toLocaleDateString("ru-RU", {
                    dateStyle: "medium",
                  })}
                </time>
                <time dateTime={plan.time.end}>
                  {new Date(plan.time.end).toLocaleDateString("ru-RU", {
                    dateStyle: "medium",
                  })}
                </time>
              </p>
              <a>Изменить</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

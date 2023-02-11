import CurrentPlansStyles from "./CurrentPlansStyles";
import { PLANS } from "@/data/data";
import { getMonthName } from "@/utils/time/time";

export const CurrentPlans = () => {
  return (
    <>
      <style jsx>{CurrentPlansStyles}</style>
      <section className="section current-plans">
        <div className="wrapper">
          <h2 className="h2">Мои планы:</h2>
          <ol className="current-plans__list">
            {PLANS.map((plan, index) => (
              <li className="current-plans__list-item" key={index}>
                <p className="current-plans__route">{plan.route}</p>
                <div className="current-plans__content">
                  <div className="current-plans__info">
                    <p className="current-plans__companions">
                      {plan.companions} попутчика
                    </p>
                    <p className="current-plans__duration">
                      <time
                        className="current-plans__duration-start"
                        dateTime={plan.time.start}
                      >
                        {new Date(plan.time.start).getDate()}{" "}
                        {getMonthName({
                          date: new Date(plan.time.start),
                          locale: "ru-RU",
                        }).slice(0, -1)}
                      </time>
                      {" — "}
                      <time
                        className="current-plans__duration-end"
                        dateTime={plan.time.end}
                      >
                        {new Date(plan.time.end).getDate()}{" "}
                        {getMonthName({
                          date: new Date(plan.time.end),
                          locale: "ru-RU",
                        }).slice(0, -1)}
                      </time>
                    </p>
                  </div>
                  <button type="button" className="current-plans__edit">
                    Изменить
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

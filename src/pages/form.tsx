import { InputNumber } from "@/components/form/steps/input-number/InputNumber";

import { Stepper } from "@/components/form/steps/stepper/Stepper";

import { InputDuration } from "@/components/form/steps/input-duration/InputDuration";
import { InputRoutes } from "@/components/form/steps/input-routes/InputRoutes";
import { useForm } from "@/hooks/use-form/use-form";
import { uuidv4 } from "@/utils/crypto/crypto";
import { RouteType } from "@/components/form/steps/input-routes/InputRoutesContext";
import { getDaysBetween } from "@/utils/time/time";

/*

На данный момент собственная валидация на уровне схемы не имплементирована, но в будущем будет добавлена :c

schema = {
  Validator.object().keys({
    companions: Validator.number().min(1).required(),
    children: Validator.boolean().required(),
    duration: Validator.object().keys({
      start: Validator.date().required(),
      end: Validator.date().required(),
    }),
    routes: Validator.array().items(
      Validator.object().keys({
        id: Validator.string().required(),
        country: Validator.string().required(),
        activity: Validator.string().required(),
      })
    ),
  })
}

*/

export default function Form() {
  const form = useForm({
    initialValues: {
      companions: 1,
      children: false,
      duration: [
        new Date(new Date().setHours(0, 0, 0, 0)),
        new Date(new Date().setHours(24, 0, 0, 0)),
      ],
      routes: [
        {
          id: uuidv4(),
          country: null,
          activity: null,
          a: {
            b: {
              c: { d: 1 },
            },
          },
        },
        {
          id: uuidv4(),
          country: null,
          activity: null,
        },
        {
          id: uuidv4(),
          country: null,
          activity: null,
        },
        {
          id: uuidv4(),
          country: null,
          activity: null,
        },
      ],
    },

    validate: {
      companions: (value) => {
        return value < 1 || isNaN(value)
          ? "Минимальное количество попутчиков должно быть не меньше 1"
          : null;
      },
      duration: (value) => {
        const _value = value as [Date | null, Date | null];

        const duration = _value.every((date) => date != null)
          ? getDaysBetween({
              firstDate: _value[0] as Date,
              secondDate: _value[1] as Date,
            })
          : null;

        if (!duration || duration < 1) {
          return "Минимальная длительность поездки должна быть не меньше 1 дня";
        }

        return null;
      },
      routes: (value) => {
        const _value = value as RouteType[];

        const errors = [];

        if (_value.some((route) => !route.country)) {
          errors.push(
            ..._value
              .filter((route) => !route.country)
              .map(({ id }) => ({
                id,
                type: "MISSING_COUNTRY",
                error: "Необходимо выбрать хотя бы одну страну",
              }))
          );
        }

        if (
          _value.some(
            (route) => !route.activity || !route.activity.trim().length
          )
        ) {
          errors.push(
            ..._value
              .filter((route) => !route.activity)
              .map(({ id }) => ({
                id,
                type: "MISSING_ACTIVITY",
                error:
                  "Необходимо заполнить планы времяпровождения для данной страны",
              }))
          );
        }

        return errors.length ? errors : null;
      },
    },
  });

  return (
    <main>
      <form
        className="bg-[#D4D9EB] p-5 space-y-5"
        // onSubmit={form.onSubmit((values) => {
        //   console.log(values);
        // })}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Stepper activeStep={1}>
          <div className="flex items-center">
            <h2 className="text-[#1D2E5B] font-bold text-[24px] leading-none pr-2">
              Добавить план:
            </h2>
            <Stepper.Controls />
          </div>
          <Stepper.Steps>
            <InputRoutes>
              <Stepper.Step
                number={1}
                title="Даты пребывания"
                description="Укажите предпочтительное количество попутчиков, которых
              вы хотели бы позвать в поездку и ее предполагаемую длительность."
              >
                <InputNumber
                  measure="Чел."
                  min={1}
                  label="Ищу попутчиков:"
                  // {...form.getFieldProps("companions")}
                />
                <InputDuration />
              </Stepper.Step>
              <Stepper.Step
                number={2}
                title="Маршрут"
                description="Укажите страны, которые вы хотели посетить. Это может быть одна
              или сразу несколько."
              >
                <InputRoutes.Countries />
              </Stepper.Step>
              <Stepper.Step
                number={3}
                title="Развлечения"
                description="Наконец, расскажите о своих планах времяпровождения. Можно писать
              в свободной форме и ставить тэги."
              >
                <InputRoutes.Activities />
              </Stepper.Step>
            </InputRoutes>
          </Stepper.Steps>
        </Stepper>
      </form>
    </main>
  );
}

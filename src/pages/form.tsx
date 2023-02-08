import { InputNumber } from "@/components/form/steps/input-number/InputNumber";

import { Stepper } from "@/components/form/steps/stepper/Stepper";

import { InputDuration } from "@/components/form/steps/input-duration/InputDuration";
import { useForm } from "@/hooks/use-form/use-form";
import { uuidv4 } from "@/utils/crypto/crypto";
import { getDaysBetween } from "@/utils/time/time";
import { InputRoutesCountriesSelect } from "@/components/form/steps/input-routes/InputRoutesCountriesSelect";
import { InputRoutesCountriesTextarea } from "@/components/form/steps/input-routes/InputRoutesActivitiesTextarea";
import PlusIcon from "/public/icons/svg/plus.svg";
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
      duration: [
        new Date(new Date().setHours(0, 0, 0, 0)),
        new Date(new Date().setHours(24, 0, 0, 0)),
      ],
      routes: [
        {
          country: null,
          activity: null,
          id: uuidv4(),
        },
      ],
    },
    validate: {
      companions: ({ value }: { value: number }) => {
        if (!value || value < 1) {
          return "Минимальное количество попутчиков должно быть не меньше 1";
        }
        return null;
      },
      duration: ({ values }: { values: [Date | null, Date | null] }) => {
        if (values !== undefined) {
          const duration = values.every((date) => date != null)
            ? getDaysBetween({
                firstDate: values[0] as Date,
                secondDate: values[1] as Date,
              })
            : null;

          if (!duration || duration < 1) {
            return "Минимальная длительность поездки должна быть не меньше 1 дня";
          }
        }
        return null;
      },
      routes: ({
        value,
        values,
        field,
      }: {
        value: any;
        values: any;
        field: string;
      }) => {
        if (field.includes("country") && !value) {
          return "Необходимо выбрать страну";
        }
        if (field.includes("activity")) {
          if (!value || !value.trim().length) {
            return "Необходимо заполнить планы времяпровождения для данной страны";
          }
        }
        return null;
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
          // console.log(form.values);
          form.validateValues();
          // form.resetValues();
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
                {...form.getFieldProps("companions")}
              />
              <InputDuration
                measure="Дн."
                min={1}
                label="Длительность:"
                {...form.getFieldProps("duration")}
              />
            </Stepper.Step>
            <Stepper.Step
              number={2}
              title="Маршрут"
              description="Укажите страны, которые вы хотели посетить. Это может быть одна
              или сразу несколько."
            >
              {(form.values.routes as { id: string }[]).map(({ id }, index) => (
                <InputRoutesCountriesSelect
                  deleteRoute={() => form.removeFieldValue("routes", index)}
                  routes={form.getFieldValue("routes")}
                  key={`routes_select_${id}`}
                  {...form.getFieldProps(`routes.${index}.country`)}
                />
              ))}
              <button
                className="border-[1px] border-[#e1e4f1] bg-[#EDEFF6] rounded px-2 py-3 w-full uppercase font-medium text-[#1D2E5B] text-[14px] leading-none text-left flex items-center truncate"
                type="button"
                onClick={() =>
                  form.insertFieldValue("routes", {
                    id: uuidv4(),
                    country: null,
                    activity: null,
                  })
                }
              >
                <span className="pr-2 truncate">Добавить страну</span>
                <PlusIcon width={14} height={14} className="ml-auto shrink-0" />
              </button>
            </Stepper.Step>
            <Stepper.Step
              number={3}
              title="Развлечения"
              description="Наконец, расскажите о своих планах времяпровождения. Можно писать
              в свободной форме и ставить тэги."
            >
              <div className="space-y-2 px-2">
                {(
                  form.values.routes as { id: string; country: string | null }[]
                ).map(({ id, country }, index) => {
                  if (!country) return null;
                  return (
                    <InputRoutesCountriesTextarea
                      key={`routes_select_${id}`}
                      country={form.getFieldValue(`routes.${index}.country`)}
                      {...form.getFieldProps(`routes.${index}.activity`)}
                    />
                  );
                })}
              </div>
            </Stepper.Step>
          </Stepper.Steps>
        </Stepper>
      </form>
    </main>
  );
}

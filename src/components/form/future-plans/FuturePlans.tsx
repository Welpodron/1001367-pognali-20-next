import FuturePlansStyles from "./FuturePlansStyles";
import { InputCheckbox } from "@/components/form/steps/input-checkbox/InputCheckbox";
import { InputDuration } from "@/components/form/steps/input-duration/InputDuration";
import { InputNumber } from "@/components/form/steps/input-number/InputNumber";
import { InputRoutesActivities } from "@/components/form/steps/input-routes/InputRoutesActivities";
import { InputRoutesCountries } from "@/components/form/steps/input-routes/InputRoutesCountries";
import { Stepper } from "@/components/form/steps/stepper/Stepper";
import { Modal } from "@/components/generic/modal/Modal";
import { useForm } from "@/hooks/use-form/use-form";
import { uuidv4 } from "@/utils/crypto/crypto";
import {
  getDaysBetween,
  getCurrentDate,
  getTomorrowDate,
} from "@/utils/time/time";
import { useCallback, useState } from "react";

export const FuturePlans = () => {
  // Ошибки на каждом шаге, также выглядит не особо удобно
  const [step, setStep] = useState(1);

  const form = useForm({
    initialValues: {
      companions: 1,
      withChildren: true,
      duration: [getCurrentDate(), getTomorrowDate()],
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
        // Использование step прямо внутри валидации пока что выглядит не особо удобно
        // Особенно если учесть то что степ позволяет использовать "любую" нумерацию
        if (step > 1) {
          return null;
        }
        if (!value || value < 1) {
          return "Минимальное количество попутчиков должно быть не меньше 1";
        }
        return null;
      },
      duration: ({ values }: { values: [Date | null, Date | null] }) => {
        if (step > 1) {
          return null;
        }
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
          if (step < 2) {
            return null;
          }
          return "Необходимо выбрать страну";
        }
        // Нужно сделать проверку на вообще существование поля в dom пригодились бы refs
        if (field.includes("activity")) {
          if (!value || !value.trim().length) {
            if (step !== 3) {
              return null;
            }
            return "Необходимо заполнить планы времяпровождения для данной страны";
          }
        }
        return null;
      },
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedValues, setSubmittedValues] = useState({});

  const handleStepChange = useCallback(
    (step: number) => {
      const errors = form.validateValues();
      if (!errors.length) {
        setStep(step);
      } else {
        setStep((currentStep) => {
          if (step < currentStep) {
            return step;
          } else {
            return currentStep;
          }
        });
      }
    },
    [setStep, form]
  );

  return (
    <>
      <style jsx>{FuturePlansStyles}</style>
      <section className="section future-plans">
        <div className="wrapper stepper">
          <Stepper state={[step, handleStepChange]} activeStep={1}>
            <header className="section__header">
              <h2 className="h2">Добавить план</h2>
              <Stepper.Controls />
            </header>
            <form
              className="future-plans__form"
              onSubmit={form.handleSubmit(
                (values) => {
                  console.log({ values });
                  setSubmittedValues(values);
                  setIsModalOpen(true);
                  form.resetValues();
                  setStep(1);
                },
                (errors) => {
                  console.log({ errors });
                }
              )}
            >
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
                    required={true}
                    {...form.getFieldProps("companions")}
                  />
                  <InputCheckbox
                    label="Можно с детьми"
                    {...form.getFieldProps("withChildren")}
                  />
                  <InputDuration
                    measure="Дн."
                    min={1}
                    label="Длительность:"
                    required={true}
                    {...form.getFieldProps("duration")}
                  />
                </Stepper.Step>
                <Stepper.Step
                  number={2}
                  title="Маршрут"
                  description="Укажите страны, которые вы хотели посетить. Это может быть одна
                или сразу несколько."
                >
                  <InputRoutesCountries
                    getFieldProps={form.getFieldProps}
                    removeFieldValue={form.removeFieldValue}
                    insertFieldValue={form.insertFieldValue}
                    routes={form.getFieldValue("routes")}
                  />
                </Stepper.Step>
                <Stepper.Step
                  number={3}
                  title="Развлечения"
                  description="Наконец, расскажите о своих планах времяпровождения. Можно писать
                в свободной форме и ставить тэги."
                >
                  <InputRoutesActivities
                    routes={form.getFieldValue("routes")}
                    getFieldProps={form.getFieldProps}
                  />
                </Stepper.Step>
              </Stepper.Steps>
              <Modal state={[isModalOpen, setIsModalOpen]}>
                <Modal.Content>
                  {JSON.stringify(submittedValues, null, 2)}
                </Modal.Content>
              </Modal>
            </form>
          </Stepper>
        </div>
      </section>
    </>
  );
};

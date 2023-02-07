import { useContext, useEffect, useId, useRef, useState } from "react";
import { StepType, StepperContext } from "./StepperContext";

type StepperStepPropsType = {
  /** Контент stepper */
  children: React.ReactNode;
  /** Название шага */
  title: string;
  /** Номер шага */
  number: number;
  /** Активный шаг или нет */
  active?: boolean;
  /** Завершенный шаг или нет */
  completed?: boolean;
  /** Описание шага */
  description?: string;
};

export const StepperStep = ({
  children,
  title,
  number,
  active,
  completed,
  description,
  ...props
}: StepperStepPropsType) => {
  const id = useId();

  const ref = useRef<HTMLLIElement>(null);

  const [prevStep, setPrevStep] = useState<StepType | null>(null);
  const [nextStep, setNextStep] = useState<StepType | null>(null);
  const [isFirstStep, setIsFirstStep] = useState<boolean>(false);
  const [isLastStep, setIsLastStep] = useState<boolean>(false);

  const { steps, activeStep, dispatchSteps, setActiveStep } =
    useContext(StepperContext);

  // Регистрация шага в stepper
  useEffect(() => {
    dispatchSteps({ type: "ADD_STEP", payload: { id, ref, number } });
    return () => {
      dispatchSteps({ type: "REMOVE_STEP", payload: { id, ref, number } });
    };
  }, [dispatchSteps, id, ref, number]);

  useEffect(() => {
    const nextStepIndex = steps.findIndex((step) => step.id === id) + 1;
    const prevStepIndex = steps.findIndex((step) => step.id === id) - 1;

    if (nextStepIndex < steps.length) {
      setNextStep(steps[nextStepIndex]);
    } else {
      setNextStep(null);
    }

    if (prevStepIndex >= 0) {
      setPrevStep(steps[prevStepIndex]);
    } else {
      setPrevStep(null);
    }

    if (prevStepIndex === -1) {
      setIsFirstStep(true);
    } else {
      setIsFirstStep(false);
    }

    if (nextStepIndex === steps.length) {
      setIsLastStep(true);
    } else {
      setIsLastStep(false);
    }
  }, [steps, setPrevStep, setNextStep, setIsFirstStep, setIsLastStep, id]);

  return activeStep === number ? (
    <li
      ref={ref}
      id={`form-steps-${id}`}
      className="p-5 space-y-5 bg-white rounded-xl"
    >
      <p className="text-[#1D2E5B] font-bold text-[20px] leading-none">
        Шаг {number}. <br /> {title}
      </p>
      <p className="text-[16px] leading-[22px] text-[#444444]">{description}</p>
      <div className="space-y-5">{children}</div>
      <nav className="space-y-2">
        {isLastStep ? (
          <button
            className="bg-[#FFD74B] px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px] block text-center"
            type="submit"
          >
            Отправить
          </button>
        ) : (
          nextStep && (
            <a
              onClick={() => setActiveStep(nextStep.number)}
              href={nextStep ? `#form-steps-${nextStep.id}` : "#"}
              className="bg-[#FFD74B] px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px] block text-center"
            >
              Следующий шаг
            </a>
          )
        )}
        {!isFirstStep && prevStep && (
          <a
            href={prevStep ? `#form-steps-${prevStep.id}` : "#"}
            onClick={() => setActiveStep(prevStep.number)}
            className="px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px] block text-center"
          >
            На шаг назад
          </a>
        )}
      </nav>
    </li>
  ) : (
    <></>
  );
};

StepperStep.displayName = "Stepper.Step";

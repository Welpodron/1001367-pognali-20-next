import { StepType, StepperContext } from "./StepperContext";
import StepperStyles from "./StepperStyles";
import ArrowRightIcon from "/public/icons/svg/1D2E5B-utils-triangle-arrow-right.svg";
import { useContext, useEffect, useId, useRef, useState } from "react";

type StepperStepPropsType = {
  /** Контент stepper */
  children: React.ReactNode;
  /** Название шага */
  title: string;
  /** Номер шага */
  number: number;
  /** Описание шага */
  description?: string;
  /** Ошибки шага */
  errors?: any[];
};

export const StepperStep = ({
  children,
  title,
  number,
  description,
  errors,
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

  // Обновление ошибок шага TODO: Rework!
  useEffect(() => {
    dispatchSteps({
      type: "UPDATE_STEP",
      payload: { id, ref: { current: null }, number: -1, errors },
    });
  }, [dispatchSteps, id, errors]);

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

  const { className } = StepperStyles;

  return activeStep === number ? (
    <>
      <li
        ref={ref}
        id={`form-steps-${id}`}
        className={`${className} stepper__list-item`}
      >
        <p className={`${className} stepper__step-title`}>
          Шаг {number}. <br /> {title}
        </p>
        <p className={`${className} stepper__step-description`}>
          {description}
        </p>
        <div className={`${className} stepper__step-content`}>{children}</div>
        <nav className={`${className} stepper__step-nav`}>
          <ol className={`${className} stepper__step-nav-list`}>
            {isLastStep ? (
              <li className={`${className} stepper__step-nav-list-item`}>
                <button
                  className={`${className} stepper__step-nav-link stepper__step-nav-link--next stepper__step-nav-link--last`}
                  type="submit"
                >
                  <span className="pr-2 truncate">Отправить</span>
                  <ArrowRightIcon
                    className="shrink-0 ml-auto"
                    width={14}
                    height={14}
                    fill="currentColor"
                  />
                </button>
              </li>
            ) : (
              nextStep && (
                <li className={`${className} stepper__step-nav-list-item`}>
                  <a
                    onClick={() => setActiveStep(nextStep.number)}
                    href={nextStep ? `#form-steps-${nextStep.id}` : "#"}
                    className={`${className} stepper__step-nav-link stepper__step-nav-link--next`}
                  >
                    <span className="pr-2 truncate">Следующий шаг</span>
                    <ArrowRightIcon
                      className="shrink-0 ml-auto"
                      width={14}
                      height={14}
                      fill="currentColor"
                    />
                  </a>
                </li>
              )
            )}
            {!isFirstStep && prevStep && (
              <li className={`${className} stepper__step-nav-list-item`}>
                <a
                  href={prevStep ? `#form-steps-${prevStep.id}` : "#"}
                  onClick={() => setActiveStep(prevStep.number)}
                  className={`${className} stepper__step-nav-link stepper__step-nav-link--prev`}
                >
                  <span>На шаг назад</span>
                </a>
              </li>
            )}
          </ol>
        </nav>
      </li>
    </>
  ) : (
    <></>
  );
};

StepperStep.displayName = "Stepper.Step";

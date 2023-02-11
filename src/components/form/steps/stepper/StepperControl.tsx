import { StepperContextType } from "./StepperContext";
import StepperStyles from "./StepperStyles";
import { clsx } from "clsx";

export type StepperControlPropsType = {
  /** Идентификатор шага */
  id: string;
  /** Название шага */
  title: string;
  /** Номер шага */
  number: number;
  /** Ошибки шага */
  errors?: any[];
};

export const StepperControl = ({
  title,
  id,
  number,
  activeStep,
  setActiveStep,
  errors,
}: StepperControlPropsType &
  Pick<StepperContextType, "activeStep" | "setActiveStep">) => {
  const { className } = StepperStyles;

  return (
    <li>
      <a
        className={clsx(
          `${className} stepper__control`,
          number === activeStep ? "opacity-100" : "opacity-30",
          errors?.length ? "bg-[#FF0000]" : "bg-[#1D2E5B]"
        )}
        href={`#form-steps-${id}`}
        aria-label={`Перейти на шаг ${title}`}
        onClick={() => setActiveStep(number)}
      ></a>
    </li>
  );
};

StepperControl.displayName = "Stepper.Control";

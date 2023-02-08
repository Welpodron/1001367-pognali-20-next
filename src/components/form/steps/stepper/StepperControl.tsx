import { StepperContextType } from "./StepperContext";

export type StepperControlProps = {
  /** Идентификатор шага */
  id: string;
  /** Название шага */
  title: string;
  /** Номер шага */
  number: number;
} & Pick<StepperContextType, "activeStep" | "setActiveStep">;

export const StepperControl = ({
  title,
  id,
  number,
  activeStep,
  setActiveStep,
}: StepperControlProps) => {
  return (
    <li>
      <a
        className={`block rounded-full m-2 w-[5px] h-[5px] bg-[#1D2E5B] ${
          number === activeStep ? "opacity-100" : "opacity-30"
        }`}
        href={`#form-steps-${id}`}
        aria-label={`Перейти на шаг ${title}`}
        onClick={() => setActiveStep(number)}
      ></a>
    </li>
  );
};

StepperControl.displayName = "Stepper.Control";

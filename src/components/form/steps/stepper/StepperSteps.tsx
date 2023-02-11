import StepperStyles from "./StepperStyles";

type StepperStepsPropsType = {
  /** Контент Stepper.Steps */
  children: React.ReactNode;
};

export const StepperSteps = ({ children, ...props }: StepperStepsPropsType) => {
  const { className } = StepperStyles;

  return (
    <>
      <ol className={`${className} stepper__list`} {...props}>
        {children}
      </ol>
    </>
  );
};

StepperSteps.displayName = "Stepper.Steps";

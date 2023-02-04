type StepperStepsProps = {
  /** Контент Stepper.Steps */
  children: React.ReactNode;
};

export const StepperSteps = ({ children, ...props }: StepperStepsProps) => {
  return (
    <ol className="space-y-5" {...props}>
      {children}
    </ol>
  );
};

StepperSteps.displayName = "Stepper.Steps";

import { useContext } from "react";
import { StepperContext } from "./StepperContext";
import { StepperControl } from "./StepperControl";

export const StepperControls = () => {
  const { steps, activeStep, setActiveStep } = useContext(StepperContext);

  return (
    <nav className="ml-auto">
      <ol className="flex items-center flex-wrap">
        {steps.map(({ id, number }) => (
          <StepperControl
            key={id}
            title={id}
            {...{ id, number, activeStep, setActiveStep }}
          />
        ))}
      </ol>
    </nav>
  );
};

StepperControls.displayName = "Stepper.Controls";

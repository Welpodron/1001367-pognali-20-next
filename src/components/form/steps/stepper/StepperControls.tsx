import { StepperContext } from "./StepperContext";
import { StepperControl } from "./StepperControl";
import StepperStyles from "./StepperStyles";
import { useContext } from "react";

export const StepperControls = () => {
  const { steps, activeStep, setActiveStep } = useContext(StepperContext);
  const { className } = StepperStyles;

  return (
    <nav>
      <ol className={`${className} stepper__controls`}>
        {steps.map(({ id, number, errors }) => (
          <StepperControl
            key={id}
            title={id}
            {...{ id, number, activeStep, setActiveStep, errors }}
          />
        ))}
      </ol>
    </nav>
  );
};

StepperControls.displayName = "Stepper.Controls";

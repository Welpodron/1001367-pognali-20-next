import { useReducer, useState } from "react";
import { StepType, StepActionType, StepperContext } from "./StepperContext";
import { StepperControls } from "./StepperControls";
import { StepperStep } from "./StepperStep";
import { StepperSteps } from "./StepperSteps";

type StepperProps = {
  /** Контент stepper */
  children: React.ReactNode;
  /** Номер активного шага */
  activeStep: number;
};

const stepperReducer = (
  state: StepType[],
  { type, payload }: StepActionType
) => {
  switch (type) {
    case "ADD_STEP": {
      const { id, ref, number } = payload;

      if (!state.find((step) => step.id === id)) {
        return [...state, { id, ref, number }];
      }
    }
    default:
      return state;
  }
};

export const Stepper = ({ children, activeStep, ...props }: StepperProps) => {
  const [_activeStep, setActiveStep] = useState(activeStep);

  const [steps, dispatchSteps] = useReducer(stepperReducer, []);

  return (
    <StepperContext.Provider
      value={{ steps, dispatchSteps, activeStep: _activeStep, setActiveStep }}
    >
      {children}
    </StepperContext.Provider>
  );
};

Stepper.displayName = "Stepper";
Stepper.Step = StepperStep;
Stepper.Steps = StepperSteps;
Stepper.Controls = StepperControls;

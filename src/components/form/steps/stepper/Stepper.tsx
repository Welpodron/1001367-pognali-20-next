import {
  StepType,
  StepActionType,
  StepperContext,
  StepperContextType,
} from "./StepperContext";
import { StepperControls } from "./StepperControls";
import { StepperStep } from "./StepperStep";
import { StepperSteps } from "./StepperSteps";
import StepperStyles from "./StepperStyles";
import { useReducer, useState } from "react";

type StepperPropsType = {
  /** Контент stepper */
  children: React.ReactNode;
  /** Контроль извне */
  state?: [number, (value: number) => void];
};

const stepperReducer = (
  state: StepType[],
  { type, payload }: StepActionType
) => {
  switch (type) {
    case "ADD_STEP": {
      const { id, ref, number, errors } = payload;

      if (!state.find((step) => step.id === id)) {
        return [...state, { id, ref, number, errors }];
      }
    }
    case "UPDATE_STEP": {
      const { id, errors } = payload;

      return state.map((step) => (step.id === id ? { ...step, errors } : step));
    }
    case "REMOVE_STEP": {
      const { id } = payload;

      return state.filter((step) => step.id !== id);
    }
    default:
      return state;
  }
};

export const Stepper = ({
  children,
  activeStep,
  state,
}: StepperPropsType & Pick<StepperContextType, "activeStep">) => {
  const [insideValue, setInsideValue] = useState(activeStep);
  const [outsideValue, setOutsideValue] = state ?? [];
  const finalValue = outsideValue ?? insideValue;

  const [steps, dispatchSteps] = useReducer(stepperReducer, []);
  const { styles } = StepperStyles;

  return (
    <StepperContext.Provider
      value={{
        steps,
        dispatchSteps,
        activeStep: finalValue,
        setActiveStep: setOutsideValue ?? setInsideValue,
      }}
    >
      {styles}
      {children}
    </StepperContext.Provider>
  );
};

Stepper.displayName = "Stepper";
Stepper.Step = StepperStep;
Stepper.Steps = StepperSteps;
Stepper.Controls = StepperControls;

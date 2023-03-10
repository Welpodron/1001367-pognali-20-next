import { createContext } from "react";

export type StepType = {
  /** Id шага */
  id: string;
  /** Номер шага */
  number: number;
  /** Ссылка на элемент */
  ref: React.RefObject<HTMLLIElement>;
};

export type StepActionType = {
  /** Тип действия */
  type: string;
  /** Полезная нагрузка */
  payload: StepType;
};

export type StepperContextType = {
  /** Список шагов */
  steps: StepType[];
  /** Диспатчер для добавления шага */
  dispatchSteps: React.Dispatch<StepActionType>;
  /** Номер активного шага */
  activeStep: number;
  /** Функция для установки активного шага */
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const StepperContext = createContext<StepperContextType>({
  steps: [],
  dispatchSteps: () => {},
  activeStep: NaN,
  setActiveStep: () => {},
});

StepperContext.displayName = "Stepper.Context";

import { createContext } from "react";

export type ModalContextType = {
  isOpened: boolean;
  /** Функция для открытия модального окна */
  setIsOpened: (value: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpened: false,
  setIsOpened: () => {},
});

ModalContext.displayName = "Modal.Context";

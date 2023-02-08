import { useState } from "react";
import { ModalContext } from "./ModalContext";
import { ModalContent } from "./ModalContent";

export type ModalPropsType = {
  /** Содержимое обертки модального окна */
  children: React.ReactNode;
  /** Контроль извне */
  state?: [boolean, (value: boolean) => void];
};

export const Modal = ({ children, state }: ModalPropsType) => {
  const [insideValue, setInsideValue] = useState(true);
  const [outsideValue, setOutsideValue] = state ?? [];
  const finalValue = outsideValue ?? insideValue;

  return (
    <ModalContext.Provider
      value={{
        isOpened: finalValue,
        setIsOpened: setOutsideValue ?? setInsideValue,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

Modal.displayName = "Modal";
Modal.Content = ModalContent;

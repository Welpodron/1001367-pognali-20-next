import { PopoverContent } from "./PopoverContent";
import { PopoverContextType, PopoverContext } from "./PopoverContext";
import { PopoverControl } from "./PopoverControl";
import { useRef, useState } from "react";

type PopoverPropsType = {
  /**
   * Содержимое popover
   */
  children: React.ReactNode;
  /**
   * Внешнее управление открытием/закрытием popover
   */
  state?: [boolean, (value: boolean) => void];
} & Omit<
  PopoverContextType,
  "controlRef" | "contentRef" | "isOpened" | "setIsOpened"
>;

// TODO: Возможность сокрытия открытия на hover
export const Popover = ({
  children,
  trapFocus = false,
  isDOMVisible = false,
  strategy = "portal",
  state,
}: PopoverPropsType) => {
  const [insideValue, setInsideValue] = useState<boolean>(false);
  const [outsideValue, setOutsideValue] = state ?? [];

  const finalValue = outsideValue != null ? outsideValue : insideValue;

  const controlRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDialogElement>(null);

  return (
    <PopoverContext.Provider
      value={{
        isOpened: finalValue,
        isDOMVisible,
        setIsOpened: setOutsideValue ?? setInsideValue,
        controlRef,
        contentRef,
        strategy,
        trapFocus,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

Popover.displayName = "Popover";

Popover.Control = PopoverControl;
Popover.Content = PopoverContent;

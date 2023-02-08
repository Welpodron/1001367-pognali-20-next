import React, { createContext } from "react";

export type PopoverContextType = {
  /**
   * Следует ли отображать popover в DOM сразу же после рендера (смены состояния isOpened)
   * */
  isDOMVisible?: boolean;
  /**
   * Следует ли фиксировать фокус внутри popover
   * */
  trapFocus?: boolean;
  /**
   * Как popover будет отображаться: внутри родителя или в портале
   * */
  strategy?: "parent" | "portal";
  /**
   * Ссылка на элемент, относительно которого будет позиционироваться popover
   * */
  controlRef: React.RefObject<HTMLButtonElement>;
  /**
   * Ссылка на элемент, который будет отображаться внутри popover
   * */
  contentRef: React.RefObject<HTMLDialogElement>;
  /**
   * Открыт ли popover
   * */
  isOpened: boolean;
  /**
   * Устанавливает открыт ли popover
   * */
  setIsOpened: (isOpened: boolean) => void;
};

export const PopoverContext = createContext<PopoverContextType>({
  controlRef: { current: null },
  contentRef: { current: null },
  isDOMVisible: false,
  isOpened: false,
  trapFocus: false,
  strategy: "portal",
  setIsOpened: () => {},
});

PopoverContext.displayName = "Popover.Context";

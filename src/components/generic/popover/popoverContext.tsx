import React, { createContext, Dispatch } from "react";

type popoverContext = {
  /**
   * Следует ли отображать popover в DOM сразу же после рендера (смены состояния isOpened)
   * */
  isDOMVisible?: boolean;
  /**
   * Следует ли закрывать popover при нажатии на esc
   * */
  shouldCloseOnEscape?: boolean;
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
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopoverContext = createContext<popoverContext>({
  controlRef: { current: null },
  contentRef: { current: null },
  isDOMVisible: false,
  isOpened: false,
  trapFocus: false,
  shouldCloseOnEscape: true,
  strategy: "portal",
  setIsOpened: () => {},
});

PopoverContext.displayName = "Popover.Context";

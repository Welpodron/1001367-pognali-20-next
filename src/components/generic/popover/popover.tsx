import { PopoverContext } from "./popoverContext";

import { PopoverControl as Control } from "./popoverControl";
import { PopoverContent as Content } from "./popoverContent";
import { useEffect, useRef, useState } from "react";

type popoverProps = {
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
   * Контент, который будет отображаться внутри popover
   */
  children: React.ReactNode;
  /**
   * Открыт ли popover сейчас (полный контроль над состоянием открытия из вне)
   */
  isOpened?: boolean;
  /**
   * Опциональный аргумент, влияющий на начальное состояние popover (контроль над состоянием открытия внутри компонента, а не из вне)
   * */
  isInitiallyOpened?: boolean;
  /**
   * Срабатывает при изменении состояния popover
   */
  onChange?: (isOpened: boolean) => void;
};

export const Popover = ({
  children,
  isOpened,
  trapFocus = false,
  isInitiallyOpened = false,
  shouldCloseOnEscape = true,
  isDOMVisible = false,
  strategy = "portal",
  onChange,
}: popoverProps) => {
  const [_isOpened, set_IsOpened] = useState<boolean>(isInitiallyOpened);

  const controlRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (onChange) {
      onChange(_isOpened);
    }
  }, [_isOpened, onChange]);

  return (
    <PopoverContext.Provider
      value={{
        isOpened: isOpened ?? _isOpened,
        setIsOpened:
          isOpened != null
            ? () => {
                set_IsOpened(isOpened);
              }
            : set_IsOpened,
        controlRef,
        contentRef,
        strategy,
        trapFocus,
        isDOMVisible,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

Popover.displayName = "Popover";

Popover.Control = Control;
Popover.Content = Content;

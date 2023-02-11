import { createPortal } from "react-dom";

export type PopoverContentWrapperPropsType = {
  /**
   * Контент, который будет отображаться внутри popover
   * */
  children: React.ReactNode;
  /**
   * Стратегия рендера контента
   * */
  strategy?: "parent" | "portal";
};

export const PopoverContentWrapper = ({
  children,
  strategy,
}: PopoverContentWrapperPropsType) => {
  // `typeof window === "undefined"` - проверка на то, что код выполняется на сервере
  return strategy === "parent" || typeof window === "undefined" ? (
    <>{children}</>
  ) : (
    createPortal(children, document.body)
  );
};

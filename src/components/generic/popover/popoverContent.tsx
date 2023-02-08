import { useMergedRefs } from "@/hooks/use-merged-refs/use-merged-refs";
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { PopoverContext } from "./PopoverContext";

export type PopoverContentPropsType = {
  /**
   * Контент, который будет отображаться внутри popover
   */
  children: React.ReactNode;
  /**
   * Дополнительный класс для контента
   * */
  className?: string;
};

const PopoverContentWrapper = ({
  children,
  strategy,
}: {
  children: React.ReactNode;
  strategy?: "parent" | "portal";
}) => {
  // `typeof window === "undefined"` - проверка на то, что код выполняется на сервере
  return strategy === "parent" || typeof window === "undefined" ? (
    <>{children}</>
  ) : (
    createPortal(children, document.body)
  );
};

export const PopoverContent = forwardRef<
  HTMLDialogElement,
  PopoverContentPropsType
>(({ children, className, ...props }, ref) => {
  const {
    isOpened,
    setIsOpened,
    contentRef,
    controlRef,
    strategy,
    trapFocus,
    isDOMVisible,
  } = useContext(PopoverContext);

  const dialogRef = useMergedRefs(contentRef, ref);
  const firstFocusableElementRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = useCallback(
    (e: MouseEvent) => {
      if (!isOpened) {
        return;
      }

      if (
        !contentRef.current?.contains(e.target as Node) &&
        !controlRef.current?.contains(e.target as Node)
      ) {
        return setIsOpened(false);
      }
    },
    [isOpened, setIsOpened, contentRef, controlRef]
  );

  const handleDocumentKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpened) {
        return;
      }

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (trapFocus) {
            if (document.activeElement === firstFocusableElementRef.current) {
              e.preventDefault();
              return firstFocusableElementRef.current?.focus();
            }
          }
        }
      }

      if (e.key === "Escape") {
        e.preventDefault();
        return setIsOpened(false);
      }
    },
    [isOpened, setIsOpened, firstFocusableElementRef, trapFocus]
  );

  const recalculatePosition = useCallback(() => {
    if (
      !contentRef ||
      !contentRef.current ||
      !controlRef ||
      !controlRef.current
    ) {
      return;
    }

    const {
      width: controlWidth,
      height: controlHeight,
      left: controlLeft,
      top: controlTop,
    } = controlRef.current.getBoundingClientRect();

    // В зависимости от выбранной стратегии позиционирования popover необходимо производить разные расчеты

    let x = strategy === "parent" ? 0 : controlLeft + window.scrollX;
    let y = strategy === "parent" ? 0 : controlTop + window.scrollY;

    contentRef.current.style.left = x + "px";
    contentRef.current.style.top = y + controlHeight + "px";

    const {
      width: contentWidth,
      height: contentHeight,
      left: contentLeft,
      top: contentTop,
    } = contentRef.current.getBoundingClientRect();

    if (
      Math.ceil(contentLeft + contentWidth) >=
      document.documentElement.clientWidth
    ) {
      contentRef.current.style.left = x - contentWidth + controlWidth + "px";
    }

    if (
      Math.ceil(contentTop + contentHeight) >=
      document.documentElement.clientHeight
    ) {
      contentRef.current.style.top = y - contentHeight + "px";
    }
  }, [contentRef, controlRef, strategy]);

  const handleWindowResize = useCallback(() => {
    recalculatePosition();
  }, [recalculatePosition]);

  const resizeObserver = useMemo(
    () =>
      typeof window !== "undefined"
        ? new ResizeObserver(() => recalculatePosition())
        : null,
    [recalculatePosition]
  );

  useEffect(() => {
    if (
      !contentRef ||
      !contentRef.current ||
      !controlRef ||
      !controlRef.current
    ) {
      return;
    }

    recalculatePosition();

    if (isOpened && trapFocus) {
      contentRef.current?.focus();
    }

    if (isOpened) {
      if (resizeObserver) {
        resizeObserver.observe(contentRef.current);
      }

      document.addEventListener("keydown", handleDocumentKeyDown);
      document.addEventListener("click", handleDocumentClick);
      window.addEventListener("resize", handleWindowResize);
    } else {
      if (resizeObserver) {
        resizeObserver.unobserve(contentRef.current);
      }
      document.removeEventListener("keydown", handleDocumentKeyDown);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleWindowResize);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [
    contentRef,
    controlRef,
    isOpened,
    strategy,
    resizeObserver,
    trapFocus,
    recalculatePosition,
    handleDocumentKeyDown,
    handleDocumentClick,
    handleWindowResize,
  ]);

  const handleLastFocusableElementFocus = useCallback(() => {
    if (!firstFocusableElementRef || !firstFocusableElementRef.current) {
      return;
    }

    firstFocusableElementRef.current.focus();
  }, [firstFocusableElementRef]);

  if (!isDOMVisible && !isOpened) {
    return null;
  }

  return (
    <PopoverContentWrapper strategy={strategy}>
      <dialog
        open={isOpened}
        style={{ position: "absolute", margin: 0, zIndex: 300 }}
        className={className}
        {...props}
        ref={dialogRef}
      >
        <div ref={firstFocusableElementRef} tabIndex={0}>
          {children}
        </div>
        {trapFocus && (
          <div
            onFocus={handleLastFocusableElementFocus}
            tabIndex={0}
            className="sr-only"
          ></div>
        )}
      </dialog>
    </PopoverContentWrapper>
  );
});

PopoverContent.displayName = "Popover.Content";

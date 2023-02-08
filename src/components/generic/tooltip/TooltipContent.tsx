import { useRef, useEffect } from "react";

export type TooltipPropsType = {
  /**
   * Элемент на который будет навешиваться тултип
   * */
  anchorRef: React.RefObject<HTMLElement>;
  /**
   * Текст тултипа
   * */
  text: string;
};

export const TooltipContent = ({ text, anchorRef }: TooltipPropsType) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef || !elementRef.current) {
      return;
    }
    if (!anchorRef || !anchorRef.current) {
      return;
    }

    const {
      width: anchorWidth,
      height: anchorHeight,
      left: anchorLeft,
      top: anchorTop,
    } = anchorRef.current.getBoundingClientRect();

    let x = anchorLeft + window.scrollX;
    let y = anchorTop + window.scrollY;

    elementRef.current.style.left = x + "px";
    elementRef.current.style.top = y + anchorHeight + "px";
    elementRef.current.style.opacity = "1";

    const {
      width: elementWidth,
      height: elementHeight,
      left: elementLeft,
      top: elementTop,
    } = elementRef.current.getBoundingClientRect();

    if (
      Math.ceil(elementLeft + elementWidth) >=
      document.documentElement.clientWidth
    ) {
      elementRef.current.style.left = x - elementWidth + anchorWidth + "px";
    }

    if (
      Math.ceil(elementTop + elementHeight) >=
      document.documentElement.clientHeight
    ) {
      elementRef.current.style.top = y - elementHeight + "px";
    }
  }, [elementRef, anchorRef]);

  return (
    <span
      ref={elementRef}
      className="bg-[#101D41] rounded text-white p-3 absolute left-0 pointer-events-none top-0 opacity-0 max-w-[200px] truncate"
    >
      {text}
    </span>
  );
};

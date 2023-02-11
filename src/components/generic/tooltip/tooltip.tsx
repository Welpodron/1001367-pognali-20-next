import { TooltipContent } from "./TooltipContent";
import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

// TODO: Активация тултипа по клику, фокусу и тд
// TODO: Кастомный тег путем полиморфизма
// TODO: Передача кастомного класса и стилей
// TODO: Необходимо доработать механизм выбора стратегии также как в Popover
// Например, тутлтип можно рендерить в портале, а можно внутри родительского элемента
export type TooltipPropsType = {
  /**
   * Элемент на который будет навешиваться тултип
   */
  children: React.ReactNode;
  /**
   * Текст тултипа
   * */
  text: string;
};

export const Tooltip = ({ children, text }: TooltipPropsType) => {
  const [isAnchorHovering, setIsAnchorHovering] = useState(false);

  const anchor = Children.only(children) as React.ReactElement;
  const anchorRef = useRef<HTMLElement>(null);

  const handleMouseLeave = useCallback(() => {
    setIsAnchorHovering(false);
  }, [setIsAnchorHovering]);

  const handleWindowResize = useCallback(() => {
    setIsAnchorHovering(false);
  }, [setIsAnchorHovering]);

  const handleMouseEnter = useCallback(() => {
    if (!anchorRef || !anchorRef.current) {
      return;
    }
    setIsAnchorHovering(true);
    window.addEventListener("resize", handleWindowResize, { once: true });
    anchorRef.current.addEventListener("mouseleave", handleMouseLeave, {
      once: true,
    });
  }, [setIsAnchorHovering, anchorRef, handleWindowResize, handleMouseLeave]);

  useEffect(() => {
    if (!anchorRef || !anchorRef.current) {
      return;
    }

    const _anchorRef = anchorRef.current;

    _anchorRef.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (!_anchorRef) {
        return;
      }
      _anchorRef.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [anchorRef, handleMouseEnter]);

  const anchorWithRef = cloneElement(anchor, {
    ref: anchorRef,
  });

  return (
    <>
      {anchorWithRef}
      {isAnchorHovering &&
        createPortal(
          <TooltipContent text={text} anchorRef={anchorRef} />,
          document.body
        )}
    </>
  );
};

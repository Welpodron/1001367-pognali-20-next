import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

import { TooltipContent } from "./TooltipContent";

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

  const handleMouseEnter = useCallback(() => {
    setIsAnchorHovering(true);
  }, [setIsAnchorHovering]);

  const handleMouseLeave = useCallback(() => {
    setIsAnchorHovering(false);
  }, [setIsAnchorHovering]);

  useEffect(() => {
    if (!anchorRef || !anchorRef.current) {
      return;
    }

    const _anchorRef = anchorRef.current;

    _anchorRef.addEventListener("mouseenter", handleMouseEnter);
    _anchorRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!_anchorRef) {
        return;
      }

      _anchorRef.removeEventListener("mouseenter", handleMouseEnter);
      _anchorRef.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [anchorRef, handleMouseEnter, handleMouseLeave]);

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

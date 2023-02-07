import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

const _Tooltip = ({
  text,
  anchorRef,
}: {
  text: string;
  anchorRef: React.RefObject<HTMLElement>;
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    if (!anchorRef.current) return;
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

export const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const [isAnchorHovering, setIsAnchorHovering] = useState<boolean>(false);

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

    anchorRef.current.addEventListener("mouseenter", handleMouseEnter);
    anchorRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!anchorRef || !anchorRef.current) {
        return;
      }

      anchorRef.current.removeEventListener("mouseenter", handleMouseEnter);
      anchorRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [anchorRef]);

  const anchorWithRef = cloneElement(anchor, {
    ref: anchorRef,
  });

  return (
    <>
      {anchorWithRef}
      {isAnchorHovering &&
        createPortal(
          <_Tooltip text={text} anchorRef={anchorRef} />,
          document.body
        )}
    </>
  );
};

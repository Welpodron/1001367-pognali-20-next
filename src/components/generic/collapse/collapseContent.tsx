import { CollapseContext } from "./CollapseContext";
import { polymorphize } from "@/utils/polymorphize/polymorphize";
import React, { forwardRef, useContext } from "react";

type CollapseContentProps = {
  /** default children */
  children: React.ReactNode;
  /** styles */
  style?: React.CSSProperties;
};

const _CollapseContent = forwardRef<
  HTMLDivElement,
  CollapseContentProps & { as: any }
>(({ children, as, style, ...props }, ref) => {
  const { isCollapsed, setIsCollapsed } = useContext(CollapseContext);

  const C = as || "div";
  // need to merge ref here

  // node element
  // function
  // object
  // array
  // any other type

  // Well i need to write a test for useMergedRef hook

  return (
    <C
      ref={ref}
      style={{
        ...style,
        display: isCollapsed ? "none" : style?.display || "block",
      }}
      {...props}
    >
      {children}
    </C>
  );
});

// It used for debugging purposes
_CollapseContent.displayName = "Collapse.Content";

export const CollapseContent = polymorphize<"div", CollapseContentProps>(
  _CollapseContent
);

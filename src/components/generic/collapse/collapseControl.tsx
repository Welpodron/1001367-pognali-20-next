import { polymorphize } from "@/utils/polymorphize/polymorphize";

import React, { forwardRef, useCallback, useContext, useEffect } from "react";
import { CollapseContext } from "./collapseContext";

type collapseActions = "toggle" | "open" | "close";

type collapseControlProps = {
  /** default children */
  children: React.ReactNode;
  /** working variant */
  action?: collapseActions;
  /** callback for listening for collapsed status changed */
  listener?: (isCollapsed: boolean) => void;
  /** custom on click behavior */
  onClick?: (e: React.MouseEvent<any>) => void;
};

const _CollapseControl = forwardRef<
  HTMLButtonElement,
  collapseControlProps & { as: any }
>(({ children, action = "toggle", listener, onClick, as, ...props }, ref) => {
  const { isCollapsed, setIsCollapsed } = useContext(CollapseContext);

  const C = as || "button";

  // maybe use reducer is better ?
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (action === "toggle") {
        return setIsCollapsed((currentValue) => !currentValue);
      }

      if (action === "open") {
        return setIsCollapsed(false);
      }

      if (action === "close") {
        return setIsCollapsed(true);
      }
    },
    [action, setIsCollapsed]
  );

  useEffect(() => {
    if (listener) {
      return listener(isCollapsed);
    }
  }, [listener, isCollapsed]);
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
      onClick={(e: React.MouseEvent) => {
        return handleClick(e);
      }}
      {...props}
    >
      {children}
    </C>
  );
});

// It used for debugging purposes
_CollapseControl.displayName = "Collapse.Control";

export const CollapseControl = polymorphize<"button", collapseControlProps>(
  _CollapseControl
);

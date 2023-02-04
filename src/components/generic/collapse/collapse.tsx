import { useState } from "react";

import { CollapseContent as Content } from "./collapseContent";
import { CollapseContext as Context } from "./collapseContext";
import { CollapseControl as Control } from "./collapseControl";

type CollapseProps = {
  /** default children */
  children: React.ReactNode;
  /** initial collapsed state */
  isCollapsed?: boolean;
};

// Because Collapse is a wrapper for Collapse.Body and Collapse.Control, we dont need to use forwardRef here
// Also we dont make it polymorphic
export const Collapse = ({
  children,
  isCollapsed = true,
  ...props
}: CollapseProps) => {
  const [_isCollapsed, set_IsCollapsed] = useState<boolean>(isCollapsed);

  return (
    <Context.Provider
      value={{ isCollapsed: _isCollapsed, setIsCollapsed: set_IsCollapsed }}
    >
      {children}
    </Context.Provider>
  );
};

Collapse.Content = Content;
Collapse.Control = Control;

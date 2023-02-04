import { Dispatch, SetStateAction, createContext } from "react";

interface ICollapseContext {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const CollapseContext = createContext<ICollapseContext>({
  isCollapsed: false,
  setIsCollapsed: () => {},
});

CollapseContext.displayName = "Collapse.Context";

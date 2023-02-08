import { useMergedRefs } from "@/hooks/use-merged-refs/use-merged-refs";
import { polymorphize } from "@/utils/polymorphize/polymorphize";
import { forwardRef, useContext } from "react";
import { PopoverContext } from "./PopoverContext";

type PopoverControlPropsType = {
  /**
   * Контент, который будет отображаться внутри popover.control
   */
  children?: React.ReactNode;
};

const _PopoverControl = forwardRef<
  HTMLButtonElement,
  PopoverControlPropsType & { as?: any }
>(({ children, as = "button", ...props }, ref) => {
  const { isOpened, setIsOpened, controlRef } = useContext(PopoverContext);

  const mergedControlRef = useMergedRefs<HTMLButtonElement>(controlRef, ref);

  const C = as || "button";

  return (
    <C onClick={() => setIsOpened(!isOpened)} {...props} ref={mergedControlRef}>
      {children}
    </C>
  );
});

_PopoverControl.displayName = "Popover.Control";

export const PopoverControl = polymorphize<"button", PopoverControlPropsType>(
  _PopoverControl
);

import { useMergedRefs } from "@/hooks/use-merged-refs/use-merged-refs";
import { polymorphize } from "@/utils/polymorphize/polymorphize";
import { forwardRef, useContext, useRef } from "react";
import { PopoverContext } from "./popoverContext";

type popoverControlProps = {
  /**
   * Контент, который будет отображаться внутри popover.control
   */
  children?: React.ReactNode;
};

const _PopoverControl = forwardRef<
  HTMLButtonElement,
  popoverControlProps & { as?: any }
>(({ children, as = "button", ...props }, ref) => {
  const { isOpened, setIsOpened, controlRef } = useContext(PopoverContext);

  const mergedControlRef = useMergedRefs<HTMLButtonElement>(controlRef, ref);

  const C = as || "button";

  return (
    <C
      onClick={() => setIsOpened((currentState) => !currentState)}
      {...props}
      ref={mergedControlRef}
    >
      {children}
    </C>
  );
});

_PopoverControl.displayName = "Popover.Control";

export const PopoverControl = polymorphize<"button", popoverControlProps>(
  _PopoverControl
);

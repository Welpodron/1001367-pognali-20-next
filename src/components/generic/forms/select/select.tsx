import { Popover } from "@/components/generic/popover/popover";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SelectOption } from "./selectOption";

type selectProps = {
  /**
   * Контент, который будет отображаться внутри select
   */
  children?: React.ReactNode;
};

const DATA = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
];

/*
TODO:
- [x] Добавить компонент `scrollArea` для скролла внутри options (при большом количестве опций)
*/

// На странице с шагами вместо `select` лучше использовать созданный ранее компонент `popover`
// В данном контексте компонент `select` не требуется, однако в других проектах он может быть полезен
export const Select = ({ children, ...props }: selectProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [value, setValue] = useState<string | null>(null);

  const possibleValues = useMemo(() => DATA.map((d) => d.value), []);
  const [currentPossibleValue, setCurrentPossibleValue] = useState<string>(
    value ?? possibleValues[0]
  );

  const selectControlRef = useRef<HTMLInputElement>(null);

  const handleControlClick = () => {
    setIsOpened((currentState) => !currentState);
  };

  const handleControlKeydown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      // Без `preventDefault` при нажатии на `Tab` фокус будет переходить на следующий элемент
      return setIsOpened(false);
    } else {
      e.preventDefault();
    }

    if (e.key === "Escape") {
      return setIsOpened(false);
    }

    if (possibleValues && possibleValues.length && isOpened) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const currentPossibleIndex =
          possibleValues.indexOf(currentPossibleValue);

        let nextPossibleIndex = 0;

        if (e.key === "ArrowDown") {
          nextPossibleIndex = currentPossibleIndex + 1;
        }

        if (e.key === "ArrowUp") {
          nextPossibleIndex = currentPossibleIndex - 1;
        }

        const nextPossibleValue = possibleValues[nextPossibleIndex];

        if (!nextPossibleValue) {
          return;
        }

        return setCurrentPossibleValue(nextPossibleValue);
      }
    }

    if (e.key === "Enter") {
      if (isOpened) {
        setValue(currentPossibleValue);
        return setIsOpened(false);
      }

      return setIsOpened(true);
    }

    if (e.code === "Space") {
      return setIsOpened(true);
    }
  };

  useEffect(() => {
    if (!selectControlRef || !selectControlRef.current) {
      return;
    }

    selectControlRef.current.addEventListener("keydown", handleControlKeydown);
    selectControlRef.current.addEventListener("click", handleControlClick);

    return () => {
      selectControlRef.current?.removeEventListener(
        "keydown",
        handleControlKeydown
      );
      selectControlRef.current?.removeEventListener(
        "click",
        handleControlClick
      );
    };
  }, [
    selectControlRef,
    isOpened,
    possibleValues,
    setValue,
    currentPossibleValue,
    setIsOpened,
    setCurrentPossibleValue,
    handleControlClick,
    handleControlKeydown,
  ]);

  return (
    <Popover {...{ isOpened }}>
      <Popover.Control
        className="select-custom-js"
        ref={selectControlRef}
        as="input"
        type="search"
        autoComplete="off"
        readOnly={true}
        value={value ?? ""}
        onChange={() => {}}
      ></Popover.Control>
      <Popover.Content>
        <>
          {children}
          <div className="grid">
            {DATA.map((item, index) => (
              <SelectOption
                key={index}
                {...{
                  ...item,
                  setIsOpened,
                  currentPossibleSelectValue: currentPossibleValue,
                  setCurrentPossibleSelectValue: setCurrentPossibleValue,
                  selectValue: value,
                  setSelectValue: setValue,
                }}
              />
            ))}
          </div>
        </>
      </Popover.Content>
    </Popover>
  );
};

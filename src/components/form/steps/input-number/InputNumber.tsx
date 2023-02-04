import { useCallback, useId, useState } from "react";

import PlusIcon from "/public/icons/svg/plus.svg";
import MinusIcon from "/public/icons/svg/minus.svg";

type InputNumberProps = {
  /** Контроль извне */
  state?: [number, (value: number) => void];
  /** Начальное значение инпута */
  initialValue?: number;
  /** Единица измерения инпута */
  measure: string;
  /** Обязательное поле или нет */
  required?: boolean;
  /** Максимальное значение инпута */
  max?: number;
  /** Минимальное значение инпута */
  min?: number;
  /** Label инпута */
  label: string;
  /** Ошибка инпута */
  errors?: string;
};

export const InputNumber = ({
  label,
  required,
  measure,
  state,
  initialValue,
  max,
  min,
  errors,
}: InputNumberProps) => {
  const [insideValue, setInsideValue] = useState<number>(
    initialValue != null ? initialValue : NaN
  );
  const [outsideValue, setOutsideValue] = state ?? [];

  const finalValue =
    outsideValue != null && setOutsideValue != null
      ? outsideValue
      : insideValue;

  const id = useId();

  const handleControlClick = useCallback(
    (addition: number) => {
      const nextValue =
        outsideValue != null ? outsideValue + addition : insideValue + addition;

      if (
        outsideValue != null &&
        setOutsideValue != null &&
        isNaN(outsideValue)
      ) {
        return setOutsideValue(min ?? outsideValue);
      }

      if (
        outsideValue == null &&
        setOutsideValue == null &&
        isNaN(insideValue)
      ) {
        return setInsideValue(min ?? insideValue);
      }

      if (min != null && !isNaN(min) && nextValue < min) {
        return outsideValue != null && setOutsideValue != null
          ? setOutsideValue(outsideValue)
          : setInsideValue(insideValue);
      }

      if (max != null && !isNaN(max) && nextValue > max) {
        return outsideValue != null && setOutsideValue != null
          ? setOutsideValue(outsideValue)
          : setInsideValue(insideValue);
      }

      return setOutsideValue != null && outsideValue != null
        ? setOutsideValue(nextValue)
        : setInsideValue(nextValue);
    },
    [outsideValue, insideValue, setOutsideValue, setInsideValue, min, max]
  );

  return (
    <div>
      <div className="flex items-center mb-2">
        <label
          className="font-medium text-[16px] leading-none uppercase text-[#1D2E5B]"
          htmlFor={id}
        >
          {label}
        </label>
        <span className="font-medium text-[16px] leading-none uppercase text-[#1D2E5B] opacity-30 text-right ml-auto shrink-0">
          {measure}
        </span>
      </div>
      <div
        className={`flex border-[1px] rounded-md bg-white text-center ${
          errors
            ? "text-[#FF0000] border-[#FF0000]"
            : "text-[#1D2E5B] border-[#CBCED9]"
        }`}
      >
        <button
          className="bg-transparent p-4 shrink-0"
          type="button"
          onClick={() => handleControlClick(-1)}
        >
          <MinusIcon width={14} height={1} />
        </button>
        <input
          max={max ?? ""}
          min={min ?? ""}
          required={required}
          type="number"
          id={id}
          autoComplete="off"
          inputMode="numeric"
          value={isNaN(finalValue) ? "" : finalValue}
          onChange={(e) =>
            setOutsideValue
              ? setOutsideValue(parseInt(e.target.value))
              : setInsideValue(parseInt(e.target.value))
          }
          className="appearance-none border-none text-center bg-transparent grow shrink min-w-0 font-medium"
        />
        <button
          className="bg-transparent p-4 shrink-0"
          onClick={() => handleControlClick(1)}
          type="button"
        >
          <PlusIcon width={14} height={14} />
        </button>
      </div>
      {errors && (
        <p className="p-2 px-3 text-[#FF0000] bg-[#FFEFEF] rounded-b-md">
          {errors}
        </p>
      )}
    </div>
  );
};

InputNumber.displayName = "Input.Number";

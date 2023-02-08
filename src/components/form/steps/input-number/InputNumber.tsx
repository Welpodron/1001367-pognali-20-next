import { useCallback, useId } from "react";

import PlusIcon from "/public/icons/svg/plus.svg";
import MinusIcon from "/public/icons/svg/minus.svg";
import { FieldPropsGenericType } from "@/components/generic/forms/Field/Field";

export type InputNumberPropsType = {
  /** Единица измерения инпута */
  measure: string;
  /** Максимальное значение инпута */
  max?: number;
  /** Минимальное значение инпута */
  min?: number;
  /** Label инпута */
  label: string;
};

export const InputNumber = ({
  label,
  measure,
  max,
  min,
  touched,
  state,
  errors: error,
}: InputNumberPropsType & FieldPropsGenericType<number>) => {
  const id = useId();

  const [value, setValue] = state ?? [NaN, () => {}];
  const [isTouched, setIsTouched] = touched ?? [null, () => {}];

  const handleControlClick = useCallback(
    (addition: number) => {
      const nextValue = value + addition;

      if (min != null && nextValue < min) {
        return setValue(min);
      }

      if (max != null && nextValue > max) {
        return setValue(max);
      }

      return setValue(nextValue);
    },
    [value, setValue, min, max]
  );

  return (
    <div onFocus={() => setIsTouched(true)}>
      <div className="flex items-center mb-2">
        <label
          className={`font-medium text-[16px] leading-none uppercase ${
            error ? "text-[#FF0000]" : "text-[#1D2E5B]"
          }`}
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
          error
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
          type="number"
          id={id}
          autoComplete="off"
          inputMode="numeric"
          value={isNaN(value) ? "" : value}
          onChange={(e) => setValue(parseInt(e.target.value))}
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
      {error && (
        <p className="p-2 px-3 text-[#FF0000] bg-[#FFEFEF] rounded-b-md">
          {error}
        </p>
      )}
    </div>
  );
};

InputNumber.displayName = "Input.Number";

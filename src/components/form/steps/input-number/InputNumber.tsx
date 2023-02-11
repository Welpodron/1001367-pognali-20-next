import InputNumberStyles from "./InputNumberStyles";
import MinusIcon from "/public/icons/svg/minus.svg";
import PlusIcon from "/public/icons/svg/plus.svg";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { clsx } from "clsx";
import { useCallback, useId } from "react";

export type InputNumberPropsType = {
  /** Единица измерения инпута */
  measure: string;
  /** Максимальное значение инпута */
  max?: number;
  /** Минимальное значение инпута */
  min?: number;
  /** Label инпута */
  label: string;
  /** Обязательность инпута */
  required?: boolean;
};

export const InputNumber = ({
  label,
  measure,
  max,
  min,
  touched,
  state,
  required,
  errors: error,
}: InputNumberPropsType & FieldPropsGenericType<number>) => {
  const id = useId();

  const [value, setValue] = state;
  const [, setIsTouched] = touched;

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
    <>
      <style jsx>{InputNumberStyles}</style>
      <div className="field" onFocus={() => setIsTouched(true)}>
        <div className="field__label">
          <label
            className={clsx(
              `field__label-text`,
              error ? "text-[#FF0000]" : "text-[#1D2E5B]"
            )}
            htmlFor={id}
          >
            {label}
          </label>
          <span className="field__label-measure">{measure}</span>
        </div>
        <div
          className={clsx(
            `field__input-container`,
            error
              ? "text-[#FF0000] border-[#FF0000]"
              : "text-[#1D2E5B] border-[#CBCED9]"
          )}
        >
          <button
            className="field__input-control"
            type="button"
            onClick={() => handleControlClick(-1)}
          >
            <MinusIcon width={14} height={1} />
          </button>
          <input
            max={max ?? ""}
            min={min ?? ""}
            required={required ?? false}
            type="number"
            id={id}
            autoComplete="off"
            inputMode="numeric"
            value={isNaN(value) ? "" : value}
            onChange={(event) => setValue(parseInt(event.currentTarget.value))}
            className="field__input"
          />
          <button
            className="field__input-control"
            onClick={() => handleControlClick(1)}
            type="button"
          >
            <PlusIcon width={14} height={14} />
          </button>
        </div>
        {error && <p className="field__error">{error}</p>}
      </div>
    </>
  );
};

InputNumber.displayName = "Input.Number";

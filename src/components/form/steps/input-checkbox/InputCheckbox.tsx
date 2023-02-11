import InputCheckboxStyles from "./InputCheckboxStyles";
import CheckmarkIcon from "/public/icons/svg/checkmark.svg";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";

export type InputCheckboxPropsType = {
  /** Label инпута */
  label: string;
};

export const InputCheckbox = ({
  label,
  state,
  touched,
}: InputCheckboxPropsType & FieldPropsGenericType<boolean>) => {
  const [value, setValue] = state;
  const [, setIsTouched] = touched;

  return (
    <>
      <style jsx>{InputCheckboxStyles}</style>
      <div className="field" onFocus={() => setIsTouched(true)}>
        <label className="field__label">
          <input
            onChange={() => setValue(!value)}
            checked={value}
            className="field__input"
            type="checkbox"
          />
          <span className="field__input-checkbox">
            {value && (
              <CheckmarkIcon width={18} height={18} fill="currentColor" />
            )}
          </span>
          <span>{label}</span>
        </label>
      </div>
    </>
  );
};

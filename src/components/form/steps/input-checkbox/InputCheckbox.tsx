import { FieldPropsGenericType } from "@/components/generic/forms/Field/Field";

import CheckmarkIcon from "/public/icons/svg/checkmark.svg";

export type InputCheckboxPropsType = {
  /** Label инпута */
  label: string;
};

export const InputCheckbox = ({
  label,
  state,
  touched,
}: InputCheckboxPropsType & FieldPropsGenericType<boolean>) => {
  const [value, setValue] = state ?? [false, () => {}];
  const [isTouched, setIsTouched] = touched ?? [null, () => {}];

  return (
    <div onFocus={() => setIsTouched(true)}>
      <label
        className={`font-medium text-[16px] leading-none uppercase text-[#1D2E5B] flex items-center cursor-pointer`}
      >
        <input
          onChange={() => setValue(!value)}
          checked={value}
          className="sr-only"
          type="checkbox"
        />
        <span className="w-[26px] h-[26px] shrink-0 mr-4 rounded-md border-[1px] border-[#CBCED9] grid place-content-center place-items-center">
          {value && (
            <CheckmarkIcon width={18} height={18} fill="currentColor" />
          )}
        </span>
        <span>{label}</span>
      </label>
    </div>
  );
};

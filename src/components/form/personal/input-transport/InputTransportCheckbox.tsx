import InputTransportStyles from "./InputTransportStyles";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { clsx } from "clsx";
import React, { useId } from "react";

export const InputTransportCheckbox = ({
  state,
  name,
  icon: Icon,
}: { name: string; icon: React.FC<React.SVGProps<SVGSVGElement>> } & Omit<
  FieldPropsGenericType<string[]>,
  "touched"
>) => {
  const id = useId();
  const [value, setValue] = state;
  const { className } = InputTransportStyles;

  return (
    <>
      <li className={`${className} field__list-item`}>
        <input
          id={id}
          onChange={(event) =>
            event.target.checked
              ? setValue([...value, name])
              : setValue(value.filter((item) => item !== name))
          }
          checked={value.includes(name)}
          className={`${className} field__input`}
          type="checkbox"
        />
        <label htmlFor={id} className={`${className} field__input-label`}>
          <Icon
            width={20}
            height={20}
            fill="currentColor"
            className={clsx(!value.includes(name) && "opacity-30")}
          />
        </label>
      </li>
    </>
  );
};

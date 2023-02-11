import InputTagsStyles from "./InputTagsStyles";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { clsx } from "clsx";
import { useId } from "react";

export type InputTagsPropsType = {
  /** Плейсохлдер списка тегов */
  placeholder?: string;
};

export const InputTags = ({
  state,
  touched,
  placeholder,
  className,
}: ComponentPropsGenericType &
  InputTagsPropsType &
  FieldPropsGenericType<string | null>) => {
  const id = useId();
  const [value, setValue] = state;
  const [, setIsTouched] = touched;

  return (
    <>
      <style jsx>{InputTagsStyles}</style>
      <div
        className={clsx(`field`, className)}
        onFocus={() => setIsTouched(true)}
      >
        <label htmlFor={id} className="field__label">
          Теги
        </label>
        <textarea
          id={id}
          value={value ?? ""}
          onChange={(event) => setValue(event.currentTarget.value)}
          placeholder={placeholder ?? ""}
          className="field__input"
        ></textarea>
      </div>
    </>
  );
};

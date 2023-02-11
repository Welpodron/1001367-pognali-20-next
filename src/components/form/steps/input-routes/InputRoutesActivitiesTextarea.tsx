import InputRoutesActivitiesTextareaStyles from "./InputRoutesActivitiesTextareaStyles";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { FlagIcon } from "@/components/global/icons/Flag";
import { clsx } from "clsx";
import { forwardRef } from "react";

export type InputRoutesActivitiesTextareaPropsType = {
  /**
   * Страна
   */
  country: string;
};

// ForwardRef использовался как тестовый пример передачи рефа из useForm в компонент, пока что не используется, однако работает
export const InputRoutesActivitiesTextarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsGenericType &
    InputRoutesActivitiesTextareaPropsType &
    FieldPropsGenericType<null | string>
>(({ country, state, touched, className, errors: error }, ref) => {
  const [value, setValue] = state;
  const [, setIsTouched] = touched;
  const { className: _className, styles } = InputRoutesActivitiesTextareaStyles;

  return (
    <>
      {styles}
      <label className={clsx(`${_className} field`, className)}>
        <span className={`${_className} field__label`}>
          <span
            className={clsx(
              `${_className} field__label-text`,
              error ? "text-[#FF0000]" : "text-blue-light-1"
            )}
          >
            {country}
          </span>
          <span className={`${_className} field__input-flag`}>
            <FlagIcon value={country} />
          </span>
        </span>
        <textarea
          ref={ref}
          className={clsx(
            `${_className} field__input`,
            error
              ? "border-[#FF0000] border-b-0 rounded-b-none text-[#FF0000]"
              : "border-[#CBCED9]"
          )}
          value={value ?? ""}
          onFocus={() => setIsTouched(true)}
          placeholder="План действий"
          onChange={(event: React.ChangeEvent) =>
            setValue((event.currentTarget as HTMLTextAreaElement).value)
          }
        ></textarea>
        {error && <span className={`${_className} field__error`}>{error}</span>}
      </label>
    </>
  );
});

InputRoutesActivitiesTextarea.displayName = "Input.Routes.Activities.Textarea";

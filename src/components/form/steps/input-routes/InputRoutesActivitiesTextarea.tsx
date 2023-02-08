import { FieldPropsGenericType } from "@/components/generic/forms/Field/Field";
import { FlagIcon } from "@/components/global/icons/Flag";

export type InputRoutesCountriesTextareaPropsType = {
  /**
   * Страна
   */
  country: string;
};

export const InputRoutesCountriesTextarea = ({
  country,
  state,
  touched,
  errors: error,
}: InputRoutesCountriesTextareaPropsType &
  FieldPropsGenericType<null | string>) => {
  const [value, setValue] = state ?? [null, () => {}];
  const [isTouched, setIsTouched] = touched ?? [null, () => {}];

  return (
    <label className="form-routes-activity-field">
      <span className="form-routes-activity-field-label">
        <span className={`pr-2 truncate ${error ? "text-[#FF0000]" : ""}`}>
          {country}
        </span>
        <span className="relative w-[35px] h-[24px] rounded overflow-hidden grid place-items-center place-content-center ml-auto shrink-0">
          <FlagIcon value={country} />
        </span>
      </span>
      <textarea
        className={`rounded-md border-[1px] p-2 w-full min-h-[150px] block ${
          error
            ? "border-[#FF0000] border-b-0 rounded-b-none text-[#FF0000]"
            : "border-[#CBCED9]"
        }`}
        value={value ?? ""}
        onFocus={() => setIsTouched(true)}
        onChange={(e: React.ChangeEvent) =>
          setValue((e.target as HTMLTextAreaElement).value)
        }
      ></textarea>
      {error && (
        <span className="p-2 px-3 text-[#FF0000] bg-[#FFEFEF] border-[1px] border-t-0 border-[#FF0000] rounded-b-md block">
          {error}
        </span>
      )}
    </label>
  );
};

InputRoutesCountriesTextarea.displayName = "Input.Routes.Countries.Textarea";

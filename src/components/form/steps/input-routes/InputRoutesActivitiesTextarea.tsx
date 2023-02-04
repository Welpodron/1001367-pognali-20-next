import { FlagIcon } from "@/components/global/icons/Flag";
import { useContext, useState } from "react";
import { InputRoutesContext } from "./InputRoutesContext";

export type InputRoutesCountriesTextareaProps = {
  /** Идентификатор маршрута */
  id: string;
  /** Страна маршрута */
  country: string;
  /** Значение активности маршрута */
  value?: string | null;
  /** Ошибка маршрута */
  error?: string;
};

export const InputRoutesCountriesTextarea = ({
  id,
  value,
  country,
  error,
}: InputRoutesCountriesTextareaProps) => {
  const [isTouched, setIsTouched] = useState(false);

  const { dispatchRoutes } = useContext(InputRoutesContext);

  return (
    <label key={id} className="form-routes-activity-field">
      <span className="form-routes-activity-field-label">
        <span
          className={`pr-2 truncate ${
            error && isTouched ? "text-[#FF0000]" : ""
          }`}
        >
          {country}
        </span>
        <span className="relative w-[35px] h-[24px] rounded overflow-hidden grid place-items-center place-content-center ml-auto shrink-0">
          <FlagIcon value={country as string} />
        </span>
      </span>
      <textarea
        className={`rounded-md border-[1px] p-2 w-full min-h-[150px] block ${
          error && isTouched
            ? "border-[#FF0000] border-b-0 rounded-b-none text-[#FF0000]"
            : "border-[#CBCED9]"
        }`}
        value={value ?? ""}
        onClick={() => setIsTouched(true)}
        onFocus={() => setIsTouched(true)}
        onBlur={() => setIsTouched(true)}
        onChange={(e: React.ChangeEvent) =>
          dispatchRoutes({
            type: "UPDATE_ROUTE",
            payload: {
              id,
              activity: (e.currentTarget as HTMLTextAreaElement).value,
            },
          })
        }
      ></textarea>
      {error && isTouched && (
        <span className="p-2 px-3 text-[#FF0000] bg-[#FFEFEF] border-[1px] border-t-0 border-[#FF0000] rounded-b-md block">
          {error}
        </span>
      )}
    </label>
  );
};

InputRoutesCountriesTextarea.displayName = "Input.Routes.Countries.Textarea";

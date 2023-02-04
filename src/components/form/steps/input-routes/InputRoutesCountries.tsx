import { uuidv4 } from "@/utils/crypto/crypto";
import { error } from "console";

import { useContext } from "react";

import { InputRoutesContext } from "./InputRoutesContext";
import { InputRoutesCountriesSelect } from "./InputRoutesCountriesSelect";

import PlusIcon from "/public/icons/svg/plus.svg";

export const InputRoutesCountries = () => {
  const { routes, dispatchRoutes, errors } = useContext(InputRoutesContext);

  return (
    <>
      {routes.map(({ id, country }) => {
        const error = Array.isArray(errors)
          ? errors?.find(
              (error) => error.id === id && error.type === "MISSING_COUNTRY"
            )?.error
          : errors;

        return (
          <InputRoutesCountriesSelect
            key={id}
            value={country}
            {...{ id, routes, dispatchRoutes, error }}
          />
        );
      })}
      <button
        className="border-[1px] border-[#e1e4f1] bg-[#EDEFF6] rounded px-2 py-3 w-full uppercase font-medium text-[#1D2E5B] text-[14px] leading-none text-left flex items-center truncate"
        type="button"
        onClick={() =>
          dispatchRoutes({
            type: "ADD_ROUTE",
            payload: { id: uuidv4(), country: null, activity: null },
          })
        }
      >
        <span className="pr-2 truncate">Добавить страну</span>
        <PlusIcon width={14} height={14} className="ml-auto shrink-0" />
      </button>
    </>
  );
};

InputRoutesCountries.displayName = "Input.Routes.Countries";

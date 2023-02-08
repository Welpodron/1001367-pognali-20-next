import { useMemo, useRef, useState } from "react";

import { COUNTRIES_ALL_RAW } from "@/data/data";

import { Popover } from "@/components/generic/Popover/Popover";

import { FlagIcon } from "@/components/global/icons/Flag";
import DropdownIcon from "/public/icons/svg/000000-utils-dropdown-form.svg";
import CloseIcon from "/public/icons/svg/192144-utils-close.svg";
import { FieldPropsGenericType } from "@/components/generic/forms/Field/Field";

export type InputRoutesCountriesSelectPropsType = {
  routes: {
    id: string;
    country: null | string;
    activity: null | string;
  }[];
  deleteRoute(): void;
};

export const InputRoutesCountriesSelect = ({
  routes,
  state,
  touched,
  deleteRoute,
  errors: error,
}: InputRoutesCountriesSelectPropsType &
  FieldPropsGenericType<null | string>) => {
  const [isOpened, setIsOpened] = useState(false);

  const [value, setValue] = state ?? [null, () => {}];
  const [isTouched, setIsTouched] = touched ?? [null, () => {}];

  const controlRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDialogElement>(null);

  const countriesFirstLetters = useMemo<string[]>(() => {
    const set = new Set<string>();

    COUNTRIES_ALL_RAW.forEach((country) => {
      set.add(country.toLowerCase()[0]);
    });

    return [...Array.from(set)].sort((a, b) => (a > b ? 1 : -1));
  }, []);

  const [currentCountriesFirstLetter, setCurrentCountriesFirstLetter] =
    useState<string>(countriesFirstLetters[0]);

  return (
    <div className="relative">
      <Popover
        state={[isOpened, setIsOpened]}
        strategy="parent"
        trapFocus={true}
      >
        <div className="flex">
          <Popover.Control
            type="button"
            className={`border-[1px] bg-white rounded px-2 py-3 truncate text-left grow uppercase font-medium text-[14px] leading-none flex items-center ${
              error
                ? "text-[#FF0000] border-[#FF0000]"
                : "text-[#1D2E5B] border-[#CBCED9]"
            } `}
            as="button"
            ref={controlRef}
            onFocus={() => setIsTouched(true)}
          >
            <p className="pr-2 truncate">{value ?? "Выберите страну"}</p>
            <DropdownIcon
              fill="currentColor"
              width={10}
              height={14}
              className="ml-auto shrink-0"
            />
          </Popover.Control>
          {value && (
            <div
              className={`border-[1px] border-l-0 rounded p-2 ${
                error ? "border-[#FF0000]" : "border-[#CBCED9]"
              }`}
            >
              <div className="relative w-[35px] h-[24px] rounded overflow-hidden grid place-items-center place-content-center">
                <FlagIcon value={value as string} />
              </div>
            </div>
          )}
        </div>
        {error && (
          <p className="p-2 px-3 text-[#FF0000] bg-[#FFEFEF] rounded-b-md">
            {error}
          </p>
        )}
        <Popover.Content
          ref={contentRef}
          className="p-0 border-[1px] w-full border-[#CBCED9] rounded-b"
        >
          <div className="relative">
            <ul className="grid grid-cols-5">
              {countriesFirstLetters.map((letter, index) => (
                <li className="border-[1px]" key={index}>
                  <button
                    className={`uppercase p-4 w-full h-full text-center text-[#1D2E5B] font-medium text-[14px] leading-none ${
                      currentCountriesFirstLetter.toLowerCase() ===
                      letter.toLowerCase()
                        ? "bg-[#EDEFF6]"
                        : "bg-white"
                    }`}
                    type="button"
                    onClick={() => setCurrentCountriesFirstLetter(letter)}
                  >
                    {letter}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="py-4 px-2 max-h-[210px] overflow-y-scroll space-y-2 text-[#444444]">
              {COUNTRIES_ALL_RAW.filter(
                (country) =>
                  country[0].toLowerCase() ===
                    currentCountriesFirstLetter.toLowerCase() &&
                  !routes.some((route) => route.country === country)
              ).map((country, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setValue(country);
                      setIsOpened(false);
                    }}
                    type="button"
                  >
                    {country}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Popover.Content>
      </Popover>
      {routes.length > 1 && (
        <button
          type="button"
          className="bg-[#EDEFF6] w-[21px] h-[21px] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 grid place-content-center place-items-center"
          aria-label="Удалить маршрут"
          onClick={() => deleteRoute()}
        >
          <CloseIcon fill="#AFB0B5" width={9} height={9} />
        </button>
      )}
    </div>
  );
};

InputRoutesCountriesSelect.displayName = "Input.Routes.Countries.Select";

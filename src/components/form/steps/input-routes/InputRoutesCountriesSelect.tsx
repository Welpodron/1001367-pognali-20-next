import InputRoutesCountriesSelectStyles from "./InputRoutesCountriesSelectStyles";
import DropdownIcon from "/public/icons/svg/000000-utils-dropdown-form.svg";
import CloseIcon from "/public/icons/svg/192144-utils-close.svg";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { Popover } from "@/components/generic/popover/Popover";
import { FlagIcon } from "@/components/global/icons/Flag";
import { COUNTRIES_ALL_RAW } from "@/data/data";
import { clsx } from "clsx";
import { useMemo, useRef, useState } from "react";

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
  const { className, styles } = InputRoutesCountriesSelectStyles;
  // console.log(className, styles);

  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = state;
  const [, setIsTouched] = touched;

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
    <>
      {styles}
      <div data-active={value ? true : false} className={`${className} field`}>
        <Popover
          state={[isOpened, setIsOpened]}
          strategy="parent"
          trapFocus={true}
        >
          <div className={`${className} field__container`}>
            <Popover.Control
              type="button"
              className={clsx(
                `${className} field__input`,
                error && "text-[#FF0000] border-[#FF0000]",
                isOpened && !value
                  ? "border-blue-light-1 bg-blue-light-1 text-white"
                  : "text-blue-light-1 border-[#CBCED9] bg-white"
              )}
              as="button"
              ref={controlRef}
              onFocus={() => setIsTouched(true)}
            >
              <span className={`${className} field__input-text`}>
                {value ?? "Выберите страну"}
              </span>
              <DropdownIcon
                fill="currentColor"
                width={10}
                height={14}
                className={`${className} field__input-icon`}
              />
            </Popover.Control>
            <div
              className={clsx(
                `${className} field__input-flag-container`,
                error ? "border-[#FF0000]" : "border-[#CBCED9]"
              )}
            >
              <div className={`${className} field__input-flag`}>
                {value && <FlagIcon value={value as string} />}
              </div>
            </div>
          </div>
          {error && <p className={`${className} field__error`}>{error}</p>}
          <Popover.Content
            ref={contentRef}
            className="p-0 border-[1px] w-full border-[#CBCED9] rounded drop-shadow-lg"
          >
            <div className={`${className} field__filter-container`}>
              <ul className={`${className} field__filter-list`}>
                {countriesFirstLetters.map((letter, index) => (
                  <li
                    className={`${className} field__filter-list-item`}
                    key={index}
                  >
                    <button
                      className={clsx(
                        `${className} field__filter-list-option`,
                        currentCountriesFirstLetter.toLowerCase() ===
                          letter.toLowerCase()
                          ? "bg-blue-light-1 text-white"
                          : "bg-white text-blue-light-1"
                      )}
                      type="button"
                      onClick={() => setCurrentCountriesFirstLetter(letter)}
                    >
                      {letter}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className={`${className} field__select-list`}>
                {COUNTRIES_ALL_RAW.filter(
                  (country) =>
                    country[0].toLowerCase() ===
                      currentCountriesFirstLetter.toLowerCase() &&
                    !routes.some((route) => route.country === country)
                ).map((country, index) => (
                  <li key={index}>
                    <button
                      className={`${className} field__select-list-option`}
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
            className={`${className} field__delete`}
            aria-label="Удалить маршрут"
            onClick={() => deleteRoute()}
          >
            <CloseIcon
              fill="#CBCED9"
              className={`${className} field__delete-icon`}
              width={9}
              height={9}
            />
          </button>
        )}
      </div>
    </>
  );
};

InputRoutesCountriesSelect.displayName = "Input.Routes.Countries.Select";

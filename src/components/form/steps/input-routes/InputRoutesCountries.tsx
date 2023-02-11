import { InputRoutesCountriesSelect } from "./InputRoutesCountriesSelect";
import InputRoutesCountriesStyles from "./InputRoutesCountriesStyles";
import PlusIcon from "/public/icons/svg/plus.svg";
import { uuidv4 } from "@/utils/crypto/crypto";

export type InputRoutesCountriesPropsType = {
  /**
   * Маршруты
   */
  routes: { id: string; country: string | null; activity: string | null }[];
  /**
   * Получить свойства поля
   */
  getFieldProps: (field: string) => any;
  /**
   * Удалить поле
   */
  removeFieldValue: (field: string, index: number) => void;
  /**
   * Вставить поле
   */
  insertFieldValue: (field: string, value: any) => void;
};

export const InputRoutesCountries = ({
  routes,
  getFieldProps,
  removeFieldValue,
  insertFieldValue,
}: InputRoutesCountriesPropsType) => {
  const { className, styles } = InputRoutesCountriesStyles;

  return (
    <>
      {styles}
      <div className={`${className} routes`}>
        <ol className={`${className} routes__list`}>
          {routes.map(({ id }, index) => (
            <li
              className={`${className} routes__list-item`}
              key={`routes_select_${id}`}
            >
              <InputRoutesCountriesSelect
                deleteRoute={() => removeFieldValue("routes", index)}
                routes={routes}
                {...getFieldProps(`routes.${index}.country`)}
              />
            </li>
          ))}
        </ol>
        <button
          className={`${className} routes__add`}
          type="button"
          onClick={() =>
            insertFieldValue("routes", {
              id: uuidv4(),
              country: null,
              activity: null,
            })
          }
        >
          <span className="pr-2 truncate">Добавить страну</span>
          <PlusIcon width={14} height={14} className="ml-auto shrink-0" />
        </button>
      </div>
    </>
  );
};

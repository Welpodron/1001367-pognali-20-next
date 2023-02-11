import InputRoutesActivitiesStyles from "./InputRoutesActivitiesStyles";
import { InputRoutesActivitiesTextarea } from "./InputRoutesActivitiesTextarea";

export type InputRoutesActivitiesPropsType = {
  /**
   * Маршруты
   */
  routes: { id: string; country: string | null }[];
  /**
   * Получить свойства поля
   */
  getFieldProps: (field: string) => any;
};

export const InputRoutesActivities = ({
  routes,
  getFieldProps,
}: InputRoutesActivitiesPropsType) => {
  const { className, styles } = InputRoutesActivitiesStyles;

  return (
    <>
      {styles}
      {routes.filter((route: { country: string | null }) => route.country)
        .length > 1 && (
        <div className={`${className} activities`}>
          <ol className={`${className} activities__list`}>
            {routes.map(({ id, country }, index) => {
              if (!country) return null;
              return (
                <li
                  className={`${className} activities__list-item`}
                  key={`routes_textarea_${id}`}
                >
                  <InputRoutesActivitiesTextarea
                    country={country}
                    {...getFieldProps(`routes.${index}.activity`)}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};

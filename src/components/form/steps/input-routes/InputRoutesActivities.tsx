import { useContext } from "react";
import { InputRoutesCountriesTextarea } from "./InputRoutesActivitiesTextarea";
import { InputRoutesContext } from "./InputRoutesContext";

export const InputRoutesActivities = () => {
  const { routes, errors } = useContext(InputRoutesContext);

  return (
    <div className="space-y-2 px-2">
      {routes
        .filter((route) => route.country)
        .map(({ id, country, activity }) => {
          const error = Array.isArray(errors)
            ? errors?.find(
                (error) => error.id === id && error.type === "MISSING_ACTIVITY"
              )?.error
            : errors;

          return (
            <InputRoutesCountriesTextarea
              key={id}
              value={activity}
              {...{ error, id, country: country as string }}
            />
          );
        })}
    </div>
  );
};

InputRoutesActivities.displayName = "Input.Routes.Activities";

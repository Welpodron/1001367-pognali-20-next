import { uuidv4 } from "@/utils/crypto/crypto";

import { useEffect, useReducer, useState } from "react";

import {
  InputRoutesContext,
  RouteActionType,
  RouteType,
} from "./InputRoutesContext";

import { InputRoutesCountries } from "./InputRoutesCountries";
import { InputRoutesActivities } from "./InputRoutesActivities";

const routesReducer = (
  routes: RouteType[],
  { type, payload }: RouteActionType
) => {
  switch (type) {
    case "ADD_ROUTE":
      return [
        ...routes,
        {
          id: payload.id,
          activity: payload.activity ?? null,
          country: payload.country ?? null,
        },
      ];
    case "UPDATE_ROUTE":
      return routes.map((route) =>
        route.id === payload.id
          ? {
              ...route,
              activity: payload.activity ?? route.activity,
              country: payload.country ?? route.country,
            }
          : route
      );
    case "DELETE_ROUTE":
      return routes.filter((route) => route.id !== payload.id);
    default:
      return routes;
  }
};

export type InputRoutesProps = {
  /** Контент */
  children: React.ReactNode;
  /** Начальное значение инпута */
  initialValue?: RouteType[];
  /** Контроль извне */
  state?: [RouteType[], (value: RouteType[]) => void];
  /** Список ошибок */
  errors?:
    | {
        id: string;
        error: string;
        type: "MISSING_COUNTRY" | "MISSING_ACTIVITY";
      }[]
    | string;
};

export const InputRoutes = ({
  children,
  state,
  errors,
  initialValue,
}: InputRoutesProps) => {
  const [outsideValue, setOutsideValue] = state ?? [];

  const [routes, dispatchRoutes] = useReducer(
    routesReducer,
    outsideValue != null
      ? outsideValue
      : initialValue != null
      ? initialValue
      : [{ id: uuidv4(), activity: null, country: null }]
  );

  const finalValue =
    outsideValue != null && setOutsideValue != null ? outsideValue : routes;

  useEffect(() => {
    if (setOutsideValue == null) {
      return;
    }

    return setOutsideValue(routes);
  }, [routes]);

  return (
    <InputRoutesContext.Provider
      value={{ routes: finalValue, dispatchRoutes, errors }}
    >
      {children}
    </InputRoutesContext.Provider>
  );
};

InputRoutes.displayName = "Input.Routes";
InputRoutes.Countries = InputRoutesCountries;
InputRoutes.Activities = InputRoutesActivities;

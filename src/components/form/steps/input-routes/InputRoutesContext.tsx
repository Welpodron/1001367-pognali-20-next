import { createContext } from "react";

export type RouteType = {
  /** Id маршрута */
  id: string;
  /** Активность в стране */
  activity?: string | null;
  /** Страна посещения */
  country?: string | null;
};

export type RouteActionType = {
  /** Тип действия */
  type: string;
  /** Полезная нагрузка */
  payload: RouteType;
};

export type InputRoutesContextType = {
  /** Список маршрутов */
  routes: RouteType[];
  /** Диспатчер для обновления маршрутов */
  dispatchRoutes: React.Dispatch<RouteActionType>;
  /** Список ошибок */
  errors?:
    | {
        id: string;
        error: string;
        type: "MISSING_COUNTRY" | "MISSING_ACTIVITY";
      }[]
    | string;
};

export const InputRoutesContext = createContext<InputRoutesContextType>({
  routes: [],
  dispatchRoutes: () => {},
  errors: [],
});

InputRoutesContext.displayName = "Input.Routes.Context";

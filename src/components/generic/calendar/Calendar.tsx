import { useCallback, useReducer, useState } from "react";

import { setMonth, getCurrentDate } from "@/utils/time/time";

import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";

// Использование useReducer для управления состоянием календаря в связи с тем, что в будущем возможно будет добавлено больше функционала, например, смена года
const currentDateReducer = (state: Date, action: { type: string }) => {
  switch (action.type) {
    case "PREVIOUS_MONTH":
      return setMonth(state, state.getMonth() - 1);
    case "NEXT_MONTH":
      return setMonth(state, state.getMonth() + 1);
    default:
      return state;
  }
};

export type CalendarPropsType = {
  /** Откуда начинается отсчет календаря (какая дата является текущий в настоящий момент времени) */
  initialValue?: Date;
  /** Контроль извне */
  state?: [
    [Date | null, Date | null],
    (value: [Date | null, Date | null]) => void
  ];
};

export const Calendar = ({
  state,
  initialValue = getCurrentDate(),
}: CalendarPropsType) => {
  const [currentDate, dispatchCurrentDate] = useReducer(
    currentDateReducer,
    initialValue
  );

  const [insideValue, setInsideValue] = useState<[Date | null, Date | null]>([
    currentDate,
    currentDate,
  ]);

  const [outsideValue, setOutsideValue] = state ?? [];

  const finalValue =
    outsideValue != null && setOutsideValue != null
      ? outsideValue
      : insideValue;

  const setValue = useCallback(
    (value: [Date | null, Date | null]) => {
      return setOutsideValue != null && outsideValue != null
        ? setOutsideValue(value)
        : setInsideValue(value);
    },
    [outsideValue, setOutsideValue, setInsideValue]
  );

  return (
    <table className="text-center w-full">
      <CalendarHeader
        calendarCurrentDate={currentDate}
        dispatchCalendarCurrentDate={dispatchCurrentDate}
      />
      <CalendarBody
        calendarInitialDate={initialValue}
        calendarCurrentDate={currentDate}
        calendarValue={finalValue}
        setCalendarValue={setValue}
      />
    </table>
  );
};

Calendar.displayName = "Calendar";

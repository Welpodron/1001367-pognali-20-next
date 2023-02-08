import { useMemo, useReducer } from "react";

import { setMonth, getCurrentDate } from "@/utils/time/time";

import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { FieldPropsGenericType } from "../Field/Field";

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

export type CalendarPropsType = {};

export const Calendar = ({
  state,
  touched,
  errors: error,
}: CalendarPropsType & FieldPropsGenericType<[Date | null, Date | null]>) => {
  const todayDate = useMemo(() => getCurrentDate(), []);

  const [currentDate, dispatchCurrentDate] = useReducer(
    currentDateReducer,
    getCurrentDate()
  );

  const [value, setValue] = state ?? [[null, null], () => {}];
  const [isTouched, setIsTouched] = touched ?? [null, () => {}];

  return (
    <table onFocus={() => setIsTouched(true)} className="text-center w-full">
      <CalendarHeader
        calendarCurrentDate={currentDate}
        dispatchCalendarCurrentDate={dispatchCurrentDate}
      />
      <CalendarBody
        calendarInitialDate={todayDate}
        calendarCurrentDate={currentDate}
        calendarValue={value}
        setCalendarValue={setValue}
      />
    </table>
  );
};

Calendar.displayName = "Calendar";

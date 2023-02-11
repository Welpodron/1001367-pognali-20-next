import { CalendarBody } from "./CalendarBody";
import { CalendarHeader } from "./CalendarHeader";
import CalendarStyles from "./CalendarStyles";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { setMonth, getCurrentDate } from "@/utils/time/time";
import { clsx } from "clsx";
import { useMemo, useReducer } from "react";

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

export const Calendar = ({
  state,
  touched,
  className,
}: ComponentPropsGenericType &
  FieldPropsGenericType<[Date | null, Date | null]>) => {
  const todayDate = useMemo(() => getCurrentDate(), []);

  const [currentDate, dispatchCurrentDate] = useReducer(
    currentDateReducer,
    getCurrentDate()
  );

  const [value, setValue] = state;
  const [, setIsTouched] = touched;
  const { className: _className, styles } = CalendarStyles;

  return (
    <>
      {styles}
      <table
        onFocus={() => setIsTouched(true)}
        className={clsx(`${_className} calendar`, className)}
      >
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
    </>
  );
};

Calendar.displayName = "Calendar";

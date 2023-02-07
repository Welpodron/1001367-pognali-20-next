import { getCalendarPanel } from "@/utils/time/time";

import { CalendarWeek } from "./CalendarWeek";

type CalendarBodyProps = {
  /** Активная дата календаря (не текущая глобальная дата) */
  calendarCurrentDate: Date;
  /** Откуда начинается отсчет календаря (какая дата является текущий в настоящий момент времени) */
  calendarInitialDate: Date;
  /** Набор значений календаря */
  calendarValue: [Date | null, Date | null];
  /** Установка значений календаря */
  setCalendarValue: (value: [Date | null, Date | null]) => void;
};

export const CalendarBody = ({
  calendarCurrentDate,
  calendarInitialDate,
  calendarValue,
  setCalendarValue,
  ...props
}: CalendarBodyProps) => {
  return (
    <tbody className="grid auto-rows-fr mr-[-4px]" {...props}>
      {getCalendarPanel({
        year: calendarCurrentDate.getFullYear(),
        month: calendarCurrentDate.getMonth(),
        mode: "fill",
      }).map((week, index) => (
        <CalendarWeek
          key={index}
          value={week}
          {...{
            calendarCurrentDate,
            calendarInitialDate,
            calendarValue,
            setCalendarValue,
          }}
        />
      ))}
    </tbody>
  );
};

CalendarBody.displayName = "Calendar.Body";

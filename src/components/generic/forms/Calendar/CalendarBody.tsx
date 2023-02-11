import CalendarStyles from "./CalendarStyles";
import { CalendarWeek } from "./CalendarWeek";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { getCalendarPanel } from "@/utils/time/time";
import { clsx } from "clsx";

type CalendarBodyPropsType = {
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
  className,
  ...props
}: ComponentPropsGenericType & CalendarBodyPropsType) => {
  const { className: _className } = CalendarStyles;

  return (
    <>
      <tbody
        className={clsx(`${_className} calendar__body`, className)}
        {...props}
      >
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
    </>
  );
};

CalendarBody.displayName = "Calendar.Body";

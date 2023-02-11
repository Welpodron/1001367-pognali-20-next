import { CalendarDay } from "./CalendarDay";
import CalendarStyles from "./CalendarStyles";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { clsx } from "clsx";

export type CalendarWeekPropsType = {
  /** Активная дата календаря (не текущая глобальная дата) */
  calendarCurrentDate: Date;
  /** Откуда начинается отсчет календаря (какая дата является текущий в настоящий момент времени) */
  calendarInitialDate: Date;
  /** Набор значений календаря */
  calendarValue: [Date | null, Date | null];
  /** Установка значений календаря */
  setCalendarValue: (value: [Date | null, Date | null]) => void;
  /** Неделя календаря */
  value: (Date | null)[];
};

export const CalendarWeek = ({
  value,
  calendarCurrentDate,
  calendarInitialDate,
  calendarValue,
  setCalendarValue,
  className,
  ...props
}: ComponentPropsGenericType & CalendarWeekPropsType) => {
  const { className: _className } = CalendarStyles;
  return (
    <>
      <tr
        className={clsx(`${_className} calendar__week`, className)}
        {...props}
      >
        {value.map((day, index) =>
          day ? (
            <CalendarDay
              key={"_" + day.getTime()}
              value={day}
              {...{
                calendarInitialDate,
                calendarValue,
                setCalendarValue,
              }}
            />
          ) : (
            <td key={index} />
          )
        )}
      </tr>
    </>
  );
};

CalendarWeek.displayName = "Calendar.Week";

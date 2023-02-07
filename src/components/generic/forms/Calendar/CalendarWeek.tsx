import { CalendarDay } from "./CalendarDay";

export type CalendarWeekProps = {
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
  ...props
}: CalendarWeekProps) => {
  return (
    <tr
      className="grid grid-cols-7 auto-cols-fr form-calendar-control-row"
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
  );
};

CalendarWeek.displayName = "Calendar.Week";

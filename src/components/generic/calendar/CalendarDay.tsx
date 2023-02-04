import { useCallback } from "react";

import {
  isDateSame,
  isDateBefore,
  isDateBetween,
  getMinDate,
  getMaxDate,
  isDateAfter,
} from "@/utils/time/time";

export type CalendarDayPropsType = {
  /** Откуда начинается отсчет календаря (какая дата является текущий в настоящий момент времени) */
  calendarInitialDate: Date;
  /** Набор значений календаря */
  calendarValue: [Date | null, Date | null];
  /** Установка значений календаря */
  setCalendarValue: (value: [Date | null, Date | null]) => void;
  /** Значение даты дня */
  value: Date;
};

export const CalendarDay = ({
  value,
  calendarInitialDate,
  calendarValue,
  setCalendarValue,
  ...props
}: CalendarDayPropsType) => {
  const handleClick = useCallback(() => {
    if (
      isDateBefore({
        compared: value,
        border: calendarInitialDate,
      })
    ) {
      return;
    }

    // Если оба значения null
    if (calendarValue.every((date) => date == null)) {
      return setCalendarValue([value, null]);
    }

    // Если первое значение null
    if (calendarValue[0] == null) {
      return setCalendarValue([value, calendarValue[1]]);
    }

    // Если второе значение null
    if (calendarValue[1] == null) {
      return setCalendarValue([calendarValue[0], value]);
    }

    if (
      calendarValue.every((date) => date != null) &&
      isDateSame({ firstDate: calendarValue[0], secondDate: value }) &&
      isDateSame({ firstDate: calendarValue[1], secondDate: value }) &&
      calendarValue.some((date) =>
        isDateSame({ firstDate: date as Date, secondDate: value })
      )
    ) {
      return setCalendarValue([null, null]);
    }

    if (
      calendarValue.some(
        (date) =>
          date != null && isDateSame({ firstDate: date, secondDate: value })
      )
    ) {
      const _calendarValue = calendarValue.map((date) => {
        if (
          date != null &&
          isDateSame({ firstDate: date, secondDate: value })
        ) {
          return null;
        }

        return date;
      });

      return setCalendarValue(_calendarValue as [Date | null, Date | null]);
    }
  }, [
    value,
    calendarValue,
    calendarInitialDate,
    setCalendarValue,
    isDateBefore,
    isDateSame,
  ]);

  return (
    <td className="block form-calendar-control-cell" {...props}>
      <button
        type="button"
        onClick={handleClick}
        className={`form-calendar-control`}
        tabIndex={
          isDateBefore({
            compared: value,
            border: calendarInitialDate,
          })
            ? -1
            : 0
        }
        data-allowed={isDateAfter({
          compared: value,
          border: calendarInitialDate,
          includeBorder: true,
        })}
        data-selected={calendarValue.some((date) =>
          date != null
            ? isDateSame({ firstDate: date, secondDate: value })
            : false
        )}
        data-in-range={
          calendarValue.every((date) => date != null) &&
          isDateBetween({
            compared: value,
            leftBorder: getMinDate(...(calendarValue as Date[])),
            rightBorder: getMaxDate(...(calendarValue as Date[])),
          })
        }
      >
        {value.getDate()}
      </button>
    </td>
  );
};

CalendarDay.displayName = "Calendar.Day";

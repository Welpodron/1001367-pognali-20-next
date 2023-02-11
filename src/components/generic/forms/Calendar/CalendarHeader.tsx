import CalendarStyles from "./CalendarStyles";
import ArrowLeftIcon from "/public/icons/svg/000000-utils-month-arrow-left-spd.svg";
import ArrowRightIcon from "/public/icons/svg/000000-utils-month-arrow-right-spd.svg";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { getWeekdaysNames } from "@/utils/time/time";
import { clsx } from "clsx";

type CalendarHeaderPropsType = {
  /** Активная дата календаря (не текущая глобальная дата) */
  calendarCurrentDate: Date;
  /** Установка активной даты календаря */
  dispatchCalendarCurrentDate: (action: { type: string }) => void;
  /** Локаль календаря */
  calendarLocale?: string;
};

export const CalendarHeader = ({
  calendarCurrentDate,
  dispatchCalendarCurrentDate,
  calendarLocale = "ru",
  className,
  ...props
}: ComponentPropsGenericType & CalendarHeaderPropsType) => {
  const { className: _className } = CalendarStyles;

  return (
    <>
      <thead
        className={clsx(`${_className} calendar__head`, className)}
        {...props}
      >
        <tr>
          <th className={`${_className} calendar__head-controls`} colSpan={7}>
            <button
              type="button"
              className={`${_className} calendar__head-control`}
              onClick={() =>
                dispatchCalendarCurrentDate({ type: "PREVIOUS_MONTH" })
              }
            >
              <ArrowLeftIcon width={9} height={18} className="opacity-30" />
            </button>
            <p className={`${_className} calendar__head-month`}>
              {calendarCurrentDate.toLocaleString(calendarLocale, {
                month: "long",
              })}{" "}
              {calendarCurrentDate.getFullYear()}
            </p>
            <button
              type="button"
              className={`${_className} calendar__head-control`}
              onClick={() =>
                dispatchCalendarCurrentDate({ type: "NEXT_MONTH" })
              }
            >
              <ArrowRightIcon width={9} height={18} className="opacity-30" />
            </button>
          </th>
        </tr>
        <tr className={`${_className} calendar__head-weekdays`}>
          {getWeekdaysNames({ locale: calendarLocale }).map((day, index) => (
            <th
              className={clsx(
                `${_className} calendar__head-weekday`,
                index > 4 && `${_className} calendar__head-weekday--weekend`
              )}
              key={index}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

CalendarHeader.displayName = "Calendar.Header";

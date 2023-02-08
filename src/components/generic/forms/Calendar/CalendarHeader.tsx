import { getWeekdaysNames } from "@/utils/time/time";

import ArrowRightIcon from "/public/icons/svg/000000-utils-month-arrow-right-spd.svg";
import ArrowLeftIcon from "/public/icons/svg/000000-utils-month-arrow-left-spd.svg";

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
  ...props
}: CalendarHeaderPropsType) => {
  return (
    <thead className="grid mb-2" {...props}>
      <tr>
        <th
          className="flex items-center py-3 mb-2 border-t-[1px] border-b-[1px] border-[#CBCED9]"
          colSpan={7}
        >
          <button
            type="button"
            className="p-2 px-3 shrink-0"
            onClick={() =>
              dispatchCalendarCurrentDate({ type: "PREVIOUS_MONTH" })
            }
          >
            <ArrowLeftIcon width={9} height={18} className="opacity-30" />
          </button>
          <p className="capitalize grow font-bold text-[#1D2E5B] text-[20px] leading-none">
            {calendarCurrentDate.toLocaleString(calendarLocale, {
              month: "long",
            })}{" "}
            {calendarCurrentDate.getFullYear()}
          </p>
          <button
            type="button"
            className="p-2 px-3 shrink-0"
            onClick={() => dispatchCalendarCurrentDate({ type: "NEXT_MONTH" })}
          >
            <ArrowRightIcon width={9} height={18} className="opacity-30" />
          </button>
        </th>
      </tr>
      <tr className="grid grid-cols-7">
        {getWeekdaysNames({ locale: calendarLocale }).map((day, index) => (
          <th
            className={`capitalize text-[#444444] ${
              index > 4 ? "text-[#FF5C23]" : ""
            }`}
            key={index}
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
};

CalendarHeader.displayName = "Calendar.Header";

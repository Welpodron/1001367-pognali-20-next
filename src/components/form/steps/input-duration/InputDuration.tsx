import { useMemo, useState, useCallback, useEffect } from "react";

import {
  getCurrentDate,
  getDaysBetween,
  getMaxDate,
  getMinDate,
  isDateSame,
  setDay,
} from "@/utils/time/time";

import { Calendar } from "@/components/generic/calendar/Calendar";
import { InputNumber } from "../input-number/InputNumber";

type InputDurationProps = {
  /** Контроль извне */
  state?: [
    {
      start: Date | null;
      end: Date | null;
    },
    (value: { start: Date | null; end: Date | null }) => void
  ];
  /** Ошибка инпута */
  errors?: string;
};

export const InputDuration = ({ state, errors }: InputDurationProps) => {
  const [outsideValue, setOutsideValue] = state ?? [];

  const currentCalendarDate = useMemo(() => getCurrentDate(), []);

  const [calendarValue, setCalendarValue] = useState<
    [Date | null, Date | null]
  >([
    outsideValue != null ? outsideValue.start : currentCalendarDate,
    outsideValue != null
      ? outsideValue.end
      : setDay(currentCalendarDate, currentCalendarDate.getDate() + 2),
  ]);

  // outsideValue и setOutsideValue - меняются на каждом рендере поэтому их не нужно отслеживать в зависимостях
  useEffect(() => {
    if (setOutsideValue == null) {
      return;
    }

    const filtered = calendarValue.filter((date) => date != null) as Date[];

    if (filtered.length === 0) {
      return setOutsideValue({ start: null, end: null });
    }

    const min = getMinDate(...filtered);
    const max = getMaxDate(...filtered);

    return isDateSame({ firstDate: min, secondDate: max })
      ? setOutsideValue({ start: null, end: null })
      : setOutsideValue({ start: min, end: max });
  }, [calendarValue, isDateSame, getMinDate, getMaxDate]);

  const handleInputChange = useCallback(
    (value: number) => {
      const filtered = calendarValue.filter((date) => date != null) as Date[];

      if (filtered.length === 0) {
        return;
      }

      const minDate = getMinDate(...filtered);

      // Поставить первую не нулевую минимальную дату
      if (value < 0 || isNaN(value)) {
        return setCalendarValue([minDate, null]);
      }

      const newDate = setDay(minDate, minDate.getDate() + value);

      setCalendarValue([minDate, newDate]);
    },
    [calendarValue, setCalendarValue, getMinDate, setDay]
  );

  // debugger;

  return (
    <>
      <InputNumber
        state={[
          calendarValue.every((date) => date != null)
            ? getDaysBetween({
                firstDate: calendarValue[0] as Date,
                secondDate: calendarValue[1] as Date,
              })
            : NaN,
          handleInputChange,
        ]}
        measure="Дн."
        min={1}
        label="Длительность:"
        errors={errors}
      />
      <Calendar state={[calendarValue, setCalendarValue]} />
    </>
  );
};

InputDuration.displayName = "Input.Duration";

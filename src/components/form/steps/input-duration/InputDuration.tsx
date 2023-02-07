import { useMemo, useState, useCallback } from "react";

import {
  getCurrentDate,
  getDaysBetween,
  getMinDate,
  setDay,
} from "@/utils/time/time";

import { Calendar } from "@/components/generic/forms/Calendar/Calendar";
import { InputNumber } from "../input-number/InputNumber";

type InputDurationProps = {
  /** Контроль извне */
  state?: [
    [Date | null, Date | null],
    (value: [Date | null, Date | null]) => void
  ];
  /** Ошибка инпута */
  errors?: string;
};

export const InputDuration = ({ state, errors }: InputDurationProps) => {
  const currentCalendarDate = useMemo(() => getCurrentDate(), []);

  const [insideValue, setInsideValue] = useState<[Date | null, Date | null]>([
    currentCalendarDate,
    setDay(currentCalendarDate, currentCalendarDate.getDate() + 2),
  ]);
  const [outsideValue, setOutsideValue] = state ?? [];

  const finalValue =
    outsideValue != null && setOutsideValue != null
      ? outsideValue
      : insideValue;

  const handleInputChange = useCallback(
    (value: number) => {
      const filtered = finalValue.filter((date) => date != null) as Date[];

      if (filtered.length === 0) {
        return;
      }

      const minDate = getMinDate(...filtered);

      // Поставить первую не нулевую минимальную дату
      if (value < 0 || isNaN(value)) {
        return setOutsideValue != null
          ? setOutsideValue([minDate, null])
          : setInsideValue([minDate, null]);
      }

      const newDate = setDay(minDate, minDate.getDate() + value);

      setOutsideValue != null
        ? setOutsideValue([minDate, newDate])
        : setInsideValue([minDate, newDate]);
    },
    [finalValue, setInsideValue, setOutsideValue]
  );

  return (
    <>
      <InputNumber
        state={[
          finalValue.every((date) => date != null)
            ? getDaysBetween({
                firstDate: finalValue[0] as Date,
                secondDate: finalValue[1] as Date,
              })
            : NaN,
          handleInputChange,
        ]}
        measure="Дн."
        min={1}
        label="Длительность:"
        errors={errors}
      />
      <Calendar
        state={[
          finalValue,
          setOutsideValue != null ? setOutsideValue : setInsideValue,
        ]}
      />
    </>
  );
};

InputDuration.whyDidYouRender = true;

InputDuration.displayName = "Input.Duration";

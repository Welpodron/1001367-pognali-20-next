import {
  InputNumber,
  InputNumberPropsType,
} from "@/components/form/steps/input-number/InputNumber";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { Calendar } from "@/components/generic/forms/calendar/Calendar";
import { getDaysBetween, getMinDate, setDay } from "@/utils/time/time";
import { useCallback } from "react";

export const InputDuration = ({
  label,
  measure,
  min,
  max,
  state,
  touched,
  errors,
}: InputNumberPropsType &
  FieldPropsGenericType<[Date | null, Date | null]>) => {
  const [value, setValue] = state;

  const handleInputChange = useCallback(
    (_value: number) => {
      const filtered = value.filter((date) => date != null) as Date[];

      if (filtered.length === 0) {
        return;
      }

      const minDate = getMinDate(...filtered);

      // Поставить первую не нулевую минимальную дату
      if (_value < 0 || isNaN(_value)) {
        return setValue([minDate, null]);
      }

      const newDate = setDay(minDate, minDate.getDate() + _value);

      setValue([minDate, newDate]);
    },
    [value, setValue]
  );

  return (
    <>
      <InputNumber
        state={[
          value.every((date) => date != null)
            ? getDaysBetween({
                firstDate: value[0] as Date,
                secondDate: value[1] as Date,
              })
            : NaN,
          handleInputChange,
        ]}
        {...{ min, max, label, touched, errors, measure }}
      />
      <Calendar {...{ state, errors, touched }} />
    </>
  );
};

InputDuration.displayName = "Input.Duration";

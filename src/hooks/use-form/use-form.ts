import React, { useCallback, useMemo, useState } from "react";

import {
  setFieldValue as _setFieldValue,
  getFieldValue as _getFieldValue,
  insertFieldValue as _insertFieldValue,
  removeFieldValue as _removeFieldValue,
} from "@/utils/object/object";

export type UseFormPropsType = Record<string, any>;

/*
 Структура объекта field:
  {
    ref: React.RefObject<any>, // ссылка на поле
    name: string, // имя поля
    id: string, // id поля
    errors: error[], // ошибка поля
    isTouched: boolean, // было ли поле сфокусировано
    isUpdated: boolean, // было ли поле изменено
    isValid: boolean, // является ли поле валидным
    isRequired: boolean, // является ли поле обязательным
    isDisabled: boolean, // является ли поле неактивным
    isHidden: boolean, // является ли поле скрытым
    isReadonly: boolean, // является ли поле только для чтения
    state: [value, setValue], // состояние поля (контроль над ним)
    initialValue: any, // начальное значение поля
    методы поля
    reset: () => void, // сбросить поле
    validate: () => void, // валидировать поле
    setTouched: () => void, // установить флаг сфокусированности
    setUpdated: () => void, // установить флаг изменения
    setValid: () => void, // установить флаг валидности
    setRequired: () => void, // установить флаг обязательности
    setDisabled: () => void, // установить флаг неактивности
    setHidden: () => void, // установить флаг скрытости
    setReadonly: () => void, // установить флаг только для чтения
  }
*/

export const useForm = ({
  initialValues,
  validate,
}: {
  initialValues: UseFormPropsType;
  validate?: Record<string, (value: any) => any>;
}) => {
  const initials = useMemo(() => initialValues, [initialValues]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [values, _setValues] = useState(initialValues);
  // Начало блока для управления ошибками полей формы
  const [_errors, _setErrors] = useState<{ field: string; errors: any[] }[]>(
    []
  );

  const __setErrors = useCallback(
    (field: string, errors: any) => {
      // Внимание! Проверки на существование такого поля в исходном объекте не проводятся
      _setErrors((currentErrors) => {
        if (!errors) {
          return currentErrors.filter((obj) => obj.field !== field);
        }

        const index = currentErrors.findIndex((obj) => obj.field === field);

        if (index === -1) {
          return [...currentErrors, { field, errors }];
        }

        return [
          ...currentErrors.slice(0, index),
          { field, errors },
          ...currentErrors.slice(index + 1),
        ];
      });
    },
    [_setErrors]
  );
  // Конец блока для управления ошибками полей формы

  // Начало блока для управления touched состоянием полей формы
  const [_touched, _setTouched] = useState<{ field: string; state: boolean }[]>(
    []
  );

  const __setTouched = useCallback(
    (field: string, state: boolean) => {
      // Внимание! Проверки на существование такого поля в исходном объекте не проводятся
      _setTouched((currentTouched) => {
        if (!state) {
          return currentTouched.filter((obj) => obj.field !== field);
        }

        return [
          ...currentTouched.filter((obj) => obj.field !== field),
          { field, state },
        ];
      });
    },
    [_setTouched]
  );
  // Конец блока для управления touched состоянием полей формы

  const resetValues = useCallback(() => {
    _setValues(initials);
    _setTouched([]);
    _setErrors([]);
  }, [initials, _setValues, _setTouched, _setErrors]);

  const setValues = useCallback(
    (values: Record<string, any>) => {
      _setValues(values);
    },
    [_setValues]
  );

  const setFieldValue = useCallback(
    (field: string, value: any) => {
      _setValues((currentValues) =>
        _setFieldValue(currentValues, field, value)
      );
    },
    [_setValues]
  );

  const getFieldValue = useCallback(
    (field: string) => _getFieldValue(values, field),
    [values]
  );

  const insertFieldValue = useCallback(
    (field: string, value: any) => {
      _setValues((currentValues) =>
        _insertFieldValue(currentValues, field, value)
      );
    },
    [_setValues]
  );

  const removeFieldValue = useCallback(
    (field: string, index?: number) => {
      _setValues((currentValues) =>
        _removeFieldValue(currentValues, field, index)
      );
    },
    [_setValues]
  );

  const getFieldProps = useCallback(
    (field: string) => {
      return {
        state: [
          getFieldValue(field),
          (value: any) => setFieldValue(field, value),
        ] as [any, (value: any) => void],
        touched: [
          _touched.find((touched) => touched.field === field)?.state,
          (value: boolean) => __setTouched(field, value),
        ] as [boolean, (value: boolean) => void],
        errors: _errors.find((error) => error.field === field)?.errors,
      };
    },
    [getFieldValue, setFieldValue, _touched, __setTouched, _errors]
  );

  return {
    values,
    submitted: [isSubmitting, setIsSubmitting] as [
      boolean,
      (value: boolean) => void
    ],
    _touched,
    setFieldsTouched: _setTouched,
    setFieldTouched: __setTouched,
    _errors,
    setFieldsErrors: _setErrors,
    setFieldError: __setErrors,
    resetValues,
    setValues,
    setFieldValue,
    getFieldValue,
    getFieldProps,
    insertFieldValue,
    removeFieldValue,
  };
};

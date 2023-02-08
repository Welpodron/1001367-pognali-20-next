import { useCallback, useEffect, useMemo, useState } from "react";

import {
  setFieldValue as _setFieldValue,
  getFieldValue as _getFieldValue,
  insertFieldValue as _insertFieldValue,
  removeFieldValue as _removeFieldValue,
  forEachField as _forEachField,
} from "@/utils/object/object";

export const useForm = ({
  initialValues,
  validate,
}: {
  initialValues: Record<string, any>;
  validate?: Record<
    string,
    ({
      value,
      values,
      field,
    }: {
      value: any;
      values: any;
      field: string;
    }) => any
  >;
}) => {
  const initials = useMemo(() => initialValues, [initialValues]);
  const [values, _setValues] = useState(initialValues);

  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  useEffect(() => {
    setIsValid(!_errors.length);
  }, [_errors, setIsValid]);
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
      _setValues((currentValues) => {
        if (validate) {
          const validator = _getFieldValue(validate, field.split(".")[0]);
          if (typeof validator === "function") {
            __setErrors(
              field,
              validator({
                value: Array.isArray(value) ? undefined : value,
                values: Array.isArray(value) ? value : undefined,
                field,
              })
            );
          }
        }
        return _setFieldValue(currentValues, field, value);
      });
    },
    [_setValues, __setErrors, validate]
  );

  const getFieldValue = useCallback(
    <T = any>(field: string) => _getFieldValue(values, field) as T,
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
      _setErrors((currentErrors) => {
        return currentErrors.filter(
          (obj) => !obj.field.includes(`${field}.${index}`)
        );
      });
      _setTouched((currentTouched) => {
        return currentTouched.filter(
          (obj) => !obj.field.includes(`${field}.${index}`)
        );
      });
      _setValues((currentValues) => {
        return _removeFieldValue(currentValues, field, index);
      });
    },
    [_setValues, _setTouched, _setErrors]
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

  const validateValues = useCallback(() => {
    _forEachField(values, "", (value, field) => {
      if (validate) {
        const validator = _getFieldValue(validate, field.split(".")[0]);
        if (typeof validator === "function") {
          __setErrors(
            field,
            validator({
              value: Array.isArray(value) ? undefined : value,
              values: Array.isArray(value) ? value : undefined,
              field,
            })
          );
        }
      }
    });
  }, [values, validate, __setErrors]);

  return {
    values,
    submitting: [isSubmitting, setIsSubmitting] as [
      boolean,
      (value: boolean) => void
    ],
    valid: [isValid, setIsValid] as [boolean, (value: boolean) => void],
    _touched,
    setFieldsTouched: _setTouched,
    setFieldTouched: __setTouched,
    _errors,
    setFieldsErrors: _setErrors,
    setFieldError: __setErrors,
    validateValues,
    resetValues,
    setValues,
    setFieldValue,
    getFieldValue,
    getFieldProps,
    insertFieldValue,
    removeFieldValue,
  };
};

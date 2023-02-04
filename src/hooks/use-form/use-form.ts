import React, { useCallback, useState } from "react";

export type UseFormPropsType = Record<string, any>;

export const useForm = ({
  initialValues,
  validate,
}: {
  initialValues: UseFormPropsType;
  validate?: Record<string, (value: any) => any>;
}) => {
  const [values, _setValues] = useState(initialValues);
  const [errors, _setErrors] = useState<Record<string, any>>({});

  // Модифицирует объект по указанному пути на месте (не создавая копии)
  const _setFieldValue = useCallback(
    (object: Record<string, any>, path: string[], value: any) => {
      if (Object.keys(object).includes(path[0])) {
        const leaf = object[path[0]];

        if (typeof leaf === "object" && path.length > 1) {
          _setFieldValue(leaf, path.slice(1), value);
        }

        if (path.length === 1) {
          // Валидация
          if (validate && validate[path[0]]) {
            const error = validate[path[0]](value);
            if (error) {
              _setErrors((currentState) => ({
                ...currentState,
                [path[0]]: error,
              }));
            } else {
              _setErrors((currentState) => {
                const copy = { ...currentState };
                delete copy[path[0]];
                return copy;
              });
            }
          }
          object[path[0]] = value;
        }
      }
    },
    [_setErrors, validate]
  );

  const setFieldValue = useCallback(
    (field: string, value: any) => {
      _setValues((currentState) => {
        const copy = { ...currentState };
        _setFieldValue(copy, field.split("."), value);
        return copy;
      });
    },
    [_setValues, _setFieldValue]
  );

  const getFieldProps = useCallback(
    <T = any>(field: string) => {
      const state: [T, (value: T) => void] = [
        values[field],
        (value) => setFieldValue(field, value),
      ];

      return {
        state,
        errors: errors[field],
      };
    },
    [values, setFieldValue, errors]
  );

  const onSubmit = useCallback(
    (callback: (values: UseFormPropsType) => void) => {
      return (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        callback(values);
      };
    },
    [values]
  );

  return { values, setFieldValue, getFieldProps, onSubmit };
};

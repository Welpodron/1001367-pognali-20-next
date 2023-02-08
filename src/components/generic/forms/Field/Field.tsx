import { createContext, useCallback, useEffect, useRef, useState } from "react";

export type FieldPropsGenericType<T = any> = {
  // Контроль над состоянием поля (аналог useState)
  state: [T, (value: T) => void];
  // Было ли поле в фокусе
  touched: [boolean, (value: boolean) => void];
  // Ошибки поля
  errors?: any[];
};

export type FieldContextType = {
  // Ссылка на элемент
  ref: React.RefObject<any>;
} & FieldPropsGenericType;

export const FieldContext = createContext<FieldContextType>({
  state: [undefined, () => {}],
  touched: [false, () => {}],
  ref: { current: null },
  errors: [],
});

type FieldPropsType = {
  // Контент
  children: React.ReactNode;
};

export const Field = ({
  children,
  state,
  touched,
  errors,
}: FieldPropsType & Omit<FieldContextType, "ref">) => {
  //   const [isTouched, setIsTouched] = useState(false);
  const [isTouched, setIsTouched] = touched;

  const ref = useRef(null);

  const handleFieldFocus = useCallback(() => {
    setIsTouched(true);
  }, [setIsTouched]);

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    const element = ref.current as any;

    element.addEventListener("focus", handleFieldFocus);

    return () => {
      // В этом месте происходит ошибка если ref перестал существовать
      if (element) {
        return;
      }

      element.removeEventListener("focus", handleFieldFocus);
    };
  }, [ref, handleFieldFocus]);

  return (
    <FieldContext.Provider value={{ state, touched, ref, errors }}>
      {children}
    </FieldContext.Provider>
  );
};

export type FieldPropsGenericType<T = any> = {
  // Контроль над состоянием поля (аналог useState)
  state: [T, (value: T) => void];
  // Было ли поле в фокусе
  touched: [boolean, (value: boolean) => void];
  // Ошибки поля
  errors?: any[];
};

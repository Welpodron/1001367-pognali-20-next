export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Генерирует случайный идентификатор (ВНИМАНИЕ! Не использовать эту функцию часто, т.к. она не гарантирует уникальность)
 * @returns {string} - Возвращает строку вида _id_unstable_XXXXXXXXXX, где X - случайный символ
 */
export const _id = (): string => {
  return `_id_unstable_${Math.random().toString(36).slice(2, 11)}`;
};

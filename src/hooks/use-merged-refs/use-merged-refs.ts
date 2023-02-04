import React, { useCallback } from "react";

/**
 * Функция для объединения нескольких рефов в один
 * @param {React.ForwardedRef<T>[]} refs - массив рефов
 * @returns {(HTMLNode: T) => void} функция для объединения рефов,
 * которую можно передать в качестве рефа в компонент
 * (в качестве аргумента функции `node` передается текущий HTML-элемент, к которому привязан реф)
 */
export const useMergedRefs = <T>(
  ...refs: React.ForwardedRef<T>[]
): ((HTMLNode: T) => void) => {
  // `useCallback` используется для того, чтобы функция была создана только один раз
  return useCallback(
    (HTMLNode: T) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          // В случае если реф является функцией, то вызываем ее с переданным аргументом
          ref(HTMLNode);
        } else if (ref) {
          // В случае если реф является объектом, то присваиваем ему свойство `current`
          (ref as React.MutableRefObject<T>).current = HTMLNode;
        }
      });
    },
    [refs]
  );
};

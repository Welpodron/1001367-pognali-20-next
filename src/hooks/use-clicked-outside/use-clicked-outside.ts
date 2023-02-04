import { DependencyList, useEffect, useRef } from "react";

export const useClickedOutside = <T extends HTMLElement>(
  callback: (e: MouseEvent) => void,
  deps: DependencyList = []
) => {
  const elementRef = useRef<T>(null);

  // В случае если клик сработал на disabled элементе, то событие НЕ БУДЕТ ВЫЗВАНО!

  const handleDocumentClick = (e: MouseEvent) => {
    if (!elementRef.current?.contains(e.target as Node)) {
      callback(e);
    }
  };

  useEffect(() => {
    if (!elementRef || !elementRef.current) {
      return;
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [elementRef, ...deps]);

  return elementRef;
};

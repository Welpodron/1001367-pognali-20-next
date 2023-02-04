import { useCallback } from "react";

type selectOptionProps = {
  /**
   * Значение, которое сфокусировано
   * */
  currentPossibleSelectValue: string;
  /**
   * Устанавливает сфокусированное значение
   * */
  setCurrentPossibleSelectValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * Значение, которое выбрано
   */
  selectValue: string | null;
  /**
   * Устанавливает значение в родительском select
   * */
  setSelectValue: React.Dispatch<React.SetStateAction<string | null>>;
  /**
   * Значение, которое будет передано в `selectValue` при выборе этого option
   */
  value: string;
  /**
   * Отображаемый текст
   * */
  label: string;
  /**
   * Функция для закрытия select
   * */
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SelectOption = ({
  value,
  label,
  currentPossibleSelectValue,
  setCurrentPossibleSelectValue,
  selectValue,
  setSelectValue,
  setIsOpened,
}: selectOptionProps) => {
  const handleOptionClick = useCallback(() => {
    setSelectValue(value);
    setCurrentPossibleSelectValue(value);

    if (setIsOpened) {
      setIsOpened(false);
    }
  }, [value, setSelectValue, setIsOpened]);

  return (
    <button
      className="select-custom-js-option"
      data-selected={selectValue === value}
      data-possible-selected={currentPossibleSelectValue === value}
      type="button"
      onClick={handleOptionClick}
    >
      {label}
    </button>
  );
};

SelectOption.displayName = "Select.Option";

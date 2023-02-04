// returns value between 0 - Sunday and 6 - Saturday
export const getWeekday = (year: number, month: number, day: number) => {
  return new Date(year, month, day).getDay();
};

/**
 * Функция возвращает текущую дату без времени
 * @returns {Date} текущая дата без времени
 */
export const getCurrentDate = (): Date =>
  new Date(new Date().setHours(0, 0, 0, 0));

/**
 * Функция возвращает массив с названиями дней недели
 * @param {Object} options - объект с параметрами
 * @param {Intl.LocalesArgument} options.locale - локаль
 * @param {"long" | "short" | undefined} [options.style=short] - стиль названия дня недели
 * @returns {string[]} массив с названиями дней недели
 */
export const getWeekdaysNames = ({
  locale,
  style = "short",
}: {
  locale: Intl.LocalesArgument;
  style?: "long" | "short";
}): string[] => {
  /* 2000-01-03 - понедельник
  2000-01-04 - вторник
  2000-01-05 - среда
  2000-01-06 - четверг
  2000-01-07 - пятница
  2000-01-08 - суббота
  2000-01-09 - воскресенье
  */
  const weekdays: string[] = [];

  for (let i = 3; i < 10; i++) {
    const date = new Date(`2000-01-0${i}`);
    weekdays.push(date.toLocaleDateString(locale, { weekday: style }));
  }

  return weekdays;
};

/**
 * Функция возвращает минимальную дату из массива переданных дат
 * @param {Date[]} dates - массив дат
 * @returns {Date} минимальная дата
 */
export const getMinDate = (...dates: Date[]): Date => {
  return new Date(
    Math.min(
      ...dates.map((date) => {
        const _date = new Date(date);
        _date.setHours(0, 0, 0, 0);
        return _date.getTime();
      })
    )
  );
};

/**
 * Функция возвращает максимальную дату из массива переданных дат
 * @param {Date[]} dates - массив дат
 * @returns {Date} максимальная дата
 */
export const getMaxDate = (...dates: Date[]): Date => {
  return new Date(
    Math.max(
      ...dates.map((date) => {
        const _date = new Date(date);
        _date.setHours(0, 0, 0, 0);
        return _date.getTime();
      })
    )
  );
};

/**
 * Функция возвращает количество дней между датами
 * @param {Object} dates - объект с датами
 * @param {Date} dates.firstDate - первая дата
 * @param {Date} dates.secondDate - вторая дата
 * @returns {number} количество дней между датами
 */
export const getDaysBetween = ({
  firstDate,
  secondDate,
}: {
  firstDate: Date;
  secondDate: Date;
}): number => {
  const _firstDate = new Date(firstDate);
  const _secondDate = new Date(secondDate);
  _firstDate.setHours(0, 0, 0, 0);
  _secondDate.setHours(0, 0, 0, 0);

  return (
    Math.abs(_firstDate.getTime() - _secondDate.getTime()) /
    (1000 * 60 * 60 * 24)
  );
};

/**
 * Функция возвращает календарную панель размером 6х7 или же размером текущего месяца
 * @param {Object} options - объект с параметрами
 * @param {number} options.year - год
 * @param {number} options.month - месяц
 * @param {string} [options.mode=month] - режим отображения панели календаря (month - размер текущего месяца, fill - 6x7)
 * @returns {Array<Date | null>[]} календарная панель размером 6х7 или же размером текущего месяца (массив массивов дат)
 */
export const getCalendarPanel = ({
  year,
  month,
  mode = "month",
}: {
  year: number;
  month: number;
  mode?: "month" | "fill";
}): Array<Date | null>[] => {
  const panelFlat: Array<Date | null> = [];
  const panel: Array<Date | null>[] = [];

  /*
  
    Месяцы в JS: Январь - 0 Февраль - 1 ... Декабрь - 11
    Дни недели в JS: Воскресенье - 0 Понедельник - 1 ... Суббота - 6 
  
    Универсальный размер календаря - 42 ячейки: 6 строк на 7 столбцов 
  
    Почему не подходит размер календаря в 35 ячеек: 5 строк на 7 столбцов? (минимальное свободное число ячеек для 35 календаря = 35 - 31 = 4 ячейки)
  
    Если месяц имеет 31 день и первый день месяца Воскресенье то матрица будет следующего вида
  
    [ 1, 2, 3, 4, 5, 6, 0]
  
    [Пн,Вт,Cр,Чт,Пт,Сб,Вс]
    [ok,ok,ok,ok,NO,NO,01]
    [02,03,04,05,06,07,08]
    [09,10,11,12,13,14,15]
    [16,17,18,19,20,21,22]
    [23,24,25,26,27,28,29] 30,31 -? 
  
    Все 4 свободные ячейки заполняются, однако не хватает еще 2! 30 и 31 день не может быть добавлен в такую матрицу и требуется перерасчет размера календаря 
  
    Далее рассмотрен ФЕВРАЛЬ НЕ високосного года 
  
    LB - leftBorder
    RB - rightBorder
    xx - на данный момент не известные дни
  
    [ 1, 2, 3, 4, 5, 6, 0]
  
    [Пн,Вт,Cр,Чт,Пт,Сб,Вс]
    [LB,xx,xx,|01,02,03,04]
    [05,06,07,08,09,10,11]
    [12,13,14,15,16,17,18]
    [19,20,21,22,23,24,25]
    [26,27,28,xx,xx,xx,RB]
  
    LB = 4 (Порядковый номер текущего дня)
    
    ИСКЛЮЧЕНИЕ:
  
    [ 1, 2, 3, 4, 5, 6, 0]
  
    [LB,xx,xx,xx,xx,xx,01]
  
    LB = 7
  
    RB = 42 - LB 
    */

  const matrixSize = 42;
  let leftBorder = getWeekday(year, month, 1);

  if (leftBorder === 0) {
    leftBorder = 7;
  }

  for (let i = leftBorder - 2; i >= 0; i--) {
    // -1 - предыдущий предыдущего
    // 0 - предыдущий день
    const day = new Date(year, month, i * -1, 0, 0, 0, 0);
    panelFlat.push(day);
  }

  const rightBorder = matrixSize - leftBorder;

  // Нумерация начинается с 1 -> <=
  // Включить последний день -> + 1
  for (let i = 1; i <= rightBorder + 1; i++) {
    const day = new Date(year, month, i, 0, 0, 0, 0);
    panelFlat.push(day);
  }

  if (mode === "month") {
    for (let i = 0; i < panelFlat.length; i++) {
      if ((panelFlat[i] as Date).getMonth() != month) {
        panelFlat[i] = null;
      }
    }
  }

  for (let i = 0; i < panelFlat.length; i += 7) {
    panel.push(panelFlat.slice(i, i + 7));
  }

  return panel;
};

/**
 * Функция проверяет что даты равны
 * @param {Object} dates - объект с датами
 * @param {Date} dates.firstDate - первая дата
 * @param {Date} dates.secondDate - вторая дата
 * @returns {boolean} true - если даты равны, false - если даты не равны
 */
export const isDateSame = ({
  firstDate,
  secondDate,
}: {
  firstDate: Date;
  secondDate: Date;
}): boolean => {
  const _firstDate = new Date(firstDate);
  const _secondDate = new Date(secondDate);
  _firstDate.setHours(0, 0, 0, 0);
  _secondDate.setHours(0, 0, 0, 0);

  return _firstDate.getTime() === _secondDate.getTime();
};

/**
 * Функция проверяет что дата находится после переданной даты
 * @param {Object} dates - объект с датами
 * @param {Date} dates.compared - сравниваемая дата
 * @param {Date} dates.border - дата с которой сравниваем
 * @param {boolean} [dates.includeBorder=false] - включать ли границу в сравнение
 * @returns {boolean} true - если дата находится после переданной даты, false - если дата не находится после переданной даты
 */
export const isDateAfter = ({
  compared,
  border,
  includeBorder = false,
}: {
  compared: Date;
  border: Date;
  includeBorder?: boolean;
}): boolean => {
  const comparedDate = new Date(compared);
  const borderDate = new Date(border);
  comparedDate.setHours(0, 0, 0, 0);
  borderDate.setHours(0, 0, 0, 0);

  return includeBorder
    ? comparedDate.getTime() >= borderDate.getTime()
    : comparedDate.getTime() > borderDate.getTime();
};

/**
 * Функция проверяет что дата находится до переданной даты
 * @param {Object} dates - объект с датами
 * @param {Date} dates.compared - сравниваемая дата
 * @param {Date} dates.border - дата с которой сравниваем
 * @param {boolean} [dates.includeBorder=false] - включать ли границу в сравнение
 * @returns {boolean} true - если дата находится до переданной даты, false - если дата не находится до переданной даты
 * */
export const isDateBefore = ({
  compared,
  border,
  includeBorder = false,
}: {
  compared: Date;
  border: Date;
  includeBorder?: boolean;
}): boolean => {
  const comparedDate = new Date(compared);
  const borderDate = new Date(border);
  comparedDate.setHours(0, 0, 0, 0);
  borderDate.setHours(0, 0, 0, 0);

  return includeBorder
    ? comparedDate.getTime() <= borderDate.getTime()
    : comparedDate.getTime() < borderDate.getTime();
};

/**
 * Функция проверяет что дата находится между двумя датами
 * @param {Object} dates - объект с датами
 * @param {Date} dates.compared - сравниваемая дата
 * @param {Date} dates.leftBorder - левая граница
 * @param {Date} dates.rightBorder - правая граница
 * @param {boolean} [dates.includeLeftBorder=false] - включать ли левую границу в сравнение
 * @param {boolean} [dates.includeRightBorder=false] - включать ли правую границу в сравнение
 * @returns {boolean} true - если дата находится между двумя датами, false - если дата не находится между двумя датами
 * */
export const isDateBetween = ({
  compared,
  leftBorder,
  rightBorder,
  includeLeftBorder = true,
  includeRightBorder = true,
}: {
  compared: Date;
  leftBorder: Date;
  rightBorder: Date;
  includeLeftBorder?: boolean;
  includeRightBorder?: boolean;
}): boolean => {
  if (
    isDateAfter({
      compared,
      border: leftBorder,
      includeBorder: includeLeftBorder,
    }) &&
    isDateBefore({
      compared,
      border: rightBorder,
      includeBorder: includeRightBorder,
    })
  ) {
    return true;
  }

  return false;
};

/**
 * Функция меняет месяц в дате
 * @param {Date} calendarDate - дата
 * @param {number} month - месяц
 * @returns {Date} дата с измененным месяцем
 * */
export const setMonth = (calendarDate: Date, month: number): Date => {
  const date = new Date(calendarDate.getTime());
  // Установка на второе число месяца так как в феврале не будет 31 числа
  // и если установить 31 число то дата перейдет на март
  date.setDate(2);
  date.setHours(0, 0, 0, 0);
  date.setMonth(month);
  return date;
};

/**
 * Функция меняет день месяца в дате
 * @param {Date} calendarDate - дата
 * @param {number} day - день месяца (1-31)
 * @returns {Date} дата с измененным месяцем
 * */
export const setDay = (calendarDate: Date, day: number): Date => {
  const date = new Date(calendarDate.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(day);
  return date;
};

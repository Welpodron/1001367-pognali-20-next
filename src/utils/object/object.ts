/**
 * @deprecated (Лучше использовать сторонние библиотеки или же `structuredClone`)
 * Функция производит `глубокое` копирование объекта
 * @param {any[] | Record<any, any>} obj - объект
 * @returns {any[] | Record<any, any>} - копия объекта
 */
const _deepClone = (obj: Record<any, any>): any[] | Record<any, any> => {
  const _obj: Record<any, any> = Array.isArray(obj) ? [] : {};

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Даты не копируем, а просто возвращаем
  if (obj instanceof Date) {
    return obj;
  }

  for (let key in obj) {
    _obj[key] = _deepClone(obj[key]);
  }

  return _obj;
};

/**
 * Функция устанавливает значение в объекте
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь к значению
 * @param {any} value - значение
 * @returns {boolean} - true, если значение было вставлено, иначе false
 */
const _setFieldValue = (
  obj: Record<string, any>,
  path: string,
  value: any
): boolean => {
  const _path = path.split(".");

  if (obj[_path[0]] === undefined) {
    return false;
  } else if (_path.length === 1) {
    if (typeof value === "function") {
      obj[_path[0]] = value(obj[_path[0]]);
      return true;
    }
    obj[_path[0]] = value;
    return true;
  }

  return _setFieldValue(obj[_path[0]], _path.slice(1).join("."), value);
};

/**
 * Функция вставляет значение в объект
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь к значению
 * @param {any} value - значение
 * @returns {boolean} - true, если значение было вставлено, иначе false
 */
const _insertFieldValue = (
  obj: Record<string, any>,
  path: string,
  value: any
): boolean => {
  const _path = path.split(".");

  if (obj[_path[0]] === undefined) {
    return false;
  } else if (_path.length === 1) {
    if (typeof value === "function") {
      obj[_path[0]] = value(obj[_path[0]]);
      return true;
    }
    if (Array.isArray(obj[_path[0]])) {
      obj[_path[0]].push(value);
      return true;
    }
    if (typeof obj[_path[0]] === "object" && typeof value === "object") {
      // Внимание! Операция может быть не безопасной
      obj[_path[0]] = { ..._deepClone(obj[_path[0]]), ..._deepClone(value) };
      return true;
    }
  }

  return _insertFieldValue(obj[_path[0]], _path.slice(1).join("."), value);
};

/**
 * Функция удаляет значение из объекта
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь к значению
 * @param {Function} callback - функция, которая будет вызвана с удаленным значением
 * @returns {boolean} - true, если значение было удалено, иначе false
 */
const _deleteFieldValue = (
  obj: Record<string, any>,
  path: string,
  callback: (value: any) => void
): boolean => {
  const _path = path.split(".");

  if (obj[_path[0]] === undefined) {
    return false;
  } else if (_path.length === 1) {
    if (typeof callback === "function") {
      callback(obj[_path[0]]);
    }
    delete obj[_path[0]];
    return true;
  }

  return _deleteFieldValue(obj[_path[0]], _path.slice(1).join("."), callback);
};

/**
 * Функция удаляет элемент массива из поля объекта
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь к значению
 * @param {number} index - индекс элемента массива
 * @returns {boolean} - true, если значение было удалено, иначе false
 */
const _removeFieldValue = (
  obj: Record<string, any>,
  path: string,
  index?: number
) => {
  const _path = path.split(".");

  if (obj[_path[0]] === undefined) {
    return false;
  } else if (_path.length === 1) {
    if (Array.isArray(obj[_path[0]])) {
      if (index !== undefined && index >= 0) {
        // Модификации производятся на месте в связи с тем, что filter shallow copy
        // А так как данный метод все равно возвращает deep копию оригинального объекта, то это не проблема
        // Удаление элемента по индексу
        obj[_path[0]].splice(index, 1);
        return true;
      } else {
        obj[_path[0]].pop();
        return true;
      }
    }
    return false;
  }
};

/**
 * Функция возвращает значение из объекта
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь до поля
 * @returns {any} значение
 */
export const getFieldValue = (obj: Record<string, any>, path: string): any => {
  let _path = path.split(".");

  if (obj[_path[0]] === undefined) {
    return undefined;
  } else if (_path.length === 1) {
    return obj[_path[0]];
  }

  return getFieldValue(obj[_path[0]], _path.slice(1).join("."));
};

/**
 * Функция устанавливает значение в объекте и возвращает новый объект
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь до поля
 * @param {any} value - значение
 * @returns {Record<string, any>} новый объект
 */
export const setFieldValue = (
  obj: Record<string, any>,
  path: string,
  value: any
): Record<string, any> => {
  const _obj = _deepClone(obj);
  _setFieldValue(_obj, path, value);
  return _obj;
};

/**
 * Функция добавляет значение в массив или объект и возвращает новый объект
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь до поля
 * @param {any} value - значение
 * @returns {Record<string, any>} новый объект
 */
export const insertFieldValue = (
  obj: Record<string, any>,
  path: string,
  value: any
): Record<string, any> => {
  const _obj = _deepClone(obj);
  _insertFieldValue(_obj, path, value);
  return _obj;
};

/**
 * Функция удаляет поле из объекта и возвращает новый объект
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь до поля
 * @param {(value: any) => any} callback - функция, которая будет вызвана с удаленным значением
 * @returns {Record<string, any>} новый объект
 */
export const deleteFieldValue = (
  obj: Record<string, any>,
  path: string,
  callback: (value: any) => any
): Record<string, any> => {
  const _obj = _deepClone(obj);
  _deleteFieldValue(_obj, path, callback);
  return _obj;
};

/**
 * Функция удаляет элемент массива из поля объекта
 * @param {Record<string, any>} obj - объект
 * @param {string} path - путь до поля
 * @param {number} index - индекс удаляемого элемента
 * @returns {Record<string, any>} новый объект
 */
export const removeFieldValue = (
  obj: Record<string, any>,
  path: string,
  index?: number
): Record<string, any> => {
  const _obj = _deepClone(obj);
  _removeFieldValue(_obj, path, index);
  return _obj;
};

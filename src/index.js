// lonter.js

class Lonter {
  static isString(value) {
    return typeof value === 'string';
  }

  static isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  static isInteger(value) {
    return Lonter.isNumber(value) && Number.isInteger(value);
  }

  static isFloat(value) {
    return Lonter.isNumber(value) && !Number.isInteger(value);
  }

  static isBoolean(value) {
    return typeof value === 'boolean';
  }

  static isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  static isArray(value) {
    return Array.isArray(value);
  }

  static isFunction(value) {
    return typeof value === 'function';
  }

  static isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
  }
}

module.exports = Lonter;

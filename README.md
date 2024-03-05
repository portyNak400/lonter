# Lonter

Lonter is a simple data validation library for JavaScript, allowing developers to easily validate various data types.

## Installation

You can install Lonter via npm:

```bash
npm install lonter
```

## Usage

To use Lonter in your JavaScript project, import it as follows:

```javascript
const Lonter = require('lonter');

// Example usage
console.log(Lonter.isString('Hello')); // true
console.log(Lonter.isNumber(42)); // true
```

### Available Validation Methods

- `isString(value)`: Checks if the value is a string.
- `isNumber(value)`: Checks if the value is a number.
- `isInteger(value)`: Checks if the value is an integer.
- `isFloat(value)`: Checks if the value is a floating-point number.
- `isBoolean(value)`: Checks if the value is a boolean.
- `isObject(value)`: Checks if the value is an object.
- `isArray(value)`: Checks if the value is an array.
- `isFunction(value)`: Checks if the value is a function.
- `isDate(value)`: Checks if the value is a valid Date object.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on [GitHub](https://github.com/portyNak400/lonter).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

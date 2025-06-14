const { add, subtract, divide } = require("./mathUtils");

function calculate(a, b, operation) {
  switch (operation) {
    case "add": {
      return add(a, b);
    }
    case "subtract": {
      return subtract(a, b);
    }
    case "multiply": {
      return multiply(a, b);
    }
    case "divide": {
      return divide(a, b);
    }
    default:
      throw new Error("Invalid operations");
  }
}
module.exports = { calculate };

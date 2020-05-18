const readlineSync = require("readline-sync");

const input1 = readlineSync.question(`Please enter your first number `);
const input2 = readlineSync.question(`Please enter your second number `);
let operation = readlineSync.question(`Please enter the operation to perform: add, sub, mul, div `);

function oper(type, a, b) {
  if (type === "add") {
    return a + b;
  } else if (type === "sub") {
    return a - b;
  } else if (type === "mul") {
    return a * b;
  } else if (type === "div") {
    return a / b;
  } else {
    return `Please answer each question with a valid input`
  }
}
console.log(`${oper(operation, input1, input2)}`);
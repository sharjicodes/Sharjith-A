class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        if (this.b === 0) {
          return 'Error: Division by zero';
        }
        return this.a / this.b;
      default:
        return 'Invalid operation';
    }
  }
}

module.exports = Calculator;

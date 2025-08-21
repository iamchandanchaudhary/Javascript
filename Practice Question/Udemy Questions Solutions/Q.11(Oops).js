class BankAccount {
  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this._balance = initialBalance;
  }

  // Getter for balance
  get balance() {
    return this._balance;
  }

  // Setter for balance (ensures no negative values)
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (this._balance - amount < 0) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }
}

// Example usage:
const account = new BankAccount(100);
account.deposit(50);     // Works fine
account.withdraw(30);    // Works fine
// account.withdraw(200);   // ❌ Throws "Insufficient funds"
// account.balance = -500;  // ❌ Throws "Balance cannot be negative"






// Base class
class Shape {
  area() {
    return 0; // default
  }
}

// Circle subclass
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Rectangle subclass
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Usage
const shapes = [
  new Shape(),
  new Circle(5),
  new Rectangle(4, 6)
];

shapes.forEach(shape => {
  console.log(`Area: ${shape.area()}`);
});

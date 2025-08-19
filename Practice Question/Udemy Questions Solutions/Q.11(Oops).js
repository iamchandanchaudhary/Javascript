// Task 1: Encapsulation Using Getters and Setters
class BankAccount {
  constructor(initialBalance = 0) {
    this._balance = initialBalance;
  }

  // Getter for balance
  get balance() {
    return this._balance;
  }

  // Setter for balance (ensures non-negative balance)
  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative!");
    } else {
      this._balance = amount;
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${this._balance}`);
    } else {
      console.log("Deposit amount must be positive!");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this._balance >= amount) {
      this._balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this._balance}`);
    } else {
      console.log("Insufficient balance or invalid amount!");
    }
  }
}

// ---------------- Demo Task 1 ----------------
const myAccount = new BankAccount(100);
console.log(myAccount.balance);   // 100
myAccount.deposit(50);            // Deposited: 50, New Balance: 150
myAccount.withdraw(30);           // Withdrew: 30, New Balance: 120
myAccount.balance = -500;         // Balance cannot be negative!
console.log(myAccount.balance);   // 120



// Task 2: Polymorphism with Method Overriding
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

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

// ---------------- Demo Task 2 ----------------
const circle = new Circle(5);
console.log("Circle Area:", circle.area()); // 78.5398...

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.area()); // 24
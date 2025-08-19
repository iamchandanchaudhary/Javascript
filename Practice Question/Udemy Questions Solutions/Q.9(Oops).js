function Person(name, age) {
  if (typeof age !== "number" || age <= 0) {
    throw new Error("Age must be a positive number");
  }

  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};


const person1 = new Person("Hitesh", 19.5);
console.log(person1.greet());


try {
  const p2 = new Person("Chandan", -5);
} catch (err) {
  console.error(err.message);
}
// Task 1
function Animal() {}
 
Animal.prototype.makeSound = function() {
  return 'Animal sound';
};
 
function Dog() {}
 
Dog.prototype = Object.create(Animal.prototype);
 
Dog.prototype.bark = function() {
  return 'Woof!';
};
 
Dog.prototype.constructor = Dog;
 
// Task 2
function Shape(color) {
  this.color = color;
}
Shape.prototype.getColor = function() {
  return this.color;
};
 
function Rectangle(width, height, color) {
  Shape.call(this, color); // Call the Shape constructor
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype); // Set up inheritance
Rectangle.prototype.constructor = Rectangle;
 
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  getArea() {
    console.log("Area calculation not defined for the base class.");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area.toFixed(2);
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    const area = this.width * this.height;
    return area.toFixed(2);
  }
}

const circle = new Circle("red", 5);
console.log("Circle color:", circle.getColor());
console.log("Circle area:", circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log("Rectangle color:", rectangle.getColor());
console.log("Rectangle area:", rectangle.getArea());

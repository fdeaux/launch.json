function squareNumber(num) {
  return num ** 2;
}
function areaSquare(side) {
  return side * 4;
}
function areaRectangle(side1, side2) {
  let area1 = side1 * side2;
  return area1;
}
function circumference(radius) {
  const pi = 3.14159265359;
  return 2 * (pi * radius);
}
console.log(
  "The result of squaring the number you entered is " + squareNumber(1000)
);
console.log("The area of the square = " + areaSquare(10));
console.log("The Circumference of the circle = " + circumference(510.5684));
console.log(
  "The area of the rectangle = " + areaRectangle((side1 = 10), (side2 = 20))
);

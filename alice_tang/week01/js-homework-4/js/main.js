// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// var rectangle = {
//   length: 4,
//   width: 4
// };
// ```


var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(rect) {
  return rect.length===rectangle.width ? true : false;
};

var area = function (rect){
  return rect.length * rect.width;
};

var perimeter = function(rect) {
    return (rect.length + rect.width) * 2;
};

console.log("isSquare(rectangle)",isSquare(rectangle));
console.log("area(rectangle)",area(rectangle));
console.log("perimeter(rectangle)",perimeter(rectangle));


// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

var isEquilateral = function(tri) {
  var result = false;
  if ((tri.sideA === tri.sideB) && (tri.sideB === tri.sideC)) {
    result = true;
  }
  return result;
}

var isIsosceles = function (tri) {
  var result = false;
  if ((tri.sideA === tri.sideB) || (tri.sideB === tri.sideC)
        ||(tri.sideA === tri.sideB)) {
    result = true;
  }
  return result;
}

var area = function (tri) {
  // s: semiperimeter
  var s = (tri.sideA + tri.sideB + tri.sideC)/2;
  return Math.sqrt(s*(s-tri.sideA)*(s-tri.sideB)*(s-tri.sideC));
}

var isObtuse = function (tri) {
  var result = false;
  if (((tri.sideA)**2 + (tri.sideB)**2 > (tri.sideC)**2) ||
      ((tri.sideB)**2 + (tri.sideC)**2 > (tri.sideA)**2) ||
      ((tri.sideA)**2 + (tri.sideC)**2 > (tri.sideB)**2)) {
    result = true;
  }
  return result;
}

console.log("isEquilateral(triangle)",isEquilateral(triangle));
console.log("isIsosceles(triangle)",isIsosceles(triangle));
console.log("area(triangle)",area(triangle));
console.log("isObtuse(triangle)",isObtuse(triangle));

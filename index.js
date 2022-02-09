"use strict";

module.exports = {
  add,
  subtract,
  divide,
  multiply,
  areaOfTriangle,
  areaOfCircle,
  circumferenceOfCircle,
  volumeOfCylinder,
  volumeOfCone,
};

function add(a, b) {
  return Math.floor(a + b);
}
function subtract(a, b) {
  return Math.floor(a - b);
}
function multiply(a, b) {
  return Math.floor(a * b);
}
function divide() {
  return Math.floor(a / b);
}
function areaOfTriangle(b, h) {
  return Math.floor(1 / 2(b * h));
}
function areaOfCircle(r) {
  return Math.floor(3.142 * r * r);
}
function circumferenceOfCircle(r) {
  return Math.floor(2 * 3.142 * r);
}
function volumeOfCylinder(r, h) {
  return Math.floor(3.142 * r * r * h);
}
function volumeOfCone(r, h) {
  return Math.floor(1 / 3(3.142 * r * r * h));
}

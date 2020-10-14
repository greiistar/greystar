// jshint esversion: 6
function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
}
function randomMath(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
/*document.getElementById("text1").textContent = randomMath(10);
 */
function randomMathArray(max) {
  array1 = [];
  while (array1.length < max) {
    sum = randomMath(max);
    if (containsObject(sum, array1) == false) {
      array1.push(sum);
    }
  }
  return array1;
}

function randomImages(num) {
  list = randomMathArray(num);
  for (i = 0; i < list.length; i++) {
    imgend = i + 1;
    str1 = "img" + imgend;
    str2 = "night/" + list[i] + ".png";
    document.getElementById(str1).src = str2;
  }
}
window.onload = randomImages(9);

var theThing = document.querySelector("#thing");
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
let countL = 0;
let countU = 0;
let countR = 0;
let countD = 0;
const timer = document.getElementById("timer");
const timer2 = document.getElementById("timer2");
const timer3 = document.getElementById("timer3");
const timer4 = document.getElementById("timer4");
window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == "37") {
    countL += 1;
    timer.textContent = "L" + countL;
  }
  if (key.keyCode == "38") {
    countU += 1;
    timer2.textContent = "U" + countU;
  }
  if (key.keyCode == "39") {
    countR += 1;
    timer3.textContent = "R" + countR;
  }
  if (key.keyCode == "40") {
    countD += 1;
    timer4.textContent = "D" + countD;
  }
}
let speed = 10;
function moveThing() {
  theThing.style.left = countR * speed + -countL * speed + "px";
  theThing.style.top = countD * speed + -countU * speed + "px";
  /* if (Math.abs(currentPos) >= 600) {
    currentPos = -500;
  }*/

  requestAnimationFrame(moveThing);
}
moveThing();

///window.onload = randomImages(10);

/*
ETHAN NOTES:
while (array <10){
if (random number not in array){
add said number to array
}
}\
*/

/*
"img"+i
*/

/*
let arrayAverage = function(array) {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

let values = [31.9, 31.3, 42.4, 42.4, 60.8, 28.1];
console.log(arrayAverage(values)); //expect 39.48333..
*/

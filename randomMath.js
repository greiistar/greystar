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
    str2 = "gif1/" + list[i] + ".png";
    document.getElementById(str1).src = str2;
  }
}
window.onload = randomImages(9);
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

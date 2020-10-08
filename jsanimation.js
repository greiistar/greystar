var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
function animateCircle() {
  circle.x++;
  circle.size++;

  requestAnimationFrame(animateCircle);
}

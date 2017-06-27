var numCircles = 24;
var circleDiameter;
var circleRadius;

function setup() {
  $("#pattern").height(($(window).height()-20));
  $("#pattern").width($(".container").width());
  var screenWidth = $("#pattern").width();
  var screenHeight = $("#pattern").height();
  var canvas = createCanvas(screenWidth, screenHeight);
  canvas.parent("#pattern");
  circleDiameter = width/numCircles;
  circleRadius = circleDiameter/2;
}

function draw() {
  var isShifted = false;
  var y = height;
  var rVal = 94;
  var gVal = 105;
  var bVal = 115;
  //color(7, 190, 184)
  //color(94,105,115)
  while (y >= 0) {
    var x;
    if (isShifted) {x = circleRadius;} else {x = 0;}

    while (x <= width) {
      fill(color(rVal, gVal, bVal));
      stroke(color(rVal-10, gVal-10, bVal-10));
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }
    y = y - circleRadius;
    isShifted = !isShifted;
    rVal = rVal - 7.25;
    gVal = gVal + 3;
    bVal = bVal + 3;
  }
}

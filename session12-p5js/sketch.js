let x, y; //postion variable

const X_AXIS = 2; //gradient constant

let b1, b2;   //gradient variable

let direction = 1; // direction variable

let xspeed = 3; // Speed variable




function setup() {
  createCanvas(800, 400);

  b1 = color(76, 187, 23);
  b2 = color(230, 135, 142);
  // Starts in the middle
  x = width / 2;
  y = height / 2;

  frameRate(30);

  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  setGradient(0, 0, width / 2, height, b1, b2, 2);
  setGradient(width / 2, 0, width / 2, height, b2, b1, 2);

  // Draw a circle

  fill(230, 135, 142);
  ellipse(x, y, 300, 300);

  // Jiggling randomly on the horizontal axis
  y = y + random(-2, 2);
  // Moving at a constant speed
  x += xspeed * direction;

  // Bounce
  if (x > 650 || x < 150) {
    direction *= -1;
  }
}
// background gradient
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === X_AXIS) {
    // Left → Right
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

let cursorSize = 30;
let cursorImg;

function preload() {
  cursorImg = loadImage('IMAGES/pink.jpg');
}

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('position', 'fixed');
  c.style('top', '0');
  c.style('left', '0');
  c.style('z-index', '9999');
  c.style('pointer-events', 'none');

  noCursor();
}

function draw() {
  clear();
  imageMode(CORNER);
  image(cursorImg,  mouseX - cursorSize/2, mouseY - cursorSize/2, cursorSize, cursorSize);
}


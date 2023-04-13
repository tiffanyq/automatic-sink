const FRAME_RATE = 30;
const HAND_SIZE = 144;
const HAND_MOVEMENT_RADIUS = 160;
const HAND_OFFSET = 4;
const TAP_TIME_ON = 4;

let tapX;
let tapY;
let tap;

function preload() {
  tap = loadImage('sink.png');
}

function setup() {
  const cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.style('display', 'block');
  cnv.style('position', 'fixed');
  frameRate(FRAME_RATE);
  textSize(HAND_SIZE);
  describe('An automatic sink tap that sometimes has a blue water drop emoji flowing from it if the hands are in the right place to turn on the tap. Two hand emojis follow the cursor.');
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);
  image(tap, window.innerWidth/2 - 160, 60);
  text("🤚✋", mouseX, mouseY);
  renderWater();
}

// :~)
function renderWater() {
  if (shouldRenderWater()) {
  text("💧", window.innerWidth/2 - 10, 280);
  }
}

function shouldRenderWater() {
  let shouldRender = false;
  if (frameCount % FRAME_RATE * TAP_TIME_ON === 0) {
    tapX = random(0, window.innerWidth);
    tapY = random(0, window.innerHeight);
  }
  // check for hands near the spot that turns on the tap
  if (abs(mouseX-tapX) <= HAND_MOVEMENT_RADIUS &&
      abs(mouseY-tapY) <= HAND_MOVEMENT_RADIUS) {
        shouldRender = true;
      }
  return shouldRender;
}
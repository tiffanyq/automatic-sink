function setup() {
  const cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.style('display', 'block');
  cnv.style('position', 'fixed');
  frameRate(30);
  describe('Two hand emojis that follow the cursor');
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);
  textSize(144);
  text("🤚✋", mouseX, mouseY);
}
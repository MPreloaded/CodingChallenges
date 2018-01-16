/*
 * Starfield
 * Based on the CodingChallenge of Daniel Shiffman
 * Find him on YouTube --> TheCodingTrain
 * Seriously. He is awesome.
 */

let stars = [];
let speed = 25;
let starCount;

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);

  if (window.innerWidth >= window.innerHeight) {
    starcount = width / 3;
  } else {
    starcount = height / 3;
  }

  for (let i = 0; i < 300; i++)
    stars.push(new Star());
}

function draw() {
  push();
  background(0);
  translate(width / 2, height / 2);
  speed = map(mouseX, 0, width, 0, 75);
  // translate(mouseX, mouseY);

  fill(255);
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    if (stars[i].circle) {
      stars[i].showCircle();
    }
  }

  stroke(255);
  for (let i = 0; i < stars.length; i++)
    stars[i].showLine();

  pop();
}

/*
 * Starfield
 * Based on the CodingChallenge of Daniel Shiffman
 * Find him on YouTube --> TheCodingTrain
 * Seriously. He is awesome.
 */

let stars = [];
let speed = 25;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 300; i++)
    stars.push(new Star());
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  speed = map(mouseX, 0, width, 0, 25);
  // translate(mouseX, mouseY);

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
let angle = 0;
let cubes = [];

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  cubes.push(new Cube(0, 0, 0, 200));
}

function draw() {
  background(50);
  stroke(255);
  fill(255, 255, 255);
  // directionalLight(0, 0, 0, createVector(1, 1, 0));
  // ambientMaterial(250);

  rotateX(angle);
  rotateY(angle * 0.4);
  rotateZ(angle * 0.1);

  for (let i = 0; i < cubes.length; i++) {
    cubes[i].show();
  }

  angle += 0.001;
}

function mousePressed() {
  let newCubes = [];
  for (let i = 0; i < cubes.length; i++) {
    newCubes = concat(newCubes, cubes[i].seperate());
  }
  cubes = newCubes;
}

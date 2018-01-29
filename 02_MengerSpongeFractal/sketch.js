let angle = Math.PI / 4;
let cubes = [];

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  cubes.push(new Cube(0, 0, 0, 200));

  fill(255, 255, 255);
  noStroke();
  ambientLight(150);
  directionalLight(255, 255, 255, createVector(-1, -1, -1));
}

function draw() {
  background(50);
  // ambientMaterial(130);

  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);

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

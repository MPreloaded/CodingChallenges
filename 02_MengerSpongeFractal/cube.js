class Cube {

  constructor(x, y, z, r) {
    this.pos = createVector(x, y, z);
    this.r = r;
  }

  seperate() {
    let parts = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        for (let k = -1; k < 2; k++) {
          let sum = abs(i) + abs(j) + abs(k);
          if (sum > 1) {
            let newR = this.r / 3;
            parts.push(new Cube(this.pos.x + i * newR,
              this.pos.y + j * newR,
              this.pos.z + k * newR,
              newR));
          }
        }
      }
    }

    return parts;
  }

  show() {
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.r, this.r, this.r);
    translate(-this.pos.x, -this.pos.y, -this.pos.z);
  }
}

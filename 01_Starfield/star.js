class Star {
  constructor() {
    this.x;
    this.y;
    this.z;
    this.previous_z;
    this.renew();
    this.circle = false;
  }

  renew() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
  }

  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.renew();
      this.previous_z = this.z;
    }

    if (speed < 20) {
      this.circle = true;
    } else if (speed > 20) {
      this.circle = false;
    }
  }

  showCircle() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 6, 0);
    ellipse(sx, sy, r);
  }

  showLine() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let px = map(this.x / this.previous_z, 0, 1, 0, width);
    let py = map(this.y / this.previous_z, 0, 1, 0, height);

    line(px, py, sx, sy);

    this.previous_z = this.z;
  }
}

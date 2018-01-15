class Star {
  constructor() {
    this.x = random(-(width / 2), (width / 2));
    this.y = random(-(height / 2), (height / 2));
    this.z = random(0, width);
  }

  renew() {
    this.x = random(-(width / 2), (width / 2));
    this.y = random(-(height / 2), (height / 2));
    this.z = width;
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1)
      this.renew();
  }

  show() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);

    fill(255);
    noStroke();
    ellipse(sx, sy, r);
  }
}
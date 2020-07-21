function setup() {
  createCanvas(400, 600);
  background(0);
  stroke(255);
  strokeWeight(2);
  let start = 0;
  let h;
  fill(0);
  for(let y = 100; y <= height - 40; y += 8) {
    beginShape();
    for(let x = -1; x < width + 2; x++) {
      if(x < width / 4 || x > 3 * width / 4) {
        h = 5;
      } else {
          if(x < width/2) {
          h = map(x, width/4, width/2, 5, 50);
          } else {
          h = map(x, width/2, 3*width/4, 50, 5);
          }
        }
      vertex(x, y - h * noise(start));
      start += 0.038;
    }
    vertex(width + 1, height + 1);
    vertex(-1, height + 1);
    endShape(CLOSE);
  }
}
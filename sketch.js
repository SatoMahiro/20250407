let circles = [];

function setup() {
  // 產生一個全視窗的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定畫布顏色為米色
  background("#fdf0d5");

  // 生成40個圓
  for (let i = 0; i < 40; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255))
    };
    circles.push(circle);
  }
}

function draw() {
  // 清除背景
  background("#fdf0d5");

  // 根據滑鼠位置調整圓的大小
  let sizeOffset = map(mouseX, 0, width, 20, 80);

  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let size = 10;
let color = "black";

function draw(x, y) {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2); // Outer circle
  ctx.moveTo(110, 75);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

draw(100, 200);
drawLine(300, 300, 300, 500);

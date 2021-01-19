const canvas = document.getElementById("canvas");
const increaseFont = document.getElementById("increase");
const decreaseFont = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const brush = document.getElementById("brush");
const eraser = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
const ctx = canvas.getContext("2d");
let size = 5;
let color = "black";
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;

  console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    draw(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function draw(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

//btn event listeners
colorEl.addEventListener("change", (e) => (color = e.target.value));
clearBtn.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));

increaseFont.addEventListener("click", () => {
  size += 2;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

decreaseFont.addEventListener("click", () => {
  size -= 2;
  if (size < 2) {
    size = 2;
  }
  updateSizeOnScreen();
});



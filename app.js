const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 10;

function draw(x, y) {
    ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
}
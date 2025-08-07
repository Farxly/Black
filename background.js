const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    vx: -0.3 + Math.random() * 0.6,
    vy: 0.6 + Math.random() * 1.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();
    s.x += s.vx;
    s.y += s.vy;
    if (s.y > canvas.height) {
      s.x = Math.random() * canvas.width;
      s.y = 0;
    }
  }
  requestAnimationFrame(drawStars);
}
drawStars();

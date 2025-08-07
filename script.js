function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Typing + Deleting Effect
const text = "Farxly";
let index = 0;
let isDeleting = false;

function typeLoop() {
  const typedText = document.getElementById("typed-text");

  if (!isDeleting) {
    typedText.textContent = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 2000); // Tunggu 2 detik sebelum hapus
      return;
    }
  } else {
    typedText.textContent = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeLoop, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", () => {
  typeLoop();

  // Musik hanya diputar saat user klik canvas
  const audio = document.getElementById('bg-music');
  const canvas = document.getElementById('bg');
  audio.volume = 0.4;

  canvas.addEventListener('click', () => {
    audio.play().catch(err => console.log("Gagal memutar musik:", err));
  });
});

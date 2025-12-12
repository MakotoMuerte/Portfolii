AOS.init({
    duration: 800,
    once: true
  });
  
  // Кнопка "Наверх"
  const scrollBtn = document.getElementById("scrollTopBtn");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  
  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Увеличение изображения при клике
document.querySelectorAll('.gallery img, .certificate-gallery img').forEach(img => {
  img.addEventListener('click', () => {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImg");
      modal.style.display = "block";
      modalImg.src = img.src;
  });
});

document.getElementById("imageModal").addEventListener('click', () => {
  document.getElementById("imageModal").style.display = "none";
});
// Терминал-печать текста
const terminalText = document.getElementById('terminalText');
const lines = [
  "> user@ironshift:~$ show contacts",
  "",
  "📧 Email:    <a href='mailto:Gyakustsu@yandex.ru'>Gyakustsu@yandex.ru</a>",
  "🔗 Telegram: <a href='https://t.me/MakotoMurasaki' target='_blank'>t.me/MakotoMurasaki</a>",
  "🌐 VK:       <a href='https://vk.com/matsumotokatsu' target='_blank'>vk.com/matsumotokatsu</a>",
  "",
  "> "
];


let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
      const line = lines[lineIndex];
      const currentChar = line.slice(0, charIndex + 1);

      terminalText.innerHTML = lines
          .slice(0, lineIndex)
          .join("\n") + "\n" + currentChar;

      charIndex++;
      if (charIndex < line.length) {
          setTimeout(typeLine, 25); // Скорость набора символов
      } else {
          lineIndex++;
          charIndex = 0;
          setTimeout(typeLine, 150); // Пауза между строками
      }
  }
}


typeLine();

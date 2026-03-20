const landing = document.getElementById("landing");
const videoPage = document.getElementById("videoPage");
const music = document.getElementById("bgMusic");

landing.addEventListener("click", () => {
  // 🔥 Musik langsung nyala saat klik
  music.currentTime = 0;
  music.volume = 0.7;
  music.play().catch(() => {});

  // 🎬 efek fade keluar
  landing.style.opacity = "0";

  // ⏱ setelah fade, pindah ke video
  setTimeout(() => {
    landing.classList.remove("active");
    videoPage.classList.add("active");
  }, 800);
});
const music = document.getElementById("bgMusic");

if (music) {
  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) music.currentTime = savedTime;
  music.play().catch(() => {});
}

setInterval(() => {
  if (music) localStorage.setItem("musicTime", music.currentTime);
}, 1000);

function enterGallery() {
  window.location.href = "gallery.html";
}

function goFinal() {
  window.location.href = "final.html";
}

/* GALLERY SWIPE */
const track = document.querySelector(".gallery-track");
if (track) {
  let index = 0;
  let startX = 0;
  const slides = document.querySelectorAll(".gallery-slide");

  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50 && index < slides.length - 1) index++;
    if (diff < -50 && index > 0) index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  });
}

const btn = document.getElementById("openBtn");
const iframe = document.getElementById("dmVideo");

btn.addEventListener("click", () => {

  // Lance animation
  btn.classList.add("open");

  // Charge la nouvelle vidéo avec autoplay + son
  iframe.src = "https://geo.dailymotion.com/player.html?video=x8m3nqo&autoplay=1&mute=0";

});
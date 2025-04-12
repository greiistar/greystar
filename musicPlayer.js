document.addEventListener("DOMContentLoaded", () => {
  // Get the track path from the <script> tag
  const scriptTag = document.getElementById("music-config");
  const trackPath = scriptTag?.dataset.track;

  if (!trackPath) {
    console.warn("No track path provided.");
    return;
  }

  const bgm = new Audio(trackPath);
  bgm.autoplay = true;
  bgm.loop = true;
  bgm.load();

  const cover = document.getElementById("cover");
  if (!cover) return;

  cover.addEventListener("click", function () {
    this.style.opacity = "0";
    setTimeout(() => {
      this.style.display = "none";
    }, 1300);
    bgm.play();
  });
});
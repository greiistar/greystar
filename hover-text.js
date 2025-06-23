// OPTIONAL: Class-based sound map (only if you prefer using class names)
const soundMap = {
  "one-hover": ["sound/one-hover.mp3"],
  "two-hover": ["sound/two-hover.mp3"],
  "thr-hover": ["sound/thr-hover.mp3"],
  "fou-hover": ["sound/fou-hover.mp3"],
  "fiv-hover": ["sound/fiv-hover.mp3"],
  "six-hover": ["sound/six-hover.mp3"],
  "reg-hover": ["sound/reg-hover.mp3"],
  "guestbook-hover": ["sound/guestbook-hover.mp3"],
  "back-hover": ["sound/back-hover.mp3"],
  "wrath-hover:": ["sound/wrath-hover.mp3"]
};

const hoverTargets = document.querySelectorAll(".highlight-on-hover");

hoverTargets.forEach(hoverTarget => {
  let soundPlayed = false;
  let audio = null;

  // 1️⃣ Check for a data-sound attribute
  const dataSound = hoverTarget.dataset.sound;

  if (dataSound) {
    audio = new Audio(dataSound);
  } else {
    // 2️⃣ If not found, fall back to class-based mapping
    for (let cls of hoverTarget.classList) {
      if (soundMap[cls]) {
        const sounds = soundMap[cls];
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        audio = new Audio(randomSound);
        break;
      }
    }
  }

  // 🎧 Desktop hover
  hoverTarget.addEventListener("mouseenter", () => {
    hoverTarget.classList.remove("no-hover");
    hoverTarget.classList.add("desktop-highlighted"); // ⬅️ New custom class

    if (audio && !soundPlayed) {
      audio.currentTime = 0;
      audio.play();
      /*soundPlayed = true;*/
    }
  });

  hoverTarget.addEventListener("mouseleave", () => {
    hoverTarget.classList.add("no-hover");
    hoverTarget.classList.remove("desktop-highlighted"); // ✅ Add this line
    /*soundPlayed = false;*/
  });
});

// 📱 Touchmove for mobile hover simulation
let currentMobileTarget = null;

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);

  if (elementAtPoint && elementAtPoint.classList.contains("highlight-on-hover")) {
    if (currentMobileTarget !== elementAtPoint) {
      // New element hovered
      currentMobileTarget?.classList.remove("mobile-highlighted");
      currentMobileTarget?.classList.add("no-hover");

      currentMobileTarget = elementAtPoint;
      currentMobileTarget.classList.add("mobile-highlighted");
      currentMobileTarget.classList.remove("no-hover");

      const dataSound = currentMobileTarget.dataset.sound;
      let audio = null;

      if (dataSound) {
        audio = new Audio(dataSound);
      } else {
        for (let cls of currentMobileTarget.classList) {
          if (soundMap[cls]) {
            const sounds = soundMap[cls];
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
            audio = new Audio(randomSound);
            break;
          }
        }
      }

      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  } else {
    // If finger isn't on a target
    if (currentMobileTarget) {
      currentMobileTarget.classList.remove("mobile-highlighted");
      currentMobileTarget.classList.add("no-hover");
      currentMobileTarget = null;
    }
  }
});

// 📱 Touchend resets hover on mobile
document.addEventListener('touchend', () => {
  hoverTargets.forEach(hoverTarget => {
    hoverTarget.classList.remove('mobile-highlighted');
    hoverTarget.classList.add('no-hover');
    currentMobileTarget = null;
  });
});
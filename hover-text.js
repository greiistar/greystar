// OPTIONAL: Class-based sound map (only if you prefer using class names)
const soundMap = {
  "one-hover": ["sound/one-hover.mp3","sound/one-hover-2.mp3","sound/one-hover-3.mp3"],
  "two-hover": ["sound/two-hover.mp3"],
  "thr-hover": ["sound/thr-hover.mp3"],
  "fou-hover": ["sound/fou-hover.mp3"],
  "fiv-hover": ["sound/fiv-hover.mp3"],
  "six-hover": ["sound/six-hover.mp3"],
  "reg-hover": ["sound/reg-hover.mp3"],
  "guestbook-hover": ["sound/guestbook-hover.mp3"],
  "back-hover": ["sound/back-hover.mp3"]
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
  hoverTarget.addEventListener("mouseover", () => {
    hoverTarget.classList.remove("no-hover");
    if (audio && !soundPlayed) {
      audio.currentTime = 0;
      audio.play();
      soundPlayed = true;
    }
  });

  hoverTarget.addEventListener("mouseout", () => {
    hoverTarget.classList.add("no-hover");
    soundPlayed = false;
  });
});

// 📱 Touchmove for mobile hover simulation
document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);

  hoverTargets.forEach(hoverTarget => {
    const isTarget = hoverTarget === elementAtPoint;

    if (isTarget) {
      hoverTarget.classList.add('mobile-highlighted');
      hoverTarget.classList.remove('no-hover');

      const dataSound = hoverTarget.dataset.sound;
      let audio = null;

      if (dataSound) {
        audio = new Audio(dataSound);
      } else {
        for (let cls of hoverTarget.classList) {
          if (soundMap[cls]) {
            audio = new Audio(soundMap[cls]);
            break;
          }
        }
      }

      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }

    } else {
      hoverTarget.classList.remove('mobile-highlighted');
      hoverTarget.classList.add('no-hover');
    }
  });
});

// 📱 Touchend resets hover on mobile
document.addEventListener('touchend', () => {
  hoverTargets.forEach(hoverTarget => {
    hoverTarget.classList.remove('mobile-highlighted');
    hoverTarget.classList.add('no-hover');
  });
});
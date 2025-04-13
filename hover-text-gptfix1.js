const soundMap = {
  "one-hover": ["sound/one-hover.mp3"],
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

// Desktop interaction
hoverTargets.forEach(hoverTarget => {
  let soundPlayed = false;
  let audio = null;

  // Assign correct audio source
  const dataSound = hoverTarget.dataset.sound;
  if (dataSound) {
    audio = new Audio(dataSound);
  } else {
    for (let cls of hoverTarget.classList) {
      if (soundMap[cls]) {
        const sounds = soundMap[cls];
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        audio = new Audio(randomSound);
        break;
      }
    }
  }

  // pointerenter replaces mouseover
  hoverTarget.addEventListener("pointerenter", () => {
    hoverTarget.classList.remove("no-hover");
    if (audio && !soundPlayed) {
      audio.currentTime = 0;
      audio.play();
      soundPlayed = true;
    }
  });

  // pointerleave replaces mouseout
  hoverTarget.addEventListener("pointerleave", () => {
    hoverTarget.classList.add("no-hover");
    soundPlayed = false;
  });
});

// Mobile interaction
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

// On touchend, clear highlight
document.addEventListener('touchend', () => {
  if (currentMobileTarget) {
    currentMobileTarget.classList.remove("mobile-highlighted");
    currentMobileTarget.classList.add("no-hover");
    currentMobileTarget = null;
  }
});
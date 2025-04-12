const hoverTargets = document.querySelectorAll('.highlight-on-hover');

// For desktop hover
hoverTargets.forEach(hoverTarget => {
  hoverTarget.addEventListener("mouseover", () => {
    hoverTarget.classList.remove("no-hover"); // Fade-in quickly when hovering
  });

  hoverTarget.addEventListener("mouseout", () => {
    hoverTarget.classList.add("no-hover"); // Fade-out slowly when leaving
  });
});

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);

  hoverTargets.forEach(hoverTarget => {
    if (hoverTarget === elementAtPoint) {
      hoverTarget.classList.add('mobile-highlighted');
      hoverTarget.classList.remove('no-hover');
    } else {
      hoverTarget.classList.remove('mobile-highlighted');
      hoverTarget.classList.add('no-hover');
    }
  });
});

document.addEventListener('touchend', () => {
  hoverTargets.forEach(hoverTarget => {
  hoverTarget.classList.remove('mobile-highlighted')
  hoverTarget.classList.add('no-hover');
  });
});
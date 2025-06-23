//chatgpt:disable scroll to refresh
  let preventPullToRefresh = false;
  let lastY = 0;

  window.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    lastY = e.touches[0].clientY;
    preventPullToRefresh = window.scrollY === 0;
  });

  window.addEventListener('touchmove', function (e) {
    const currentY = e.touches[0].clientY;
    const isPullingDown = currentY > lastY;

    if (preventPullToRefresh && isPullingDown) {
      e.preventDefault();
    }
  }, { passive: false });

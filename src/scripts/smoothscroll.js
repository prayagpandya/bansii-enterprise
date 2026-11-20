// smoothScroll.js
export const smoothScroll = () => {
  let targetScrollY = window.scrollY;
  let currentScrollY = window.scrollY;

  const lerp = 0.1; // The smoothing factor, between 0 and 1

  const updateScroll = () => {
    const distance = targetScrollY - currentScrollY;
    currentScrollY += distance * lerp;

    window.scrollTo(0, currentScrollY);

    if (Math.abs(distance) > 0.5) {
      requestAnimationFrame(updateScroll);
    }
  };

  const onScroll = () => {
    targetScrollY = window.scrollY;
  };

  window.addEventListener("scroll", onScroll);

  updateScroll();

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
};

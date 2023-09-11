export default function getScrollAnimation() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 1 } = {}) => ({
      y: 0,
      opacity: 1.5,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

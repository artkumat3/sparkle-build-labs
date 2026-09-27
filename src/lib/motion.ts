// Shared, mutable motion state read by the 3D canvas every frame (no React re-renders).
export const motionState = {
  scrollVelocity: 0,
  pointer: { x: 0, y: 0 },
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

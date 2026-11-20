import type Lenis from "lenis";

// Shared handle so UI (e.g. the mobile menu) can pause smooth scrolling.
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};
export const getLenis = () => instance;

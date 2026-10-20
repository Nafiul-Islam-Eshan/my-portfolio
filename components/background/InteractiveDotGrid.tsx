"use client";

import { useEffect, useRef } from "react";
import "./InteractiveDotGrid.css";

const GRID_SIZE = 30;
const EFFECT_RADIUS = 150;
const MAX_SCALE = 2.4;
const MAX_DISPLACEMENT = 8;

type Dot = {
  element: HTMLSpanElement;
  x: number;
  y: number;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fixed, non-interactive dot grid behind the whole page. Dots swell and drift
 * slightly around the pointer. Skipped entirely for reduced-motion users and
 * on touch devices, where there is no cursor to react to.
 */
export default function InteractiveDotGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const canAnimate =
      !prefersReducedMotion() &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const resetDot = ({ element }: Dot) => {
      element.style.transform = "";
      element.style.opacity = "";
    };

    const createDots = () => {
      grid.replaceChildren();

      const columns = Math.ceil(window.innerWidth / GRID_SIZE) + 1;
      const rows = Math.ceil(window.innerHeight / GRID_SIZE) + 1;
      const fragment = document.createDocumentFragment();
      const dots: Dot[] = [];

      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const dot = document.createElement("span");
          dot.className = "dot";

          const x = column * GRID_SIZE;
          const y = row * GRID_SIZE;
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;

          fragment.appendChild(dot);
          dots.push({ element: dot, x, y });
        }
      }

      grid.appendChild(fragment);
      dotsRef.current = dots;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canAnimate) return;

      const { clientX, clientY } = event;

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        for (const dot of dotsRef.current) {
          const dx = clientX - dot.x;
          const dy = clientY - dot.y;
          const distance = Math.hypot(dx, dy);

          if (distance > EFFECT_RADIUS) {
            resetDot(dot);
            continue;
          }

          const influence = 1 - distance / EFFECT_RADIUS;
          const scale = 1 + influence * (MAX_SCALE - 1);
          const displacement = influence * MAX_DISPLACEMENT;
          const angle = Math.atan2(dy, dx);

          dot.element.style.transform = `translate(${
            Math.cos(angle) * displacement
          }px, ${Math.sin(angle) * displacement}px) scale(${scale})`;
          dot.element.style.opacity = `${0.6 + influence * 0.8}`;
        }
      });
    };

    const handleMouseLeave = () => dotsRef.current.forEach(resetDot);

    createDots();

    window.addEventListener("resize", createDots);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", createDots);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <div ref={gridRef} className="interactive-dot-grid" aria-hidden="true" />;
}

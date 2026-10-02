"use client";

import { useEffect, useRef } from "react";
import "./InteractiveDotGrid.css";

const GRID_SIZE = 28;
const EFFECT_RADIUS = 160;
const MAX_SCALE = 2.8;
const MAX_DISPLACEMENT = 10;

type Dot = {
  element: HTMLSpanElement;
  x: number;
  y: number;
};

export default function InteractiveDotGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const createDots = () => {
      grid.innerHTML = "";

      const columns = Math.ceil(window.innerWidth / GRID_SIZE) + 1;
      const rows = Math.ceil(window.innerHeight / GRID_SIZE) + 1;

      const dots: Dot[] = [];

      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const dot = document.createElement("span");

          dot.className = "dot";

          const x = column * GRID_SIZE;
          const y = row * GRID_SIZE;

          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;

          grid.appendChild(dot);

          dots.push({
            element: dot,
            x,
            y,
          });
        }
      }

      dotsRef.current = dots;
    };

    createDots();

    const handleResize = () => {
      createDots();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        dotsRef.current.forEach(({ element, x, y }) => {
          const dx = mouseX - x;
          const dy = mouseY - y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > EFFECT_RADIUS) {
            element.style.transform = "translate(0, 0) scale(1)";
            element.style.opacity = "1";
            return;
          }

          const influence = 1 - distance / EFFECT_RADIUS;

          const scale =
            1 + influence * (MAX_SCALE - 1);

          const displacement =
            influence * MAX_DISPLACEMENT;

          const angle = Math.atan2(dy, dx);

          const moveX = Math.cos(angle) * displacement;
          const moveY = Math.sin(angle) * displacement;

          element.style.transform = `
            translate(${moveX}px, ${moveY}px)
            scale(${scale})
          `;

          element.style.opacity = `${1 + influence * 0.5}`;
        });
      });
    };

    const handleMouseLeave = () => {
      dotsRef.current.forEach(({ element }) => {
        element.style.transform = "translate(0, 0) scale(1)";
        element.style.opacity = "1";
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="interactive-dot-grid"
      aria-hidden="true"
    />
  );
}
"use client";

import { Button } from "@heroui/react";

export default function BackToTop() {
const handleBackToTop = () => {
  const startPosition = window.scrollY;
  const startTime = performance.now();
  const duration = 500;

  const scroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out animation
    const easeOut = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(
      0,
      startPosition * (1 - easeOut)
    );

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

  return (
    <Button
      onPress={handleBackToTop}
      aria-label="Back to top"
      className="fill-none border-3 border-teal-500"
    >
      Back to Top
    </Button>
  );
}
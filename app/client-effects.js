"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".benefit-grid article,.steps li,.price-card,.guide-image,.note-section"
    );
    items.forEach((item) => item.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}

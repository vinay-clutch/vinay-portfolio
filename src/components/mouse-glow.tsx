// src/components/mouse-glow.tsx
"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const size = 280; // glow size in px

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="h-[280px] w-[280px] rounded-full blur-3xl opacity-40 md:opacity-60 transition-transform duration-150 ease-out bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.75),_transparent_70%)]"
        style={{
          transform: `translate3d(${pos.x - size / 2}px, ${pos.y - size / 2}px, 0)`,
        }}
      />
    </div>
  );
}

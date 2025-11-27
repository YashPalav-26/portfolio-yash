import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

function lerp(start: number, end: number, amt: number) {
  return start + (end - start) * amt;
}

function isFinePointer() {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

const interactiveSelector = "a, button, [role='button'], input, textarea, select, .interactive";

export default function CursorAura() {
  const { theme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ghostsRef = useRef<HTMLDivElement[]>([]);

  const target = useRef({ x: 0, y: 0 });
  const posDot = useRef({ x: 0, y: 0 });
  const posAura = useRef({ x: 0, y: 0 });
  const speedDot = 0.4;
  const speedAura = 0.14;
  const rafId = useRef<number | null>(null);
  const downRef = useRef(false);
  const hoverRef = useRef(false);
  const angleRef = useRef(0);
  const historyRef = useRef<{ x: number; y: number }[]>([]);
  const HISTORY_LEN = 18; // positions kept for ghost trail
  const GHOSTS = 8; // number of ghost dots

  useEffect(() => {
    if (!isFinePointer()) return;
    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;


      const targetEl = e.target as HTMLElement;
      hoverRef.current = !!targetEl && !!targetEl.closest(interactiveSelector);
    };

    const handleDown = () => {
      downRef.current = true;
    };
    const handleUp = () => {
      downRef.current = false;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown, { passive: true });
    window.addEventListener("mouseup", handleUp, { passive: true });

    const loop = () => {
      const prevDotX = posDot.current.x;
      const prevDotY = posDot.current.y;
      const prevAuraX = posAura.current.x;
      const prevAuraY = posAura.current.y;

      posDot.current.x = lerp(posDot.current.x, target.current.x, speedDot);
      posDot.current.y = lerp(posDot.current.y, target.current.y, speedDot);
      posAura.current.x = lerp(posAura.current.x, target.current.x, speedAura);
      posAura.current.y = lerp(posAura.current.y, target.current.y, speedAura);

      const hasMoved =
        Math.abs(posDot.current.x - prevDotX) > 0.1 ||
        Math.abs(posDot.current.y - prevDotY) > 0.1 ||
        Math.abs(posAura.current.x - prevAuraX) > 0.1 ||
        Math.abs(posAura.current.y - prevAuraY) > 0.1;

      if (!hasMoved && !hoverRef.current && !downRef.current) {

      }

      historyRef.current.push({ x: posAura.current.x, y: posAura.current.y });
      if (historyRef.current.length > HISTORY_LEN) historyRef.current.shift();

      angleRef.current = (angleRef.current + (hoverRef.current ? 1.2 : 0.6)) % 360;

      if (dotRef.current) {
        const scale = downRef.current ? 0.85 : hoverRef.current ? 1.1 : 1;
        dotRef.current.style.transform = `translate3d(${posDot.current.x}px, ${posDot.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      if (auraRef.current) {
        const scale = downRef.current ? 0.95 : hoverRef.current ? 1.08 : 1;
        const opacity = theme === "light" ? (hoverRef.current ? "0.7" : "0.5") : (hoverRef.current ? "0.9" : "0.65");
        const intensity = theme === "light" ? "0.35" : "0.40";

        let gradientColor;
        if (theme === "light") {
          gradientColor = hoverRef.current
            ? `rgba(255, 164, 164, ${intensity})`
            : `rgba(11, 102, 106, ${intensity})`;
        } else {
          const color = hoverRef.current ? "var(--secondary)" : "var(--primary)";
          gradientColor = `hsl(${color}/${intensity})`;
        }

        auraRef.current.style.transform = `translate3d(${posAura.current.x}px, ${posAura.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        auraRef.current.style.opacity = opacity;
        auraRef.current.style.background = `radial-gradient(35% 35% at 50% 50%, ${gradientColor} 0%, transparent 70%)`;
      }
      if (ringRef.current) {
        const scale = downRef.current ? 0.9 : hoverRef.current ? 1.05 : 1;
        const borderOpacity = theme === "light" ? "0.5" : "0.6";
        const borderColor = theme === "light" ? `rgba(11, 102, 106, ${borderOpacity})` : `hsl(var(--primary)/${borderOpacity})`;
        ringRef.current.style.transform = `translate3d(${posAura.current.x}px, ${posAura.current.y}px, 0) translate(-50%, -50%) rotate(${angleRef.current}deg) scale(${scale})`;
        ringRef.current.style.borderColor = borderColor;
      }

      for (let i = 0; i < GHOSTS; i++) {
        const el = ghostsRef.current[i];
        if (!el) continue;
        const idx = historyRef.current.length - 1 - (i + 1) * 3;
        const p = historyRef.current[Math.max(0, Math.min(historyRef.current.length - 1, idx))] || posAura.current;
        const size = 7 - i;
        const opacity = 0.16 - i * 0.03;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.opacity = `${opacity}`;
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = window.requestAnimationFrame(loop);
    };
    rafId.current = window.requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [theme]);

  if (!enabled) return null;

  const isLight = theme === "light";
  const lightTeal = "rgba(11, 102, 106, 0.35)";
  const lightTealRing = "rgba(11, 102, 106, 0.5)";

  return (
    <>
      <div
        ref={auraRef}
        className="pointer-events-none fixed z-50 h-14 w-14 rounded-full"
        style={{
          background: isLight
            ? `radial-gradient(35% 35% at 50% 50%, ${lightTeal} 0%, transparent 70%)`
            : "radial-gradient(35% 35% at 50% 50%, hsl(var(--primary)/0.40) 0%, transparent 70%)",
          mixBlendMode: isLight ? "multiply" : "screen",
          transition: "opacity 120ms ease",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          borderWidth: "1px",
          borderColor: isLight ? lightTealRing : undefined,
          mixBlendMode: isLight ? "multiply" : "screen",
          willChange: "transform",
        }}
      />
      {Array.from({ length: GHOSTS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) ghostsRef.current[i] = el;
          }}
          className="pointer-events-none fixed z-50 rounded-full"
          style={{
            opacity: 0.08,
            background: isLight ? "rgba(11, 102, 106, 0.8)" : "hsl(var(--primary))",
            boxShadow: isLight ? "0 0 6px rgba(11, 102, 106, 0.6)" : "0 0 6px hsl(var(--primary)/0.6)",
            willChange: "transform",
          }}
        />
      ))}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-50 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: isLight ? "rgba(11, 102, 106, 1)" : "hsl(var(--primary))",
          boxShadow: isLight ? "0 0 10px rgba(11, 102, 106, 0.9)" : "0 0 10px hsl(var(--primary)/0.9)",
          willChange: "transform",
        }}
      />
    </>
  );
}

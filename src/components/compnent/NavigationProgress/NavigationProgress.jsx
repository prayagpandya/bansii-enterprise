"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState("idle"); // "idle" | "loading" | "completing" | "fading"
  const [progress, setProgress] = useState(0);

  const trickleTimerRef = useRef(null);
  const completeTimerRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);
  const rafRef = useRef(0);
  const prevPathnameRef = useRef(pathname);
  const phaseRef = useRef("idle");

  const updatePhase = useCallback((nextPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }, []);

  const clearTimers = useCallback(() => {
    if (trickleTimerRef.current) {
      clearInterval(trickleTimerRef.current);
      trickleTimerRef.current = null;
    }
    if (completeTimerRef.current) {
      clearTimeout(completeTimerRef.current);
      completeTimerRef.current = null;
    }
    if (fadeTimerRef.current) {
      clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }, []);

  const finishNavigation = useCallback(() => {
    if (phaseRef.current === "idle") return;
    clearTimers();
    updatePhase("completing");
    setProgress(100);

    completeTimerRef.current = setTimeout(() => {
      updatePhase("fading");
      fadeTimerRef.current = setTimeout(() => {
        updatePhase("idle");
        setProgress(0);
      }, 280);
    }, 180);
  }, [clearTimers, updatePhase]);

  const startNavigation = useCallback(() => {
    clearTimers();
    updatePhase("loading");
    setProgress(0);

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        setProgress(22);
      });
    });

    trickleTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) return prev;
        return prev + (92 - prev) * 0.22;
      });
    }, 220);

    safetyTimerRef.current = setTimeout(() => {
      finishNavigation();
    }, 10000);
  }, [clearTimers, finishNavigation, updatePhase]);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      finishNavigation();
    }
  }, [pathname, finishNavigation]);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target?.closest?.("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      try {
        const targetUrl = new URL(anchor.href, window.location.href);
        if (targetUrl.origin !== window.location.origin) return;
        const currentTarget =
          window.location.pathname + window.location.search;
        const nextTarget = targetUrl.pathname + targetUrl.search;
        if (nextTarget === currentTarget) return;

        startNavigation();
      } catch {
        // Ignore malformed href values cleanly.
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      clearTimers();
    };
  }, [startNavigation, clearTimers]);

  if (phase === "idle") return null;

  const isFading = phase === "fading";
  const scaleX = Math.max(0, Math.min(1, progress / 100));

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-[120] h-[3px] pointer-events-none bg-transparent transition-opacity duration-300 ease-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="h-full w-full origin-left bg-gradient-to-r from-[#0E2E71] via-[#0d9cd4] to-[#38bdf8] shadow-[0_0_8px_rgba(13,156,212,0.85)] transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: `scaleX(${scaleX})` }}
      />
    </div>
  );
}

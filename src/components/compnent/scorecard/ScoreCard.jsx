"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

const METRIC_REGEX = /^([^0-9]*)([\d,.]+)(.*)$/;

function parseMetric(rawValue) {
  const str = String(rawValue ?? "");
  const match = str.match(METRIC_REGEX);
  if (!match) {
    return { raw: str, numeric: false };
  }

  const [, prefix, numberToken, suffix] = match;
  const normalized = numberToken.replace(/,/g, "");
  const target = Number.parseFloat(normalized);
  if (!Number.isFinite(target)) {
    return { raw: str, numeric: false };
  }

  const decimalMatch = normalized.match(/\.(\d+)/);
  return {
    raw: str,
    numeric: true,
    prefix,
    target,
    suffix,
    decimals: decimalMatch ? decimalMatch[1].length : 0,
    useGrouping: numberToken.includes(","),
  };
}

function formatMetric(parsed, progress) {
  if (!parsed.numeric) return parsed.raw;
  if (progress >= 1) return parsed.raw;

  const current = parsed.target * progress;
  const formattedNumber = parsed.useGrouping
    ? current.toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      })
    : parsed.decimals > 0
      ? current.toFixed(parsed.decimals)
      : String(Math.round(current));

  return `${parsed.prefix}${formattedNumber}${parsed.suffix}`;
}

const ANIMATION_DURATION_MS = 1600;

const ScoreCard = ({
  title = "About People, Places and Planet",
  data = [],
  ClassCustom = "",
}) => {
  const sectionRef = useRef(null);
  const parsedMetrics = useMemo(
    () => data.map((item) => parseMetric(item.value)),
    [data]
  );
  const [status, setStatus] = useState("idle");
  const [displayValues, setDisplayValues] = useState(() =>
    parsedMetrics.map((metric) => formatMetric(metric, 0))
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || status !== "idle") return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion) {
      setDisplayValues(parsedMetrics.map((metric) => metric.raw));
      setStatus("done");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStatus("animating");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [status, parsedMetrics]);

  useEffect(() => {
    if (status !== "animating") return;

    let rafId = 0;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const linearProgress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);

      setDisplayValues(
        parsedMetrics.map((metric) => formatMetric(metric, easedProgress))
      );

      if (linearProgress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setStatus("done");
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [status, parsedMetrics]);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#0C2F73] py-14 md:py-20 ${ClassCustom}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {title && (
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>
        )}
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.map((item, index) => (
            <div
              key={item.label || index}
              className="flex flex-col items-center justify-center p-6 border border-[#3d68b8] bg-white/5 rounded-2xl text-center shadow-sm"
            >
              <dd
                aria-label={String(item.value)}
                className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums"
              >
                {displayValues[index] ?? item.value}
              </dd>
              <dt className="mt-2 text-lg sm:text-xl font-medium text-blue-100">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ScoreCard;

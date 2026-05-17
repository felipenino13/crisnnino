"use client";

import { useEffect, useState } from "react";

type TypingTitleProps = {
  text: string;
};

export function TypingTitle({ text }: TypingTitleProps) {
  const [visibleText, setVisibleText] = useState(text);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let index = 0;
    let interval: number | undefined;

    const timeout = window.setTimeout(() => {
      setVisibleText("");

      interval = window.setInterval(() => {
        index += 1;
        setVisibleText(text.slice(0, index));

        if (index >= text.length && interval !== undefined) {
          window.clearInterval(interval);
        }
      }, 45);
    }, 0);

    return () => {
      window.clearTimeout(timeout);

      if (interval !== undefined) {
        window.clearInterval(interval);
      }
    };
  }, [text]);

  return (
    <h1
      className="max-w-4xl text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-[5.5rem]"
      aria-label={text}
    >
      <span aria-hidden="true">{visibleText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.88em] w-[0.08em] translate-y-[0.08em] animate-pulse rounded-full bg-current"
      />
    </h1>
  );
}

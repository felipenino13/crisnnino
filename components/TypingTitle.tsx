"use client";

import { useEffect, useState } from "react";

type TypingTitleProps = {
  text: string;
};

export function TypingTitle({ text }: TypingTitleProps) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    setVisibleText("");

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, 45);

    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <h1
      className="max-w-3xl text-5xl font-semibold leading-tight sm:text-7xl"
      aria-label={text}
    >
      <span aria-hidden="true">{visibleText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.08em] animate-pulse bg-current"
      />
    </h1>
  );
}

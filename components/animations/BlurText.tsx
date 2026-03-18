"use client";

import { ElementType, useEffect, useMemo, useRef, useState } from "react";

type BlurTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  segmentClassName?: string;
};

export default function BlurText({
  text,
  as: Tag = "p",
  className = "",
  delay = 80,
  duration = 600,
  segmentClassName = "",
}: BlurTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`inline-block transition-all ease-out ${segmentClassName}`}
          style={{
            transitionDelay: `${index * delay}ms`,
            transitionDuration: `${duration}ms`,
            filter: visible ? "blur(0px)" : "blur(10px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0,0,0)" : "translate3d(0,18px,0)",
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

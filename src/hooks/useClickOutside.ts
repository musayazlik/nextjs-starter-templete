"use client";

import { RefObject, useEffect } from "react";

// Usage:
// const ref = useRef<HTMLDivElement>(null);
// useClickOutside(ref, () => setIsOpen(false));

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

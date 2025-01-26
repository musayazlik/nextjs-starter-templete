// helpers/hooks/useToggle.ts
"use client";

import { useCallback, useState } from "react";

// Usage:
// const [isOpen, { toggle, setTrue, setFalse }] = useToggle();

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((prev) => !prev), []);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, { toggle, setTrue, setFalse }] as const;
};


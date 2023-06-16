import { useState } from "react";

import { useWindowListener } from "./useWindowListener";

interface IUseBreakpointCheck {
  (breakpoint: number): boolean;
}

export const useBreakpointCheck: IUseBreakpointCheck = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  // Handle breakpoint change
  interface IHandleBreakpointChange {
    (): void;
  }
  const handleBreakpointCheck: IHandleBreakpointChange = () => {
    const windowWidth = window.innerWidth;
    const isLessBreakpoint = windowWidth < breakpoint;
    setIsBreakpoint(isLessBreakpoint);
  };
  useWindowListener(handleBreakpointCheck);

  return isBreakpoint;
};

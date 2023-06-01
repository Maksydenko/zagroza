import { useEffect } from "react";

interface IUseWindowSize {
  (handler: () => void, dependency: boolean | string): void;
}

export const useWindowSize: IUseWindowSize = (handler, dependency) => {
  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [dependency]);
};

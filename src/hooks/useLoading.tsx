import { useState, useEffect } from "react";

interface IUseLoading {
  (object: any): boolean;
}

export const useLoading: IUseLoading = (object) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleObjectLoaded = () => setIsLoading(false);

  useEffect(() => {
    const isVideo = object.current.tagName === "VIDEO";

    if (object.current.complete) {
      handleObjectLoaded();
    } else {
      object.current.addEventListener("load", handleObjectLoaded);
      isVideo &&
        object.current.addEventListener("loadedmetadata", handleObjectLoaded);

      return () => {
        object.current?.removeEventListener("load", handleObjectLoaded);
        isVideo &&
          object.current?.removeEventListener(
            "loadedmetadata",
            handleObjectLoaded
          );
      };
    }
  }, [object, isLoading]);

  return isLoading;
};

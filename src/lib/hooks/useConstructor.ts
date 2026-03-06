import { useRef } from "react";

/**
 * Custom hook that runs the provided callback only once during the component's lifecycle.
 * @param callback - Function to be executed once on component mount.
 */
const useConstructor = (callback: () => void) => {
  const calledRef = useRef(false);
  if (!calledRef.current) {
    callback();
    calledRef.current = true;
  }
};

export { useConstructor };

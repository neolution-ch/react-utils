import { useState } from "react";

/**
 * Custom hook that runs the provided callback only once during the component's lifecycle.
 * @param callback - Function to be executed once on component mount.
 */
const useConstructor = (callback: () => void) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) {
    return;
  }
  callback();
  setHasBeenCalled(true);
};

export { useConstructor };

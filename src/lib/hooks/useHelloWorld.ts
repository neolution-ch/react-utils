import { useEffect } from "react";

/**
 * an example of a custom hook
 */
const useHelloWorld = () => {
  useEffect(() => {
    console.log("Hello World!");
  }, []);
};

export { useHelloWorld };

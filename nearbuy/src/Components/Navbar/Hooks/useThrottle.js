import { useEffect, useRef, useState } from "react";

// this is a custom hook for throttling to reduce or limit some amount of api request

export const useThrottle = (value, delay) => {
  const [throttleValue, setThrottleValue] = useState(value);
  const start = useRef(Date.now());

  const throttle = () => {
    const handler = setTimeout(() => {
      if (Date.now() - start.current >= delay) {
        setThrottleValue(value);
        start.current = Date.now();
      }
    }, delay - (Date.now() - start.current));

    return () => {
      clearTimeout(handler);
    };
  };

  useEffect(() => {
    throttle();
  }, [value, delay]);

  return throttleValue;
};

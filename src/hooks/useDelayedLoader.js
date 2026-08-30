import { useRef, useState } from 'react';

export default function useDelayedLoader(delay = 400) {
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    timerRef.current = setTimeout(() => {
      setLoading(true);
    }, delay);
  };

  const stop = () => {
    clearTimeout(timerRef.current);
    setLoading(false);
  };

  return { loading, start, stop };
}
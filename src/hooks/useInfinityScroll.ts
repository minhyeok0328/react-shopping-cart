import { useEffect, useRef, useState } from 'react';

interface observerOptions {
  root: null;
  rootMargin: string;
  threshold: number;
}

interface Props {
  callback: () => void;
  options: observerOptions;
}

const defaultOptions: observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};

export default function useInfinityScroll(callback: () => void, options: observerOptions = defaultOptions) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);

      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

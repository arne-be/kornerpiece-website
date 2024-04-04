import { useState, useEffect } from 'react';

const useOffsetTop = (ref : any) => {
  const [offsetTop, setOffsetTop] = useState(0.0);

  useEffect(() => {
    const updateOffsetTop = () => {
      if (ref.current) {
        setOffsetTop(parseFloat(ref.current.getBoundingClientRect().top + window.scrollY));
      }
    };

    updateOffsetTop(); // Initial calculation
    window.addEventListener('resize', updateOffsetTop); // Recalculate on resize

    return () => {
      window.removeEventListener('resize', updateOffsetTop);
    };
  }, [ref]);

  return offsetTop;
};

export default useOffsetTop;
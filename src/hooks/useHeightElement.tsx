import { useState, useEffect } from 'react';

const useHeightElement = (ref: React.RefObject<any>) => {
  const [heightElement, setHeightElement] = useState(0.0);

  useEffect(() => {
    const updateHeightElement = () => {
      if (ref.current) {
        setHeightElement(parseFloat(ref.current.clientHeight));
      }
    };

    updateHeightElement(); // Initial calculation
    window.addEventListener('resize', updateHeightElement); // Recalculate on resize
    window.addEventListener('scroll', updateHeightElement); // Recalculate on scroll

    return () => {
      window.removeEventListener('resize', updateHeightElement);
      window.removeEventListener('scroll', updateHeightElement);
    };
  }, [ref]);

  return heightElement;
};

export default useHeightElement;
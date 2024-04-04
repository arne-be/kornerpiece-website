import { useState, useEffect } from "react";

const useOnScreen = (ref: any, rootMargin = "0px") => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin,
          threshold: 0.01
        }
      );
  
      const currentElement = ref?.current;
  
      if (currentElement) {
        observer.observe(currentElement);
      }
  
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, []);
  
    return isVisible;
  };
  
  export default useOnScreen
import {useRef, useState, useEffect, useCallback} from 'react'
import styles from "../style"
import { kornerpieceMatched } from "../assets"
import { useScrollPosition, useOnScreen, useOffsetTop, useHeightElement } from "../hooks";

const About = () => {
  const scrollPosition = useScrollPosition();
  
  const refSection = useRef<HTMLElement>(null);

  const refImage = useRef<HTMLImageElement>(null);
  const refImageDiv = useRef<HTMLDivElement>(null);
  
  const refText = useRef<HTMLDivElement>(null);
  const refHeadingOne = useRef<HTMLHeadingElement>(null);
  const isHeadingOneVisible = useOnScreen(refHeadingOne, "0px");
  const refTextOne = useRef<HTMLParagraphElement>(null);
  const isTextOneVisible = useOnScreen(refTextOne, "0px");
  const refHeadingTwo = useRef<HTMLHeadingElement>(null);
  const isHeadingTwoVisible = useOnScreen(refHeadingTwo, "0px");
  const refTextTwo = useRef<HTMLParagraphElement>(null);
  const isTextTwoVisible = useOnScreen(refTextTwo, "0px");

  const [imageTransformation, setImageTransformation] = useState(true);
  const [imageDivStart, setImageDivStart] = useState(0);
  const [heightImageDiv, setHeightImageDiv] = useState(0);
  const [heightText, setHeightText] = useState(0);
  const [measurementsReady, setMeasurementsReady] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageDivOffsetTop = useOffsetTop(refImageDiv);
  const imageDivHeight = useHeightElement(refImageDiv);
  const textHeight = useHeightElement(refText);

  // Handle image load
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  useEffect(() => {
    // Wait for image to load AND layout to stabilize before taking measurements
    if (imageLoaded && imageDivOffsetTop > 0 && imageDivHeight > 0 && textHeight > 0) {
      // Use requestAnimationFrame to wait for browser to finish painting
      const frameId = requestAnimationFrame(() => {
        // Take measurements directly from DOM after paint completes
        if (refImageDiv.current && refText.current) {
          const finalImageDivHeight = refImageDiv.current.clientHeight;
          const finalTextHeight = refText.current.clientHeight;
          const finalImageDivOffsetTop = refImageDiv.current.getBoundingClientRect().top + window.scrollY;
          
          setImageDivStart(finalImageDivOffsetTop);
          setHeightImageDiv(finalImageDivHeight);
          setHeightText(finalTextHeight);
          setMeasurementsReady(true);
        }
      });
      
      return () => cancelAnimationFrame(frameId);
    }
  }, [imageLoaded, imageDivOffsetTop, imageDivHeight, textHeight]);

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth >= 1060) {
        setImageTransformation(true);
      } else {
        setImageTransformation(false);
      }
    };

    // Run once on mount to ensure correct initial state
    checkWindowWidth();

    window.addEventListener('resize', checkWindowWidth);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <section id="about" ref={refSection} className={`flex md:flex-row flex-col ${styles.flexStart} ${styles.paddingY}`}>

      <div ref={refText} className={`flex flex-col items-center justify-center w-full py-[10%]`}>
        <div className={`flex flex-col items-start w-full pb-[20%]`}>
          <h1 ref={refHeadingOne} 
            className={`font-poppins font-semibold text-neutral text-opacity-65 ss:text-[46px] text-[32px] ss:leading-[75px] leading-[50px] py-[1%]
            ${isHeadingOneVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
          >
            About me
          </h1>
          <p ref={refTextOne}
            className={`font-poppins font-light text-neutral ss:text-[32px] text-[24px] md:w-[80%] w-[100%] ss:leading-[50px] leading-[35px]
            ${isTextOneVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
          >
            I am a highly driven person motivated by taking ownership and having the freedom to add my personal touch. My curiousity always leads me to explore more whether it is countries or skills. I value uniqueness and simplicity in products, music, photography or design.
          </p>
        </div>

        <div className={`flex flex-col items-start w-full pt-[20%]`}>
          <h1 ref={refHeadingTwo} 
            className={`font-poppins font-semibold text-neutral text-opacity-65 ss:text-[46px] text-[32px] ss:leading-[75px] leading-[50px] py-[1%]
            ${isHeadingTwoVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
          >
            Why kornerpiece?
          </h1>
          <p ref={refTextTwo}
            className={`font-poppins font-light text-neutral ss:text-[26px] text-[24px] md:w-[80%] w-[100%] ss:leading-[50px] leading-[35px]
            ${isTextTwoVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
          >
            Kornerpiece is about a problem solving approach, taking one piece as a starting point and developing on from there. Using the properties of each piece to build complete picture.
          </p>
        </div>

      </div>

      <div ref={refImageDiv} className={`flex flex-col items-center justify-center w-full py-[10%]`}>
        

        {
        imageTransformation && measurementsReady ? 
          <img 
            ref={refImage} 
            src={kornerpieceMatched} 
            alt="kornerpieceMatched" 
            className={`w-[70%] h-auto opacity-85`} 
            style={{
              transform: `translateY(${
                scrollPosition > imageDivStart ? 
                  ((imageDivStart + heightText - 0.9*heightImageDiv) > scrollPosition ? 
                    scrollPosition - imageDivStart //case 1: moving 
                    : heightText - 0.9*heightImageDiv) //case 2: stop at the end of the text
                  : 0}px) 
                rotate(-${scrollPosition > imageDivStart ? //one row above -> case 3: beginning
                  ((imageDivStart + heightText - 0.9*heightImageDiv) > scrollPosition ? 
                    (scrollPosition - imageDivStart) * (90 / (heightText - 0.9*heightImageDiv)) //case 1: moving
                      : 90)  //case 2: stop at the end of the text
                  : 0}deg)`,  //case 3: beginning
              transition: 'transform 0.001s smooth'
            }}
            onLoad={handleImageLoad}
          />
        :
          <img 
              ref={refImage} 
              src={kornerpieceMatched} 
              alt="kornerpieceMatched" 
              className={`w-[70%] h-auto opacity-85`} 
              onLoad={handleImageLoad}
          />
        }

      </div>

    </section>
  )
}

export default About
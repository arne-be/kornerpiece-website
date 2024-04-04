import {useRef, useEffect} from 'react'
import styles from "../style"
import { kornerpieceMatched } from "../assets"
import { useScrollPosition, useOnScreen, useOffsetTop, useHeightElement } from "../hooks";

const About = () => {
  const scrollPosition = useScrollPosition();

  const refImage = useRef(null);
  const refImageDiv = useRef(null);
  const isImageVisible = useOnScreen(refImageDiv, "0px");
  const imageDivStart = useOffsetTop(refImageDiv);
  const heightImageDiv = useHeightElement(refImageDiv);

  const refText = useRef(null);
  const heightText = useHeightElement(refText);
  const refHeadingOne = useRef(null);
  const isHeadingOneVisible = useOnScreen(refHeadingOne, "0px");
  const refTextOne = useRef(null);
  const isTextOneVisible = useOnScreen(refTextOne, "0px");
  const refHeadingTwo = useRef(null);
  const isHeadingTwoVisible = useOnScreen(refHeadingTwo, "0px");
  const refTextTwo = useRef(null);
  const isTextTwoVisible = useOnScreen(refTextTwo, "0px");

  console.log('heightText:', heightText, 'heightImageDiv:', heightImageDiv, 'imageDivStart', imageDivStart, 'scrollPosition:', scrollPosition);

  return (
    <section id="about" className={`flex md:flex-row flex-col ${styles.flexStart} ${styles.paddingY}`}>

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
            I am highly driven by intrinsic motivation, taking ownership and adding my personal touch. My curious sense leads me to explore more whether it is countries or skills. I value uniqueness and simplicity in music, photogrpahy or design.
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
            Kornerpiece is about an approach for problem solving, taking one piece as a starting point and developing on from there. Using each pieces uniqueness to build a complete picture.
          </p>
        </div>

      </div>

      <div ref={refImageDiv} className={`flex flex-col items-center justify-center w-full py-[10%]`}>
        
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
        />

      </div>

    </section>
  )
}

export default About
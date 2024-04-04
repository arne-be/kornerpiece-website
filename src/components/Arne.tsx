import { useRef } from 'react';
import styles from '../style'
import {heroBG, headshot} from '../assets'
import { useScrollPosition, useOnScreen, useOffsetTop} from "../hooks";



const Arne = () => {
  const scrollPosition = useScrollPosition();
  const refText = useRef(null);
  const refImage = useRef(null);
  const isTextVisible = useOnScreen(refText, "0px");
  const isImageVisible = useOnScreen(refImage, "0px");
  const refSection = useRef(null);
  const sectionStart = useOffsetTop(refSection);

  return (
    <section id="arne" ref={refSection}
      className={`flex flex-col items-center  ${styles.paddingX} ${styles.flexStart} xl:px-0 sm:px-16 px-6 `} >
      
      <div 
        className={`flex md:flex-row flex-col w-full bg-center bg-no-repeat`} 
        style={{backgroundImage: `url(${heroBG})`, backgroundSize: '65% auto'}}>
        
        <div ref={refText} className={`flex justify-center items-center w-full md:text-left text-center md:py-0 py-6 
          ${isTextVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
        >
          <div style={{transform: `translateY(${(sectionStart - scrollPosition) * 0.3}px)`, transition: 'transform 0.01s smooth', zIndex: 0}}>
            <h1 className="font-poppins font-light ss:text-[46px] text-[32px] text-white ss:leading-[75px] leading-[50px]">
              I am <span className="font-semibold text-accent">Arne</span>, a <span className="font-semibold text-secondary">ML Engineer</span> <br/>
              with a passion for <br/>
              <span className="font-semibold text-accent">Product</span> and <br/>
              <span className='font-semibold text-accent'>Sustainability</span>
            </h1>
            </div>
        </div>

        <div className={`flex justify-center items-center w-full  md:py-0 py-6'`} 
          style={{transform: `translateY(${(sectionStart - scrollPosition) * 0.3}px)`, transition: 'transform 0.01s smooth', zIndex: 0}}
          >
          <img ref={refImage} src={headshot} alt="headshot" 
            className={`flex md:h-[50%] md:w-auto w-[50%] 
            ${isImageVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}/>
        </div>

      </div>



    </section>

    
  )
}

export default Arne
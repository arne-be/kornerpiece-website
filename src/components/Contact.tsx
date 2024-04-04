import {useRef} from 'react'
import styles from "../style"
import { linkedin, twitter, github, email } from "../assets"
import { useOnScreen } from '../hooks'

const Contact = () => {
  const refText = useRef(null);
  const refIcons = useRef(null);
  const isTextVisible = useOnScreen(refText, "0px");
  const isIconsVisible = useOnScreen(refIcons, "0px");




  return (
    <section id="contact" className={`flex md:flex-row flex-col items-center justify-center sm:pt-16 sm:pb-48 pt-6 pb-24 ${styles.flexStart}`}>

      <div ref={refText} className={`flex md:items-end md:justify-end items-center justify-center w-full p-5
        ${isTextVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}
      `}>
        <h1 className={`font-poppins font-semibold text-secondary ss:text-[46px] text-[32px] ss:leading-[75px] leading-[50px]`}>
          Get in touch
        </h1>
      </div>

      <div ref={refIcons} className={`flex flex-row md:items-start md:justify-start items-center justify-center w-full
        ${isIconsVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}
      `}>
        <a href="mailto:arne.berresheim@gmail.com" className="px-3" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="email" className={`h-[40px] w-auto opacity-65 hover:opacity-100`} />
        </a>

        <a href="https://www.linkedin.com/in/arne-berresheim/" className="px-3" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className={`w-[40px] h-auto opacity-65 hover:opacity-100`} />
        </a>

        <a href="https://github.com/arne-be" className="px-3" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className={`w-[40px] h-auto opacity-65 hover:opacity-100`} />
        </a>

        <a href="https://twitter.com/Arnebrshm" className="px-3" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" className={`w-[40px] h-auto opacity-65 hover:opacity-100`} />
        </a>
      </div>


    </section>
  )
}

export default Contact
import { useRef } from 'react'
import styles from "../style"
import { projects } from '../constants'
import Button from './Button'
import { useOnScreen } from '../hooks'

const ProjectCard = ({ key, image, title, content, button1, button1Link, button2, button2Link, index }: 
  { 
  key: string, 
  image: string, 
  title: string, 
  content: string, 
  button1: string, 
  button1Link: string, 
  button2: string, 
  button2Link: string,
  index: number
  }) => {

  const ref = useRef(null);
  const isVisible = useOnScreen(ref, "0px");

  return (
    <div
      ref={ref}
      className={`flex flex-col items-contain overflow-hidden border-secondary 
        md:mx-5 ss:ml-5 md:border-[5px] md:rounded-[40px] md:w-[375px] md:h-[500px]  
        mx-3 border-[3px] rounded-[32px] w-[300px] h-[400px]
        hover:scale-up hover:shadow-accent 
        ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
      style={{animationDelay: `${index * 0.2}s`}}
    >
      <div className="flex flex-col justify-center items-center items-contain h-[32%]">
        <img src={image} alt={key+"_image"} className="w-[100%] h-auto "/>
      </div>
      <div className="flex flex-col bg-primary h-[22%] md:p-4 p-2">
        <h1 className="font-semibold font-poppins text-neutral md:text-[20px] text-[18px]">{title}</h1>
      </div>
      <div className="flex flex-col bg-primary h-[28%] font-poppins text-white md:px-4 px-2" >
        <p className="font-light text-neutral text-opacity-65 md:text-[16px] text-[12px]">{content}</p>
      </div>
      <div className="flex flex-row h-[18%] justify-evenly items-center md:pb-4 md:pt-2 pb-2 pt-1">
        <div className="flex flex-col items-center md:w-[125px] md:h-[50px] w-[100px] h-[40px]">
        {button1 != '' ? <Button text={button1} link={button1Link} primary={false}/> : null}
        </div>
        <div className="flex flex-col items-center md:w-[125px] md:h-[50px] w-[100px] h-[40px]">
        {button2 != '' ? <Button text={button2} link={button2Link} primary={true}/> : null}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const refText = useRef(null);
  const isTextVisible = useOnScreen(refText, "0px");
  const refSection = useRef(null);

  return (
    <section id="projects" ref={refSection} className={`flex flex-col overflow-x-auto overflow-y-hidden ${styles.flexStart} ${styles.paddingY}`}
      /*style={{transform: `translateY(${(sectionStart - scrollPosition) * 0.3}px)`, transition: 'transform 0.01s ease-in-out', zIndex: 0}}*/>
      <h1 ref={refText} 
        className={`w-full md:pb-50 py-5 font-poppins font-semibold text-neutral text-opacity-65 ss:text-[46px] text-[32px]
        ${isTextVisible ? 'animate-fade-in-up opacity-65' : 'opacity-0'}`}>
          Projects
      </h1>
      <ul className="list-none flex flex-nowrap justify-start items-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            content={project.content}
            button1={project.button1 || ''}
            button1Link={project.button1Link || ''}
            button2={project.button2 || ''}
            button2Link={project.button2Link || ''}
            index={index}
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects
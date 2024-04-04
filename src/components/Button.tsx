/*import React from 'react'*/

const Button = ({ text, link, primary }: {
  text: string,
  link: string,
  primary: boolean
}) => {
  return (
    <a href={link} className="flex items-start justify-center" target="_blank" rel="noopener noreferrer">
      <button type="button" className={` font-poppins font-semibold ring-secondary text-center md:w-[125px] md:h-[50px] md:text-[20px] md:ring-[3px] md:rounded-[12.5px] w-[100px] h-[40px] text-[18px] ring-[2px] rounded-[10px]  ${primary ? 'bg-secondary text-primary' : 'bg-primary text-secondary'} `}>
        {text}
      </button>
    </a>
  )
}

export default Button
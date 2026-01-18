/*import React from 'react'*/
import styles from '../style'
import { kornerpieceMatched } from '../assets'


const Footer = () => {
  return (

    <section id="footer" className={`flex flex-col items-center bg-primary text-white ${styles.flexStart}`}>

      <div className={`flex flex-row items-center justify-center w-full border-t-[1px] borderw-white py-5`}>

        <div className={`flex flex-row items-center justify-begin w-full`}>
          <img src={kornerpieceMatched} alt="kornerpiece" className={`h-[64px] p-2`} />
          <h1 className={`font-poppins font-semibold text-[18px] leading-[23.8px]`}>
            kornerpiece
          </h1>
        </div>

        <div className={`flex flex-col items-end justify-end w-full`}>
            <p> </p>
        </div>

        <div className={`flex flex-col items-end justify-end w-full px-5`}>
          <p> </p>

        </div>

        <div className={`flex flex-col items-end justify-center w-full gap-2`}>
          <a href="/imprint.html">
            <p className={`font-poppins font-normal ss:text-[14px] text-[10px] leading-[23.8px]`}>
              Impressum
            </p>
          </a>
          <a href="/datenschutz.html">
            <p className={`font-poppins font-normal ss:text-[14px] text-[10px] leading-[23.8px]`}>
              Datenschutz
            </p>
          </a>
        </div>


      </div>
        


    </section>
  )
}

export default Footer
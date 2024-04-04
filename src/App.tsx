/*import {useState, useEffect} from 'react'*/
import styles from './style';
import './input.css'
import {NavBar, Arne, Projects, About, Contact, Footer} from './components';

const App = () => {
  /* Height of navbar set */
  const navbarHeight = 97;

  
  return (
    <div className="relative z-10 bg-primary w-full overflow-hidden">
      <div id="navbar" className={`fixed z-10 top-0 w-full bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`relative z-1 bg-primary ${styles.flexStart}`} style={{ paddingTop: navbarHeight }}>
        <div className={`${styles.boxWidth}`}>
          <Arne />
        </div>
      </div>

      <div className={`relative z-1 bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
          <About/>
          <Contact />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
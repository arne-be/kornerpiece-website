import { useState, useEffect } from 'react';
import { logo3d, menu, close } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedNav, setSelectedNav] = useState('arne');

  const checkScroll = () => {
    const scrollValue = window.innerWidth >= 1060 ? 80 : 26;

    if (window.scrollY >= scrollValue) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedNav(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach((navLink) => {
      const section = document.getElementById(navLink.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('scroll', checkScroll);

      navLinks.forEach((navLink) => {
        const section = document.getElementById(navLink.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  

  return (
    /* transition for navbar modify duration for smoothness/length*/ 
    <nav className={`w-full flex justify-between items-center navbar border-b-[1px] borderw-white transition-padding duration-500 ease-in-out ${scrolled ? 'py-2' : 'py-6'}`}>
        <a href="#arne">
          <img src={logo3d} alt="kornerpiece" className={`relative z-5 h-[48px] p-2 transform transition-all duration-500 ease-in-out ${scrolled ? '' : '-rotate-45'}`}/>
        </a>

        <ul className="list-none sm:flex hidden justify-start items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index == 0 ? `ml-12` : `ml-6`} ${selectedNav === nav.id ? 'text-secondary' : 'text-white'} hover:text-accent`}>
              <a href={`#${nav.id}`} onClick={() => setSelectedNav(`${nav.id}`)}>{nav.title}</a>  
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-[28px] h-[28px] object-contain" 
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? "flex" : "hidden"} items-center justify-center p-6 bg-accent-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-center items-center">
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[18px] ${index == navLinks.length-1 ? `mb-0` : `mb-4`} text-neutral`}>
                  <a href={`#${nav.id}`}>{nav.title}</a>  
                </li>
              ))}
            </ul>

          </div>

        </div>

    </nav>
    
  )
}

export default NavBar
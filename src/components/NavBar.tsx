import { useState, useEffect } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedNav(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = navLinks
      .map((navLink) => document.getElementById(navLink.id))
      .filter((section): section is HTMLElement => section !== null);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full flex flex-wrap gap-4 justify-between items-center py-4">
      <a href="#arne" className="flex gap-3 items-center font-semibold text-[18px] text-primary">
        <img src={logo} alt="" className="w-[34px] h-auto" />
        kornerpiece
      </a>

      <ul className="list-none sm:flex hidden gap-7 items-center text-[16px]">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              onClick={() => setSelectedNav(nav.id)}
              className={`${selectedNav === nav.id ? 'text-secondary-dark' : 'text-primary'} hover:text-secondary-dark`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex items-center">
        <button
          type="button"
          aria-label={toggle ? 'Close menu' : 'Open menu'}
          aria-expanded={toggle}
          onClick={() => setToggle((prev) => !prev)}
          className="w-[44px] h-[44px] flex items-center justify-center"
        >
          {/* the menu icons are white, invert them for the light page */}
          <img src={toggle ? close : menu} alt="" className="w-[24px] h-[24px] object-contain invert" />
        </button>

        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-[72px] right-4 p-6 bg-white border border-neutral rounded-2xl min-w-[160px]`}>
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li key={nav.id} className="text-[18px]">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setToggle(false)}
                  className={selectedNav === nav.id ? 'text-secondary-dark' : 'text-primary'}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

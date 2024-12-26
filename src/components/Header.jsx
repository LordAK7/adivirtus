import { useState } from 'react';

const MenuIcon = () => (
  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <header className="py-2 bg-black sm:py-3 fixed w-full z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="flex items-center gap-2">
              <img className="w-auto h-9 sm:h-10" src="/logowhite.svg" alt="Adivirtus Logo" />
              <span className="text-white text-xl font-semibold">ADIVIRTUS</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {!expanded ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>

          <nav className="hidden ml-auto mr-10 space-x-10 md:flex md:items-center md:justify-end lg:space-x-12">
            <button onClick={() => scrollToSection('hero')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">About</button>
            <button onClick={() => scrollToSection('info')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Info</button>
            <button onClick={() => scrollToSection('analysis')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Analysis</button>
            <button onClick={() => scrollToSection('vision')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Vision</button>
            <button onClick={() => scrollToSection('team')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Team</button>
          </nav>

          <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <button onClick={() => scrollToSection('time')} className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">Contact Us</button>
          </div>
        </div>

        {expanded && (
          <nav>
            <div className="flex flex-col pt-4 pb-2 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">About</button>
              <button onClick={() => scrollToSection('info')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Info</button>
              <button onClick={() => scrollToSection('analysis')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Analysis</button>
              <button onClick={() => scrollToSection('vision')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Vision</button>
              <button onClick={() => scrollToSection('team')} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Team</button>

              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <button onClick={() => scrollToSection('time')} className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">Contact Us</button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

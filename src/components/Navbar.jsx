import NameBorder from './NameBorder';

const Navbar = ({ isDarkMode, onThemeChange }) => {
  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        
        {/* Logo / Name */}
        <a
          href="#hero"
          aria-label="Vishal Mathur home"
          className="flex items-center gap-3"
        >
          
          <span className="text-xl font-semibold tracking-wide">
            <NameBorder>Vishal Sarup Mathur</NameBorder>
          </span>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a href="#hero" className="hover:text-zinc-500">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-zinc-500">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-zinc-500">
              Experience
            </a>
          </li>

          <li>
            <a href="#achievements" className="hover:text-zinc-500">
              Achievements
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-zinc-500">
              Projects
            </a>
          </li>

          {/* 
          <li>
            <a href="#certifications" className="hover:text-zinc-500">
              Certifications
            </a>
          </li>
          */}

          <li>
            <a href="#research" className="hover:text-zinc-500">
              Research
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-zinc-500">
              Contact
            </a>
          </li>

          {/* Theme Toggle */}
          <li>
            <label className="swap swap-rotate cursor-pointer">
              {/* Hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                checked={isDarkMode}
                onChange={(event) => onThemeChange(event.target.checked)}
                aria-label="Toggle dark mode"
              />

              {/* Sun icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.64 17l-.71.71a1 1 0 0 0 1.41 1.41l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.41l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5Zm0 9A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5Z"
                />
              </svg>

              {/* Moon icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05ZM12.14 19.73A8.14 8.14 0 0 1 7.08 5.22v.27A10.15 10.15 0 0 0 17.22 15.63a9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.08 4.32Z"
                />
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
import usePrefersDarkMode from '../hooks/usePrefersDarkMode'

const Navbar = props => {

  const[enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
  const enabled = 
        typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;
  const prefersDarkMode = usePrefersDarkMode(true)

  const { darkMode, setDarkMode } = props
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    prefersDarkMode()
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          enabled={enabled}
        />
      </div>
    </nav>
  );
};

export default Navbar;

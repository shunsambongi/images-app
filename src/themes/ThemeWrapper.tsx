import React, { useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { Classes } from '@blueprintjs/core';
import Theme from '../themes/Theme';

import dark from '../themes/dark';
import light from '../themes/light';

const ThemeToggle = React.createContext<() => void>(() => undefined);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  const toggle = useContext(ThemeToggle);
  return [theme, toggle];
};

interface ThemeWrapperProps {
  defaultTheme?: Theme;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
  defaultTheme = dark,
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeToggle.Provider value={toggleTheme}>
        <div className={theme.mode === 'light' ? '' : Classes.DARK}>
          {children}
        </div>
      </ThemeToggle.Provider>
    </ThemeProvider>
  );
};

export default ThemeWrapper;

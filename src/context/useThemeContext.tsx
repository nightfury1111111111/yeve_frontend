import {
  getFromLocalStorage,
  setToLocalStorage,
} from '@src/utils/localStorage';
import React, { ReactNode, useState } from 'react';
import themeConfig from '@src/theme/themeConfig';
import { THEME_MODE } from '@src/theme/enum';

type Theme = THEME_MODE;
type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
  themeConfig: Record<string, any>;
};

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const CustomThemeProvider: React.FC = ({
  children,
}: Record<string, ReactNode>) => {
  const [theme, setTheme] = useState<Theme>(
    getFromLocalStorage('yeve-theme') || THEME_MODE.LIGHT
  );
  const toggleTheme = () => {
    setTheme(theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT);
    setToLocalStorage(
      'yeve-theme',
      theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, themeConfig: themeConfig[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

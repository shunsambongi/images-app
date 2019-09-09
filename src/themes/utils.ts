import theme, { ThemeMap } from 'styled-theming';

interface ModeThemeMap extends ThemeMap {
  light: any;
  dark: any;
}

export const themeStyles = (values: ModeThemeMap) => {
  return theme('mode', values);
};

import { COLORS } from 'data';

export const themeData = {
  readIsDarkMode(): boolean {
    const result = localStorage.getItem('isDarkMode');
    return result ? JSON.parse(result) : true;
  },

  saveIsDarkMode(isDarkMode: boolean): void {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  },

  readThemeColor(): COLORS {
    const result = localStorage.getItem('themeColor');
    return result ? JSON.parse(result) : COLORS.RED;
  },

  saveThemeColor(themeColor: COLORS): void {
    localStorage.setItem('themeColor', JSON.stringify(themeColor));
  },

  readSavedTheme(): [
    ReturnType<typeof this.readIsDarkMode>,
    ReturnType<typeof this.readThemeColor>,
  ] {
    return [this.readIsDarkMode(), this.readThemeColor()];
  },
};

export type themeDataType = typeof themeData;

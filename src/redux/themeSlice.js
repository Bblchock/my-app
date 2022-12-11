import { createSlice } from '@reduxjs/toolkit';
import { getThemeLS, theme, basicColor } from './utils';

const initialState = {
	fon: getThemeLS('fon'),
	color: getThemeLS('color'),
	theme,
	basicColor,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			//Сохранить тему/цвет в state и LS
			if (action.payload.theme === 'fon') {
				const value = action.payload.key;
				state.fon = value;
				localStorage.setItem('fondata', value);
			}
			if (action.payload.theme === 'color') {
				const value = action.payload.key;
				state.color = value;
				localStorage.setItem('colordata', value);
			}
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
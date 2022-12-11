import navigator from './navigationSlice';
import champions from './championsSlice';
import theme from './themeSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		navigator,
		champions,
		theme,
	},
});
import { createSlice } from '@reduxjs/toolkit';
import { getCurrentPage } from './utils';

const initialState = {
	currentNav: getCurrentPage() || 0,
};

export const navigatorSlice = createSlice({
	name: 'navigator',
	initialState,
	reducers: {
		setNav: (state, action) => {
			//Записать номер страницы в state и LS
			state.currentNav = action.payload;
			localStorage.setItem('page', JSON.stringify(state.currentNav))
		},
	},
});

export const { setNav } = navigatorSlice.actions;
export default navigatorSlice.reducer;
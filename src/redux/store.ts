import { combineReducers, configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

import navigator from './navigationSlice';
import champions from './championsSlice';
import theme from './themeSlice';

export const store = configureStore({
  reducer: {
    navigator,
    champions,
    theme,
  },
});

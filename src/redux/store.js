import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

import { combineReducers } from '@reduxjs/toolkit';

import { carsReducer } from './carsSlice';

export const rootReducer = combineReducers({
  cars: carsReducer
});

import { createSlice } from '@reduxjs/toolkit';

import { getAllCars } from './carsOperation';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorites: [],
    filter: null,
    isLoading: false,
    error: null
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      const addCar = state.items.find(car => car.id === payload.id);
      if (addCar) {
        state.favorites.push(addCar);
      }
    },
    removeFromFavorites: (state, { payload }) => {
      const indexToRemove = state.favorites.findIndex(car => car.id === payload.id);
      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1);
      }
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    resetFilter: state => {
      state.filter = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, handleFulfilled)
      .addCase(getAllCars.rejected, handleRejected)
  }
});

export const { addToFavorites, removeFromFavorites, setFilter, resetFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
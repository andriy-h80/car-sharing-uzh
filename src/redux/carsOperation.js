import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://6482455929fa1c5c5032c8a6.mockapi.io/advert';
// const COUNT_CARS = 8;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json'
  }
});

const getAdvert = async () => {
    try {
      const { data } = await instance.get('/');
      return data;
    } catch ({ response }) {
      console.log(response.data);
    }
  };

export const getAllCars = createAsyncThunk('adverts/getAll', async (_, { rejectWithValue }) => {
  try {
    const data = await getAdvert();
    return data;
  } catch ({ response }) {
    return rejectWithValue(response.data);
  }
});

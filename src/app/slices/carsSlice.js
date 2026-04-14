import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Имитация API-запроса
export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      // Здесь будет реальный API
      return [
        { id: 1, name: "BMW X5", year: 2020, price: 45000 },
        { id: 2, name: "Audi A6", year: 2019, price: 32000 },
        { id: 3, name: "Mercedes C-Class", year: 2021, price: 38000 },
      ];
    } catch (err) {
      return thunkAPI.rejectWithValue("Ошибка загрузки автомобилей");
    }
  }
);

const initialState = {
  cars: [],
  filters: {
    brand: "",
    minPrice: null,
    maxPrice: null,
  },
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setBrand(state, action) {
      state.filters.brand = action.payload;
    },
    setMinPrice(state, action) {
      state.filters.minPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.filters.maxPrice = action.payload;
    },
    clearFilters(state) {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Ошибка";
      });
  },
});

export const { setBrand, setMinPrice, setMaxPrice, clearFilters } =
  carsSlice.actions;

export default carsSlice.reducer;

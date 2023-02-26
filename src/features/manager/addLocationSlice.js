import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addLocationService from "./addLocationService";
import { extractErrorMessage } from "../../utils";

//Creating initial state cases
const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//donate a bag

export const addLocation = createAsyncThunk(
  "addLocation",
  async (locationData, thunkAPI) => {
    try {
      return await addLocationService.addLocation(locationData);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const addLocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request = action.payload;
      })
      .addCase(addLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.request = null;
      });
  },
});

export const { reset } = addLocationSlice.actions;
export default addLocationSlice.reducer;

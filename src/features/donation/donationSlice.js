import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import donationService from "./donationService";
import { extractErrorMessage } from "../../utils";

// Get donation from local storage
const donation = JSON.parse(localStorage.getItem("donation"));

//Creating initial state cases
const initialState = {
  donation: donation ? donation : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//donate a bag

export const donate = createAsyncThunk(
  "donation/donate",
  async (donation, thunkAPI) => {
    try {
      return await donationService.donate(donation);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const donationSlice = createSlice({
  name: "donation",
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
      .addCase(donate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(donate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.donation = action.payload;
      })
      .addCase(donate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.donation = null;
      });
  },
});

export const { reset } = donationSlice.actions;
export default donationSlice.reducer;

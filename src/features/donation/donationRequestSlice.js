import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import donationRequestService from "./donationRequestService";
import { extractErrorMessage } from "../../utils";

// Get donation from local storage
const donationRequest = JSON.parse(localStorage.getItem("donationRequest"));

//Creating initial state cases
const initialState = {
  request: donationRequest ? donationRequest : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//donate a bag

export const donateRequest = createAsyncThunk(
  "request/donateRequest",
  async (donationRequest, thunkAPI) => {
    try {
      return await donationRequestService.donateRequest(donationRequest);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const donationRequestSlice = createSlice({
  name: "request",
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
      .addCase(donateRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(donateRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request = action.payload;
      })
      .addCase(donateRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.request = null;
      });
  },
});

export const { reset } = donationRequestSlice.actions;
export default donationRequestSlice.reducer;

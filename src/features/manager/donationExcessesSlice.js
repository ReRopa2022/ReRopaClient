import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import donationExcessesService from "./donationExcessesService";
import { extractErrorMessage } from "../../utils";

//Creating initial state cases
const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//donate a bag

export const excessReport = createAsyncThunk(
  "report/excessesReport",
  async (excessesReport, thunkAPI) => {
    try {
      return await donationExcessesService.excessesReport(excessesReport);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const donationExcessesSlice = createSlice({
  name: "report",
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
      .addCase(excessReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(excessReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.request = action.payload;
      })
      .addCase(excessReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.request = null;
      });
  },
});

export const { reset } = donationExcessesSlice.actions;
export default donationExcessesSlice.reducer;

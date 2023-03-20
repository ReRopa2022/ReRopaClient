import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import donationService from "./donationService";
import { extractErrorMessage } from "../../utils";

// Get donation from local storage

//Creating initial state cases
const initialState = {
  isStatusUpdated: false,
  isDonateDeleted: false,
  isStatusUpdatedError: false,
  isDonateDeletedError: false,
  isRequired: false,
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

//Update donation status
export const updateStatus = createAsyncThunk(
  "donation/updateStauts",
  async ({ donation_id, status }, thunkAPI) => {
    try {
      return await donationService.updateStatus({ donation_id, status });
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

//Update donation status
export const deleteDonation = createAsyncThunk(
  "donation/deleteDonation",
  async (donation_id, thunkAPI) => {
    try {
      return await donationService.deleteDonation(donation_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

//donate game or book
export const donateBookOrGame = createAsyncThunk(
  "donation/donateBookOrGame",
  async (donation, thunkAPI) => {
    try {
      return await donationService.donateBookOrGame(donation);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);
export const updateBookOrGameStatus = createAsyncThunk(
  "donation/updateBookOrGameStatus",
  async (donation, thunkAPI) => {
    try {
      return await donationService.updateBookOrGameStatus(donation);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const deleteBookOrGame = createAsyncThunk(
  "donation/deleteBookOrGame",
  async (donation, thunkAPI) => {
    try {
      return await donationService.deleteBookOrGame(donation);
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
      state.isRequired = false;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.isDonateDeleted = false;
      state.isDonateDeletedError = false;
      state.isStatusUpdated = false;
      state.isStatusUpdatedError = false;
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
        state.isRequired = action.payload.isRequired;
        state.donation = action.payload;
      })
      .addCase(donate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.donation = null;
      })
      .addCase(updateStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isStatusUpdated = true;
        state.donation = action.payload;
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isStatusUpdatedError = true;
        state.message = action.payload;
        state.donation = null;
      })
      .addCase(deleteDonation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDonation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDonateDeleted = true;
        state.donation = action.payload;
      })
      .addCase(deleteDonation.rejected, (state, action) => {
        state.isLoading = false;
        state.isDonateDeletedError = true;
        state.message = action.payload;
        state.donation = null;
      })
      .addCase(donateBookOrGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(donateBookOrGame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.donation = action.payload;
      })
      .addCase(donateBookOrGame.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.donation = null;
      })

      .addCase(updateBookOrGameStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isStatusUpdated = true;
        state.donation = action.payload;
      })
      .addCase(updateBookOrGameStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isStatusUpdatedError = true;
        state.message = action.payload;
        state.donation = null;
      })
      .addCase(deleteBookOrGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBookOrGame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDonateDeleted = true;
        state.donation = action.payload;
      })
      .addCase(deleteBookOrGame.rejected, (state, action) => {
        state.isLoading = false;
        state.isDonateDeletedError = true;
        state.message = action.payload;
        state.donation = null;
      });
  },
});

export const { reset } = donationSlice.actions;
export default donationSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import donationReducer from "../features/donation/donationSlice";
import donationRequestReducer from "../features/donation/donationRequestSlice";
import donationExcessesReducer from "../features/donation/donationExcessesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: donationReducer,
    request: donationRequestReducer,
    report: donationExcessesReducer,
  },
});

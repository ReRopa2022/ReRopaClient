import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import donationReducer from "../features/donation/donationSlice";
import donationRequestReducer from "../features/manager/donationRequestSlice";
import donationExcessesReducer from "../features/manager/donationExcessesSlice";
import addLocationReducer from "../features/manager/addLocationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: donationReducer,
    request: donationRequestReducer,
    report: donationExcessesReducer,
    location: addLocationReducer,
  },
});

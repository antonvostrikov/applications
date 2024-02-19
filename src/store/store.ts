import { configureStore } from "@reduxjs/toolkit";
import { applicationsApi } from "./applications/applications.api";

export const store = configureStore({
  reducer: {
    [applicationsApi.reducerPath]: applicationsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationsApi.middleware)
})

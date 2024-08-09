import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsSlice } from "../redux/contacts/slice";
import { filtersSlice } from "../redux/filters/slice";
import { authSlice } from "../redux/auth/slice";

const persistedAuthReduser = persistReducer(
  {
    key: "auth-token",
    storage,
    whitelist: ["token"],
  },
  authSlice
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReduser,
    contacts: contactsSlice,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

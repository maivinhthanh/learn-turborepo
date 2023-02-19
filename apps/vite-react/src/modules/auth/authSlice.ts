import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "../../store";

export interface ROState {
  token: string | null;
}

const initialState: ROState = {
  token: null,
};

const RO_SLICE_NAME = "auth";

const authSlice = createSlice({
  name: RO_SLICE_NAME,
  initialState,
  reducers: {
    setToken(state: ROState, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
});

export const authReducer = persistReducer(
  {
    // debug: !__prod__,
    key: RO_SLICE_NAME,
    keyPrefix: "",
    storage,
    whitelist: [""],
    serialize: true,
  },
  authSlice.reducer
);

export const { setToken } = authSlice.actions;

export default authSlice;

// SELECTOR
export const selectToken = (state: RootState) => state.auth.token;

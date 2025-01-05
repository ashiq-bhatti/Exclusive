import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: null,
  error: null,
  user: null,
};

const AuthSlice = createSlice({
  initialState: initialState,
  name: "AuthSlice",
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
    Logout: (state) => {
      (state.user = null), (state.loading = null), (state.error = null);
    },
  },
});

export const { SetUser, Logout } = AuthSlice.actions;

export default AuthSlice.reducer;
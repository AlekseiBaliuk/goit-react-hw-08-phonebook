import { createSlice } from '@reduxjs/toolkit';
import { signup, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signup.pending, (state, { payload }) => {
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),

  // extraReducers: {
  //   [signup.pending](state, { payload }) {
  //     state.error = null;
  //   },

  //   [signup.fulfilled](state, { payload }) {
  // state.user = payload.user;
  // state.token = payload.token;
  // state.isLoggedIn = true;
  //   },

  //   [signup.rejected](state, { payload }) {
  //     state.error = payload;
  //   },

  //   [logIn.pending](state, { payload }) {
  //     state.error = null;
  //   },

  //   [logIn.fulfilled](state, { payload }) {
  // state.user = payload.user;
  // state.token = payload.token;
  // state.isLoggedIn = true;
  //   },

  // [logIn.rejected](state, { payload }) {
  //   state.error = payload;
  // },

  // [logOut.fulfilled](state) {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isLoggedIn = false;
  // },

  // [refreshUser.pending](state) {
  //   state.isRefreshing = true;
  // },

  // [refreshUser.fulfilled](state, { payload }) {
  //   state.user = payload;
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // },

  //   [refreshUser.rejected](state) {
  //     state.isRefreshing = false;
  //   },
  // },
});

import { createSlice } from "@reduxjs/toolkit";
import { getAnnouncement } from "./actionAsync/announct";

const initialState = {
  isLoading: false,
  token: null,
  profileData: null,
  loadAccount: false,
  dataAnnounc: {},
};

const slice = createSlice({
  name: "account",
  initialState,
  reducers: {
    onLoginSucces: (state, action) => {
      state.token = action?.payload;
    },
    setProfileData: (state, action) => {
      state.profileData = action?.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(getAnnouncement.pending, (state) => {
      state.loadAccount = true;
    });
    builder.addCase(getAnnouncement.fulfilled, (state, { payload }) => {
      state.dataAnnounc = payload;
      state.loadAccount = false;
    });
    builder.addCase(getAnnouncement.rejected, (state) => {
      state.loadAccount = false;
    });
  },
});

export const { onLoginSucces, setProfileData } = slice.actions;

export default slice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Satellite } from "../../../services/satellite";

export const getAnnouncement = createAsyncThunk(
  "api/announcements/all",
  async (jwt, { rejectWithValue }) => {
    try {
      const { data } = await Satellite(jwt).get(`/api/announcements/all`);
      return data;
    } catch (error) {
      if (error) {
        return rejectWithValue(error.response);
      }
      console.log("error getAnnouncement", error);
    }
  }
);

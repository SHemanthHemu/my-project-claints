import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Await } from "react-router-dom";

export const creatematerial = createAsyncThunk(
  "createMaterial",
  async (data, rejectWithValue) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/masterRm/addmaterial",
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error in posting data ", error);
      return rejectWithValue(error);
    }
  }
);

export const readMaterial = createAsyncThunk(
  "showMaterial",
  async (rejectWithValue) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/masterRm/getallrm"
      );
      return response.data;
    } catch (error) {
      console.error("Error in posting data ", error);
      return rejectWithValue(error);
    }
  }
);

export const rmDetail = createSlice({
  name: "rmdetail",
  initialState: {
    materials: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(creatematerial.pending, (state) => {
        state.loading = true;
      })
      .addCase(creatematerial.fulfilled, (state, action) => {
        state.loading = false;
        state.materials.push(action.payload);
      })
      .addCase(creatematerial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(readMaterial.pending, (state) => {
        state.loading = true;
      })
      .addCase(readMaterial.fulfilled, (state, action) => {
        state.loading = false;
        state.materials = action.payload;
      })
      .addCase(readMaterial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rmDetail.reducer;

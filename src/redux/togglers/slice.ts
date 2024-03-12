import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TogglersState {
  isOnline: boolean;
}

const initialState: TogglersState = {
  isOnline: true,
};

export const counterSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeStatus } = counterSlice.actions;

export default counterSlice.reducer;

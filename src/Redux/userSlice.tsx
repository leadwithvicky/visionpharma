// redux/features/userSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isVerified: false, // 2FA + complete data check
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isVerified = action.payload.isVerified;
    },
    clearUser: (state) => {
      state.user = null;
      state.isVerified = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isUpdated: false,
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
    },
    loadingEnd:(state)=> {
      state.isLoading = false;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isError = false;
      state.isLoading = false;
    
    },
    signInFailure: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
      
    },
    deleteUserStart: (state) => {
      state.isLoading = true;
    },
    deleteUserSuccess: (state) => {
      (state.currentUser = null);
      (state.isError = false);
        (state.isLoading = false) 
    },
    deleteUserFailure: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.isError = false;
    },
    editUserProfile: (state, action) => {
      const { username, email, phoneNumber, adress } = action.payload;
      state.currentUser.username = username;
      state.currentUser.email = email;
      state.currentUser.phoneNumber = phoneNumber;
      state.currentUser.adress = adress;
    },
    setUpdated: (state, action) => {
      state.isUpdated = action.payload;
    },
  },
});

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
  editUserProfile,
  setUpdated,
  loadingEnd,
} = userSlice.actions;

export default userSlice.reducer;

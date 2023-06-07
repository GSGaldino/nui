// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Modals {
//   cart: boolean;
//   search: boolean;
// }

// interface UserState {
//   modals: Modals;
//   loggedUser: Record<string, unknown>;
// }

// const INITIAL_STATE: UserState = {
//   modals: {
//     cart: false,
//     search: false,
//   },
//   loggedUser: {},
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState: INITIAL_STATE,
//   reducers: {
//     openModal: (state, action: PayloadAction<keyof Modals>) => {
//       const modal = action.payload;
//       state.modals[modal] = true;
//     },
//     closeModal: (state, action: PayloadAction<keyof Modals>) => {
//       const modal = action.payload;
//       state.modals[modal] = false;
//     },
//     register: () => {},
//     registerSuccess: (state, action: PayloadAction<Record<string, unknown>>) => {
//       state.loggedUser = action.payload;
//     },
//     login: () => {},
//     logout: (state) => {
//       state.loggedUser = {};
//     },
//     continueWithGoogle: () => {},
//     continueWithGoogleSuccess: (state, action: PayloadAction<Record<string, unknown>>) => {
//       state.loggedUser = action.payload;
//     },
//   },
// });

// export const {
//   closeModal,
//   openModal,
//   register,
//   registerSuccess,
//   login,
//   logout,
//   continueWithGoogle,
//   continueWithGoogleSuccess,
// } = userSlice.actions;
// export default userSlice.reducer;

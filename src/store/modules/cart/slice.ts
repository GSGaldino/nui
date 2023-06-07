// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartState {
//   items: Array<{
//     id: string;
//     name: string;
//     size: string;
//     color: string;
//     paymentMethod: string;
//     type: string;
//     thumbnailUrl: string;
//   }>;
// }

// const INITIAL_STATE: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: INITIAL_STATE,
//   reducers: {
//     addItem: () => {},
//     addItemSuccess: (state, action: PayloadAction<{ id: string, name: string, size: string, color: string, paymentMethod: string, type: string, thumbnailUrl: string }>) => {
//       const { payload } = action;
//       state.items.push(payload);
//     },
//     removeItem: () => {},
//     removeItemSuccess: (state, action: PayloadAction<Array<{
//       id: string;
//       name: string;
//       size: string;
//       color: string;
//       paymentMethod: string;
//       type: string;
//       thumbnailUrl: string;
//     }>>) => {
//       state.items = action.payload;
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//     finishCart: () => {},
//   },
// });

// export const {
//   addItem,
//   removeItem,
//   clearCart,
//   addItemSuccess,
//   finishCart,
//   removeItemSuccess,
// } = cartSlice.actions;

// export default cartSlice.reducer;

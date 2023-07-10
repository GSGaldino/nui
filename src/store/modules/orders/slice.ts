import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    createOrder: () => {},
    getOrders: () => {},
    getOrdersSuccess: (state, action) => {
      const orders = action.payload;
      state.orders = orders;
    },
  },
});

export const { createOrder, getOrders, getOrdersSuccess } = orderSlice.actions;
export default orderSlice.reducer;

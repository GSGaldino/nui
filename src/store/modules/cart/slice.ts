import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: Array<{
    id: string;
    name: string;
    size: string;
    color: string;
    paymentMethod: string;
    type: string;
    thumbnailUrl: string;
  }>;
}

const INITIAL_STATE: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      cartSlice.caseReducers.addItemSuccess(state, action)
    },
    addItemSuccess: (state, action: PayloadAction<{ id: string, name: string, size: string, color: string, paymentMethod: string, type: string, thumbnailUrl: string }>) => {
      const { payload } = action;
      state.items.push(payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      cartSlice.caseReducers.removeItemSuccess(state, action)
    },
    removeItemSuccess: (state, action: PayloadAction<Array<{
      id: string;
      name: string;
      size: string;
      color: string;
      paymentMethod: string;
      type: string;
      thumbnailUrl: string;
    }>>) => {
      state.items = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
    finishCart: () => {},
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  addItemSuccess,
  finishCart,
  removeItemSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;

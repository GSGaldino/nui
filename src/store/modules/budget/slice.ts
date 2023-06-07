import { createSlice } from '@reduxjs/toolkit';
import mountMessage from '~/utils/mountMessage';

const INITIAL_STATE = {
  size: '',
  color: '',
  paymentMethod: '',
  name: '',
  type: '',
  thumbnailUrl: '',
  id: '',
  price: '',
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState: INITIAL_STATE,
  reducers: {
    setProperty: (state, action) => {
      const { property, value } = action.payload;
      state[property] = value;
    },
    finishBudget: (state) => {
      const {
        size,
        color,
        paymentMethod,
        name,
        type,
      } = state;

      const phone = '5511910052395';
      const message = mountMessage({
        type,
        name,
        size,
        color,
        paymentMethod,
      });

      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

      window.open(url, '_blank');
    },
  },
});

export const { setProperty, finishBudget } = budgetSlice.actions;
export default budgetSlice.reducer;

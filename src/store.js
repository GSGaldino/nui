import { createStore } from 'redux';
import cartReducer from './features/cartReducer';

const store = createStore(cartReducer);

export default store;

import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '@/types'

const INITIAL_STATE = {
  banner: [],
  collections: [],
  products: [],
  product: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    getData: () => {},
    getProducts: () => {},
    getCollections: () => {},
    getBannerSuccess: (state, action) => {
      state.banner = action.payload;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload.filter((product: IProduct) => product.categoria !== '-');
    },
    getCollectionsSuccess: (state, action) => {
      state.collections = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const {
  getData,
  getProductsSuccess,
  getCollectionsSuccess,
  getBannerSuccess,
  getProducts,
  setProduct,
  getCollections,
} = productsSlice.actions;
export default productsSlice.reducer;

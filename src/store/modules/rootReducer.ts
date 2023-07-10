import { combineReducers, AnyAction, CombinedState } from '@reduxjs/toolkit';

import user from './user/slice';
import cart from './cart/slice';
// import products from './products/slice';
// import common from './common/slice';
// import budget from './budget/slice';
// import orders from './orders/slice';

// import * as userActions from './user/slice';

const appReducer = combineReducers({
  user,
  cart,
  // products,
  // common,
  // orders,
  // budget,
});

const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
  // if (action.type === userActions.logout.type) {
  //   localStorage.removeItem('persist:@nui');
  //   return appReducer(undefined, action);
  // }

  return appReducer(state, action);
};

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>

import { all } from 'redux-saga/effects';

// import user from './user/sagas';
// import products from './products/sagas';
import cart from './cart/sagas';
// import orders from './orders/sagas';
// import budget from './budget/sagas';

export default function* rootSaga(): any {
  return yield all([
    // user,
    // products,
    cart,
    // orders,
    // budget,
  ]);
}

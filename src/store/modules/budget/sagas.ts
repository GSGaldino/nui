import {
  all,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';

import * as actions from './slice';
import * as orderActions from '~/store/modules/orders/slice';

function* finishBudget() {
  const budget = yield select((state) => state.budget);

  yield put(orderActions.createOrder({
    items: [budget],
  }));
}

export default all([
  takeLatest(actions.finishBudget.type, finishBudget),
]);

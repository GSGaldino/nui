import {
  all,
  takeLatest,
  select,
  put,
} from 'redux-saga/effects';

import { createStandaloneToast } from '@chakra-ui/react';

import * as orderActions from '~/store/modules/orders/slice';
import * as actions from './slice';

import message from '~/utils/mountMessageMultipleItems';

const { toast } = createStandaloneToast();

export function* addItem(action) {
  const item = action.payload;
  const { size, color, name } = item;

  const { items } = yield select((state) => state.cart);
  const exists = items.find((i) => i.name === name && i.size === size && i.color === color);

  if (exists) {
    return toast({
      isClosable: true,
      title: 'Oops',
      description: 'Item já existente no carrinho',
    });
  }

  toast({
    isClosable: true,
    title: 'Sucesso',
    description: 'Item adicionado ao carrinho',
  });
  return yield put(actions.addItemSuccess(item));
}

export function* removeItem(action: any) {
  const id = action.payload;

  const { items } = yield select((state) => state.cart);

  const exists = items.findIndex((i) => i.id === id);

  if (exists <= -1) {
    return toast({
      isClosable: true,
      title: 'Oops',
      description: 'Item não existente no carrinho',
    });
  }

  const newItems = [...items];
  newItems.splice(exists, 1);

  toast({
    isClosable: true,
    title: 'Sucesso',
    description: 'Item removido do carrinho',
  });

  return yield put(actions.removeItemSuccess(newItems));
}

export function clearCart() {
  toast({
    isClosable: true,
    title: 'Sucesso',
    description: 'Carrinho esvaziado com sucesso',
  });
}

export function* finishCart() {
  const { items } = yield select((state) => state.cart);
  const { paymentMethod } = yield select((state) => state.budget);

  if (!items.length) {
    return toast({
      isClosable: true,
      title: 'Oops',
      description: 'Carrinho vazio',
    });
  }

  const phone = '5511910052395';
  const str = message({ items, paymentMethod });
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${str}`;

  window.open(url, '_blank');

  yield put(orderActions.createOrder({
    items,
  }));
}

export default all([
  takeLatest(actions.addItem.type, addItem),
  takeLatest(actions.clearCart.type, clearCart),
  takeLatest(actions.finishCart.type, finishCart),
  takeLatest(actions.removeItem.type, removeItem),
]);

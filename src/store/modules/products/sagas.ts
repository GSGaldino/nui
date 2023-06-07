import {
  all,
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import { createStandaloneToast } from '@chakra-ui/react';
import api from '@/services/api';
import * as actions from './slice';

const { toast } = createStandaloneToast();

function* getBannerImages() {
  try {
    const { data } = yield call(api.get, '/sheets?range=banner_site');
    yield put(actions.getBannerSuccess(data.data));
  } catch (error) {
    toast({
      title: 'Erro ao carregar banner',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }
}

function* getCollections() {
  try {
    const { data } = yield call(api.get, '/sheets?range=categorias');
    yield put(actions.getCollectionsSuccess(data.data));
  } catch (error) {
    toast({
      title: 'Erro ao carregar coleções',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }
}

function* getProducts() {
  try {
    const { data } = yield call(api.get, '/sheets?range=produtos');
    yield put(actions.getProductsSuccess(data.data));
  } catch (error) {
    toast({
      title: 'Erro ao carregar produtos',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }
}

export function* getData() {
  yield call(getBannerImages);
  yield call(getCollections);
  yield call(getProducts);
}

export default all([
  takeLatest(actions.getData, getData),
  takeLatest(actions.getProducts, getProducts),
  takeLatest(actions.getCollections, getCollections),
]);

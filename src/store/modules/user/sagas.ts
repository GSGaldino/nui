import {
  all,
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import { createStandaloneToast } from '@chakra-ui/react';
import { loadingFinish, loadingStart } from '../common/slice';
import * as actions from './slice';

import history from '@/services/history';

import api from '@/services/api';

const { toast } = createStandaloneToast();

export function* register(action) {
  yield put(loadingStart());

  const {
    name,
    email,
    password,
    phone,
    birthdate,
  } = action.payload;

  try {
    const { data } = yield call(api.post, '/api/v1/user', {
      name,
      email,
      password,
      phone,
      birthdate,
    });

    yield put(actions.registerSuccess(data.user));

    toast({
      status: 'info',
      title: 'Sucesso',
      description: 'Cadastro realizado com sucesso',
      isClosable: true,
    });

    history.push('/account');
  } catch (error) {
    const message = error?.response?.data?.message;
    toast({
      status: 'error',
      title: 'Oops',
      description: message || 'Erro ao cadastrar usuário',
      isClosable: true,
    });
  } finally {
    yield put(loadingFinish());
  }
}

export function* login(action) {
  yield put(loadingStart());

  const {
    email,
    password,
  } = action.payload;

  try {
    const { data } = yield call(api.post, '/api/v1/user/login', {
      email,
      password,
    });

    yield put(actions.registerSuccess(data.user));

    toast({
      status: 'info',
      title: 'Sucesso',
      description: 'Login realizado com sucesso',
      isClosable: true,
    });

    history.push('/account');
  } catch (error) {
    const message = error?.response?.data?.message;
    toast({
      status: 'error',
      title: 'Oops',
      description: message || 'Erro no login',
      isClosable: true,
    });
  } finally {
    yield put(loadingFinish());
  }
}

export function* logout() {
  yield put(loadingStart());

  try {
    history.push('/');
    window.scrollTo(0, 0);

    toast({
      isClosable: true,
      title: 'Sucesso',
      description: 'Logout feito com sucesso',
    });
  } catch (error) {
    toast({
      isClosable: true,
      status: 'error',
      title: 'Oops',
      description: 'Erro ao deslogar',
    });
  } finally {
    yield put(loadingFinish());
  }
}

export function* continueWithGoogle(action) {
  yield put(loadingStart());
  const { name, email, password } = action.payload;

  try {
    const { data } = yield call(api.post, '/api/v1/user/continue-with-google', {
      isGoogleAccount: true,
      password,
      email,
      name,
    });

    yield put(actions.continueWithGoogleSuccess(data.user));

    toast({
      status: 'info',
      title: 'Sucesso',
      description: 'Login realizado com sucesso',
      isClosable: true,
    });

    history.push('/account');
  } catch (error) {
    const message = error?.response?.data?.message;
    toast({
      status: 'error',
      title: 'Oops',
      description: message || 'Erro no login',
      isClosable: true,
    });
  } finally {
    yield put(loadingFinish());
  }
}

export default all([
  takeLatest(actions.register.type, register),
  takeLatest(actions.login.type, login),
  takeLatest(actions.logout.type, logout),
  takeLatest(actions.continueWithGoogle.type, continueWithGoogle),
]);

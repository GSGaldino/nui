import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { CombinedState } from '@reduxjs/toolkit';

export default (reducers: CombinedState<any>) => {
  const persistedReducer = persistReducer({
    key: '@nui',
    storage,
    whitelist: ['user', 'cart'],
  }, reducers);

  return persistedReducer;
};

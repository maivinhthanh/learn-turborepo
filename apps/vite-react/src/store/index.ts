import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { Reducer } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { RESET_STATE_ACTION_TYPE } from './actions/resetState';
import { unauthenticatedMiddleware } from './middleware/unauthenticatedMiddleware';
import { createReduxEnhancer } from '@sentry/react';
import authSlice, { authReducer } from '../modules/auth/authSlice';

const reducers = {
  [authSlice.name]: authReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

const sentryReduxEnhancer = createReduxEnhancer({
  // Optionally pass options listed below
  configureScopeWithState: (scope, state: RootState) => {
    // Set tag if the user is using imperial units.
    // if (state.auth && state.auth.user) {
    //   const { _id: id, email, name: username } = state.auth.user;
    //   scope.setUser({
    //     id,
    //     email,
    //     username,
    //   });
    // }
  },
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([unauthenticatedMiddleware]),
  enhancers: [sentryReduxEnhancer],
  // devTools: !__prod__,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

import { put } from 'redux-saga/effects';

import { navigate } from '~/services/navigation';

import { Creators as SignInActions } from '~/store/ducks/signIn';

export function* signIn(action) {
  try {
    const { username } = action.payload;

    yield put(SignInActions.signInSuccess(username));

    navigate('Game');
  } catch (err) {
    yield put(SignInActions.signInFailure());
  }
}

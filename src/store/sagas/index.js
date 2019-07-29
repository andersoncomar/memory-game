import { all, takeLatest } from 'redux-saga/effects';

import { Types as SignInTypes } from '~/store/ducks/signIn';
import { signIn } from './signIn';

import { Types as GameTypes } from '~/store/ducks/game';
import { loadGame, newGame, score, loadScore } from './game';

export default function* rootSaga() {
  yield all([
    takeLatest(SignInTypes.REQUEST, signIn),
    takeLatest(GameTypes.LOAD_SHUFFLE_REQUEST, loadGame),
    takeLatest(GameTypes.NEW_GAME, newGame),
    takeLatest(GameTypes.SCORE_REQUEST, score),
    takeLatest(GameTypes.SCORE_LOAD_REQUEST, loadScore),
  ]);
}

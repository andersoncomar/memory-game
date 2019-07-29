import { put, select, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import shuffle from 'shuffle-array';

import { navigate } from '~/services/navigation';

import { Creators as GameActions } from '~/store/ducks/game';

import allColors from '~/assets/tmp/cardsColors.json';

const NUM_BOXES = 20;

export function* loadGame() {
  try {
    const randomBox = Array(NUM_BOXES)
      .fill()
      .map((b, i) => {
        return {
          id: i,
          backgroundColor: allColors[i],
          showState: 0,
        };
      });

    const cards = shuffle(randomBox);

    yield put(GameActions.hidingAllRequest(cards));
  } catch (err) {
    yield put(GameActions.failureRequest());
  }
}

export function* score() {
  try {
    const { numTurns } = yield select(state => state.game);
    const { username } = yield select(state => state.signIn);

    const newScore = {
      id: new Date().getTime(),
      username,
      numTurns,
    };

    const existHighScores = yield call(
      [AsyncStorage, 'getItem'],
      '@memorygame:highScores'
    );

    let highScores = JSON.parse(existHighScores);

    if (!highScores) highScores = [];

    highScores.push(newScore);

    const scoreResponse = yield call(
      [AsyncStorage, 'setItem'],
      '@memorygame:highScores',
      JSON.stringify(highScores)
    );

    yield put(GameActions.registerScore(scoreResponse));

    yield put(GameActions.newGame());

    navigate('SignIn');
  } catch (err) {
    yield put(GameActions.failureRequest());
  }
}

export function* loadScore() {
  const existHighScores = yield call(
    [AsyncStorage, 'getItem'],
    '@memorygame:highScores'
  );

  let highScores = JSON.parse(existHighScores);

  if (!highScores) highScores = [];

  yield put(GameActions.registerScore(highScores));
}

export function* newGame() {
  yield put(GameActions.loadShuffleRequest());
}

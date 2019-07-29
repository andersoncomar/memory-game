import { combineReducers } from 'redux';

import game from './game';
import signIn from './signIn';

export default combineReducers({
  game,
  signIn,
});

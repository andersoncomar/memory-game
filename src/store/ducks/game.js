/**
 * Action Types
 */
export const Types = {
  LOAD_SHUFFLE_REQUEST: 'game/LOAD_SHUFFLE_REQUEST',
  HIDING_ALL_REQUEST: 'game/HIDING_ALL_REQUEST',

  HIDING_REQUEST: 'game/HIDING_REQUEST',
  SHOWING_REQUEST: 'game/SHOWING_REQUEST',
  MATCHED_REQUEST: 'game/MATCHED_REQUEST',

  INCREMENT_TURN: 'game/INCREMENT_TURN',
  INCREMENT_PAIR: 'game/INCREMENT_PAIR',

  NEW_GAME: 'game/NEW_GAME',
  SCORE_REQUEST: 'game/SCORE_REQUEST',
  SCORE_LOAD_REQUEST: 'game/SCORE_LOAD_REQUEST',
  REGISTER_SCORE: 'game/REGISTER_SCORE',

  SUCCESS: 'game/ADD_SUCCESS',
  FAILURE: 'game/ADD_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  cards: [],
  highScores: [],
  numTurns: 0,
  matchedPairs: 0,
  HIDING: 0,
  SHOWING: 1,
  MATCHED: 2,
};

export default function game(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.HIDING_ALL_REQUEST:
      return { ...state, cards: action.payload.cards };
    case Types.HIDING_REQUEST:
      return {
        ...state,
        cards: state.cards.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              showState: state.HIDING,
            };
          }

          return item;
        }),
      };
    case Types.SHOWING_REQUEST:
      return {
        ...state,
        cards: state.cards.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              showState: state.SHOWING,
            };
          }

          return item;
        }),
      };
    case Types.MATCHED_REQUEST:
      return {
        ...state,
        cards: state.cards.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              showState: state.MATCHED,
            };
          }

          return item;
        }),
      };
    case Types.SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    case Types.INCREMENT_TURN:
      return { ...state, numTurns: state.numTurns + 1 };
    case Types.INCREMENT_PAIR:
      return { ...state, matchedPairs: state.matchedPairs + 1 };
    case Types.NEW_GAME:
      return { ...state, matchedPairs: 0, numTurns: 0 };
    case Types.REGISTER_SCORE:
      return {
        ...state,
        highScores: action.payload.highScores,
        matchedPairs: 0,
        numTurns: 0,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  loadShuffleRequest: () => ({
    type: Types.LOAD_SHUFFLE_REQUEST,
  }),

  hidingAllRequest: cards => ({
    type: Types.HIDING_ALL_REQUEST,
    payload: { cards },
  }),

  hidingRequest: id => ({
    type: Types.HIDING_REQUEST,
    payload: { id },
  }),

  showingRequest: id => ({
    type: Types.SHOWING_REQUEST,
    payload: { id },
  }),

  matchedRequest: id => ({
    type: Types.MATCHED_REQUEST,
    payload: { id },
  }),

  incrementTurn: () => ({
    type: Types.INCREMENT_TURN,
  }),

  incrementPair: () => ({
    type: Types.INCREMENT_PAIR,
  }),

  failureRequest: () => ({
    type: Types.FAILURE,
  }),

  newGame: () => ({
    type: Types.NEW_GAME,
  }),

  scoreLoadRequest: () => ({
    type: Types.SCORE_LOAD_REQUEST,
  }),

  scoreRequest: () => ({
    type: Types.SCORE_REQUEST,
  }),

  registerScore: highScores => ({
    type: Types.REGISTER_SCORE,
    payload: { highScores },
  }),
};

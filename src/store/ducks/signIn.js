/**
 * Action Types
 */
export const Types = {
  REQUEST: 'signIn/REQUEST',
  SUCCESS: 'signIn/SUCCESS',
  FAILURE: 'signIn/FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  username: null,
  loading: false,
};

export default function signIn(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  signInRequest: username => ({
    type: Types.REQUEST,
    payload: { username },
  }),

  signInSuccess: username => ({
    type: Types.SUCCESS,
    payload: { username },
  }),

  signInFailure: () => ({
    type: Types.FAILURE,
  }),
};

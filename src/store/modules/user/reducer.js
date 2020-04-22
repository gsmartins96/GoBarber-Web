import producer from 'immer';

const INITAL_STATE = {
  profile: null,
};

export default function user(state = INITAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return producer(state, (draft) => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}

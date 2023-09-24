import { createStore } from "redux";

const initialState = {
  cookies: 0,
};

function cookieReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_COOKIE":
      return { ...state, cookies: state.cookies + 1 };
    default:
      return state;
  }
}

const store = createStore(cookieReducer);

export default store;

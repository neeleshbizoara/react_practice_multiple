import {
  ActionTypes,
  INCREMENT,
  DECREMENT,
  INCREASE,
  TOGGLEDISPLAY,
} from "./actions";

export interface AppState {
  count: number;
  showCounter: boolean;
}

const initialState: AppState = {
  count: 0,
  showCounter: true,
};

const reducer = (state = initialState, action: ActionTypes): AppState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + action.amount };
    case TOGGLEDISPLAY:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

export default reducer;

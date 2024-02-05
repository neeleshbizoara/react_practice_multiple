export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREASE = "INCREASE";
export const TOGGLEDISPLAY = "TOGGLEDISPLAY";

// Action Interfaces
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

interface IncreaseAction {
  type: typeof INCREASE;
  amount: number;
}

interface ToggelDispalyAction {
  type: typeof TOGGLEDISPLAY;
  showCounter: boolean;
}

export type CounterActionTypes =
  | IncrementAction
  | DecrementAction
  | IncreaseAction
  | ToggelDispalyAction;

// Action Creators
export const increment = (): IncrementAction => ({
  type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
});

export const increase = (amountToIncrease: number): IncreaseAction => ({
  type: INCREASE,
  amount: amountToIncrease,
});

export const toggelDisplay = (toggleCounterDisplay: boolean): ToggelDispalyAction => ({
  type: TOGGLEDISPLAY,
  showCounter: toggleCounterDisplay,
});

// otherActions
export const RESET = "RESET";

interface ResetAction {
  type: typeof RESET;
}

export type OtherActionTypes = ResetAction;

export const reset = (): ResetAction => ({
  type: RESET,
});

// Combine action types
export type ActionTypes = CounterActionTypes | OtherActionTypes;

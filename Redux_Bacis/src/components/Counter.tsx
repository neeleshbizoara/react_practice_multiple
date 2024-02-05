import classes from "./Counter.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/reducer";
// import { Component, ReactNode } from "react";


const Counter = () => {
  const dispatch = useDispatch();
  // const state:AppState = useSelector((state: AppState) => state);
  const counter = useSelector((state: AppState) => state.count);
  const toggle = useSelector((state: AppState) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increaseHandler = () => {
    dispatch({type: 'INCREASE', amount: 5})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLEDISPLAY'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* {state.showCounter && <div className={classes.value}>{state.count}</div>} */}
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

/*It's not working need to fix the issue with class component 
class Counter extends Component {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
   this.props.decrement();
  };

  toggleCounterHandler = () => {};

  render(): ReactNode {
      return (<main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>)
  }
}
const mapStateToProps = state => {
  return {
    counter: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Counter); */

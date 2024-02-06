import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state =>  state.cart.totalQuantity)

  function handleToggle() {
    dispatch(uiActions.toggle());
  }

  return (
    <button onClick={handleToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

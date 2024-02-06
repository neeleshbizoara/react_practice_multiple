import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-action-creator";

let isInitial = true;

function App() {
  const uiStore = useSelector((state) => state.ui);
  const cartStore = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cartStore.changed) {
      dispatch(sendCartData(cartStore));
    }
    
  }, [cartStore, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {uiStore.cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

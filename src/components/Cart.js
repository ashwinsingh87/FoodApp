import { useSelector } from "react-redux";
import CardContainer from './CardContainer'
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);
  return (
    <>
      <h1>Cart - {cartItems.length} items</h1>

      <CardContainer {...cartItems[0]}/> 
    </>
  );
};

export default Cart;

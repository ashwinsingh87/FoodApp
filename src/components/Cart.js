import { useSelector } from "react-redux";
import CardContainer from './CardContainer'
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartTotal = () => {
    var total = 0;
      cartItems.map((item) => total += item.price )
    return total/100
  }
  return (
    <>
    <div className="flex justify-between mt-8 mb-4 ml-8 sm:flex-col mr-16 text-lg font-medium">

      <h1  >Cart - {cartItems.length} items</h1>
      <h1>Grand Total = ₹ {cartTotal()}
      </h1>
    </div>
      {cartItems.length == 0 ? null : (
        cartItems.map((item =>
          <CardContainer {...item} />
        ))

      )
      }
    </>
  );
};

export default Cart;

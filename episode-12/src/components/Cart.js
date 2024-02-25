import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const restaurant = useSelector((store) => store.cart.restaurant);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const { name, areaName, cloudinaryImageId } = restaurant;

  return (
    <div className="w-6/12 m-auto">
      {items.length !== 0 ? (
        <div>
          <p className="text-center my-6 border-b-2 border-black p-4 font-bold text-lg">
            Cart
          </p>
          <div className="p-10">
            <div className="flex">
              <img
                className="w-24 h-24 object-cover rounded-2xl"
                alt="res-img"
                src={CDN_URL + cloudinaryImageId}
              />
              <div className="mx-4">
                <p className="font-bold text-lg">{name}</p>
                <p>{areaName}</p>
              </div>
            </div>
          </div>
          <ItemList items={items} />
          <button
            className="my-4 mx-[19rem] w-2/12 p-2 rounded-md bg-black text-white"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <div className="text-center m-20 font-bold text-lg">
          <p>Cart is empty!!</p>
          <p>Add items to the cart!!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

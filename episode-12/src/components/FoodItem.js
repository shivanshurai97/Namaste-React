import { useDispatch } from "react-redux";
import { FOOD_CDN_URL } from "../utils/constants";
import { addItem, setRestaurant } from "../utils/cartSlice";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const FoodItem = ({ item }) => {
  const dispatch = useDispatch();

  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const restaurant = resData?.cards[0]?.card?.card;

  console.log(restaurant);

  const handleClick = (item) => {
    dispatch(setRestaurant(restaurant));
    dispatch(addItem(item));
  };

  return (
    <div className=" px-1 pt-3 pb-6 flex justify-between border-b border-solid">
      <div className="max-w-xl">
        <p className="m-1 text-base font-medium">{item.card.info.name} </p>{" "}
        <p className="mx-1 mb-3 mt-1 text-base font-medium">
          {" "}
          ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
        </p>
        <p className="m-1 text-sm font-light">{item.card.info.description}</p>
      </div>
      <div>
        <button
          className="px-6 py-1 mt-[70px] mx-4 absolute shadow-md bg-white font-semibold text-green-300 rounded-md"
          onClick={() => handleClick(item)}
        >
          Add+
        </button>
        <img
          className="w-[118px] h-24 object-cover rounded-md"
          alt="food-img"
          src={FOOD_CDN_URL + item.card.info.imageId}
        />
      </div>
    </div>
  );
};

export default FoodItem;

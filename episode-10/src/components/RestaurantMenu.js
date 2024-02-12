import useRestaurantMenu from "../utils/useRestaurantMenu";
import { getUniqueItemCards } from "../utils/functions";
import FoodItem from "./FoodItem";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer />; //Early Return

  const { name, cuisines, costForTwoMessage, sla } =
    resMenu?.cards[0]?.card?.card?.info;

  const { slaString } = sla;

  const items = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const allUniqueItemCards = getUniqueItemCards(items);

  return (
    <div className="px-80 py-10">
      <div className="justify-between p-2 border-b-4 border-solid border-black">
        <div className="p-1">
          <p className="my-2 text-xl font-bold font-sans">{name}</p>
        </div>
        <div className="p-2 font-light flex justify-between">
          <p>{cuisines.join(", ")}</p>
          <p>{slaString.toLowerCase()}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>

      <div className="p-2">
        <div className="m-2 p-1 text-center text-lg font-bold border-b-2 border-double border-black">
          Menu
        </div>
        {allUniqueItemCards.map((item) => (
          <FoodItem key={item.card.info.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

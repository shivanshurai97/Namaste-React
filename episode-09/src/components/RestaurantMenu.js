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
    <div className="res-details">
      <div className="res-header">
        <div className="res-name">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="res-detail">
          <p>{slaString}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>

      <div className="res-menu">
        <div className="menu-header">Menu</div>
        {allUniqueItemCards.map((item) => (
          <FoodItem key={item.card.info.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // this state stores the index of the children that has been clicked
  const [showItems, setShowItems] = useState(null);

  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer />; //Early Return

  console.log(resMenu);
  const { name, cuisines, costForTwoMessage, sla } =
    resMenu?.cards[2]?.card?.card?.info;

  const { slaString } = sla;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

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
        <div className="bg-[#f0f0f0] m-2">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showItems ? true : false}
              setShowItems={() => {
                index === showItems ? setShowItems(null) : setShowItems(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

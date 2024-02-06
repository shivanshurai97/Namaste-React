import { generateProxyUrl, MENU_URL } from "../utils/constants";
import FoodItem from "./FoodItem";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(generateProxyUrl(MENU_URL + resId));
    const json = await data.json();
    setResData(json.data);
  };

  if (resData === null) return <Shimmer />; //Early Return

  const { name, cuisines, costForTwoMessage, sla } =
    resData?.cards[0]?.card?.card?.info;

  const { slaString } = sla;

  const items = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // Recursive function to extract all the itemCards in an object at any nested level
  const extractItemCards = (object) => {
    let result = [];
    if (object.itemCards) {
      result = result.concat(object.itemCards);
    }
    for (const key in object) {
      if (typeof object[key] === "object") {
        result = result.concat(extractItemCards(object[key]));
      }
    }
    return result;
  };

  // Extract all itemCards from the items list using the recursive function
  const allItemCards = items.reduce((acc, currentItem) => {
    return acc.concat(extractItemCards(currentItem));
  }, []);

  // Function to filter out duplicates based on the item name
  const filterDuplicates = (list, propertyName) => {
    const uniqueObjects = [];
    const seenValues = new Set();
    for (const obj of list) {
      const itemName = obj.card.info[propertyName];
      const isLastCharAlphabet = /[a-zA-Z]/.test(
        itemName.charAt(itemName.length - 1)
      );
      var propertyValue = itemName;
      if (!isLastCharAlphabet) {
        propertyValue = itemName.slice(0, -1);
      }
      if (!seenValues.has(propertyValue)) {
        uniqueObjects.push(obj);
        seenValues.add(propertyValue);
      }
    }
    return uniqueObjects;
  };

  const allUniqueItemCards = filterDuplicates(allItemCards, "name");

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

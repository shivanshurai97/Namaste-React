import { useState, useEffect } from "react";
import { RESTAURANTS_DATA_URL, generateProxyUrl } from "./constants";

// Custom hook to get the restaurants data
const useRestaurantsList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(generateProxyUrl(RESTAURANTS_DATA_URL));
    const json = await data.json();
    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      // Optional Chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [listOfRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurantsList;

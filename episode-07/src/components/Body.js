import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_DATA_URL, generateProxyUrl } from "../utils/constants";

const Body = () => {
  // local State Variable useState
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(useState());

  // useEffect - making api calls inside this
  useEffect(() => {
    fetchData();
  }, []);

  //live api call to get restaurants data
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

  //Conditional Rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-section">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurants or Cuisines ..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText) ||
                  res.info.cuisines.join(" ").toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

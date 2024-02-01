import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
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
            setListOfRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

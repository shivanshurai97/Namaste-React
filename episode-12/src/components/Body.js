import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurantsList();

  const [searchText, setSearchText] = useState("");

  // Context Example
  // const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  // Higher Order Component UseCase - Top Rated Label
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

  if (onlineStatus === false) {
    return (
      <div className="offline">
        <h1>Looks like you're offline !!</h1>
        <h2>Please check your internet connection and try again !!</h2>
      </div>
    );
  }

  //Conditional Rendering
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="my-3 px-14 py-3 flex">
        <div className="mr-5 ml-3">
          <input
            type="text"
            className="w-72 ml-7 mr-3 p-1 border border-black rounded-lg"
            placeholder="Search Restaurants or Cuisines ..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
            }}
          ></input>
          <button
            className="border border-black px-2 py-1 bg-gray-50 rounded-lg"
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
          className="border border-black p-[5px] mx-[10px] bg-gray-50 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        {/* Code to show how to bind logged in user with the input field through context */}
        {/* <div>
          <input
            type="text"
            className="w-72 ml-7 mr-3 p-1 border border-black rounded-lg"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div> */}
      </div>
      <div className="flex flex-wrap px-16">
        {filteredRestaurants.map((restaurant) =>
          restaurant.info.avgRating > 4 ? (
            <RestaurantCardTopRated
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;

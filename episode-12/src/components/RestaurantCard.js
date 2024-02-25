import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { id, cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="m-8 p-2 w-64 h-96 bg-[#f0f0f0] rounded-2xl hover:cursor-pointer hover:border hover:border-black hover:border-solid">
      <Link to={"/restaurants/" + id}>
        <img
          className="w-60 h-44 object-cover rounded-2xl"
          alt="res-img"
          src={CDN_URL + cloudinaryImageId}
        />
        <p className="text-xl font-bold mx-1 my-4 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </p>
        <p className="m-1 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </p>
        <p className="m-1 font-medium">{costForTwo}</p>
        <p className="m-1 font-medium">{avgRating} stars</p>
        <p className="m-1 font-medium">{deliveryTime} mins</p>
      </Link>
    </div>
  );
};

//Higher Order Component
export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-8 p-2 rounded-tl-2xl">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

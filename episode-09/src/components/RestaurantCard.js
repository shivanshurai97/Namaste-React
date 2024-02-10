import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const { id, cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card">
      <Link className="res-link" to={"/restaurants/" + id}>
        <img
          className="res-logo"
          alt="res-img"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;

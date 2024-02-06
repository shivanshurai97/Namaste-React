import { FOOD_CDN_URL } from "../utils/constants";

const FoodItem = ({ item }) => {
  return (
    <div className="menu-items">
      <div className="item">
        <h3>{item.card.info.name} </h3>{" "}
        <p className="item-price">
          {" "}
          Rs {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
        </p>
        <p className="item-desc">{item.card.info.description}</p>
      </div>
      <img
        className="food-logo"
        alt="food-img"
        src={FOOD_CDN_URL + item.card.info.imageId}
      />
    </div>
  );
};

export default FoodItem;

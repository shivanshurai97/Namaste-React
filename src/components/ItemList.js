import FoodItem from "./FoodItem";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <FoodItem key={item.card.info.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;

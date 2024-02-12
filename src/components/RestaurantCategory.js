import ItemList from "./ItemList";

// Controlled Component
const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  // state to manage the toggle behaviour of accordion
  // this state has been lifted up to its parent
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    //invokes this function to let the parent know that it has been clicked
    setShowItems();
  };

  return (
    <div className="my-3 p-2 shadow-xl bg-white">
      {/* Accordion Header */}
      <div
        className="flex justify-between p-2 font-bold text-lg cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>˅</span>
      </div>
      {/*Accordion Body*/}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;

// function to get the unique food item cards present in the items list
export function getUniqueItemCards(items) {
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

  // Extract all itemCards from the items list using the recursive function
  const allItemCards = items.reduce((acc, currentItem) => {
    return acc.concat(extractItemCards(currentItem));
  }, []);

  const allUniqueItemCards = filterDuplicates(allItemCards, "name");

  return allUniqueItemCards;
}

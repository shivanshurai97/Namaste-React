import { useEffect, useState } from "react";
import { MENU_URL, generateProxyUrl } from "./constants";

// Custom hook to fetch the menu of the restaurant
const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(generateProxyUrl(MENU_URL + resId));
    const json = await data.json();

    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;

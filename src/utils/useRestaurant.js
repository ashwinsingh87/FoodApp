import React from "react";
import { useState, useEffect } from "react";
function useRestaurantMenu(resId) {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    MenuApiCall();
  }, []);

  async function MenuApiCall() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.3731673&lng=78.1350904&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
    // console.log(restaurant);
  }
  return restaurant;
}
export default useRestaurantMenu;

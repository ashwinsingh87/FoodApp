import { useState, useEffect } from "react";
function useAllRestaurant() {
  const [RestaurantList, setRestaurantList] = useState("");

  useEffect(() => {
    callBackFn();
  }, []);

  async function callBackFn() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.3731673&lng=78.1350904&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const data = json?.data?.cards[2]?.data?.data?.cards;
    setRestaurantList(data);
  }

  return RestaurantList;
}
export default useAllRestaurant;

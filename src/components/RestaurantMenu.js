import { useParams } from "react-router-dom";
import React from "react";
import { ImgLink } from "../constant";
import Shimmer from "./Shimmer ";
import useRestaurantMenu from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  const ResCardInfo = restaurant?.cards[0]?.card?.card?.info;

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex pt-16 justify-center">
      <div className="pr-10 ">
        <h1 className="text-3xl flex font-medium pb-4 justify-center">
          {ResCardInfo?.name}
        </h1>
        <img
          className="w-80 h-auto"
          src={ImgLink + ResCardInfo?.cloudinaryImageId}
        />
        <div className="flex justify-between">
          <h3 className="pt-4 pl-10">{ResCardInfo?.city}</h3>

          <h3 className="pt-4 pr-10">{ResCardInfo?.avgRating} star</h3>
        </div>
      </div>
      <div className="pl-10">
        <h1 className="text-2xl font-medium ">Menu</h1>
        <ul className="pt-4">
          {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).map(
            (items) => {
              if (items.card.card.hasOwnProperty("title"))
                return (
                  <li key={items.card.card.title}>
                    {items.card.card.title}
                    <button
                      className="bg-lime-500 p-1 text-gray-700 rounded-md m-2 border-solid border-gray-500 border-2 text-sm"
                      type="submit"
                      onClick={() => addFoodItem(restaurant)}
                    >
                      Add to cart
                    </button>
                  </li>
                );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;

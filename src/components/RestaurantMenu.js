import { useParams } from "react-router-dom";
import React from "react";
import { ImgLink } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  const ResCardInfo = restaurant?.cards[0]?.card?.card?.info;

  const dispatch = useDispatch();
  const addFoodItem = (name, price, resName) => {
    console.log(name, price, resName)
    dispatch(addItem({
      name: name,
      price: price,
      resName: resName
    }));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (

    <div className="flex pt-16 justify-center flex-col ">
      <h1 className="text-2xl md:text-xl flex font-normal  justify-center">
        <span className="bg-violet-500 md:p-1 rounded-sm hover:bg-violet-700 p-2">
          {ResCardInfo?.name}
        </span>
      </h1>
      <div className="flex justify-center ">
        <div className=" border-2 rounded-2xl md:flex-col-reverse md:items-center flex justify-center shadow-md  shadow-gray-900 border-gray-600">
          <div className="p-8">
            <h1 className="text-3xl flex justify-center font-medium ">Menu</h1>
            <ul className="pt-4">
              {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).map(
                (items, index) => {
                  if (items.card.card.hasOwnProperty("title"))
                    return (
                      <div className="mt-2 border-t-2">
                        <li className=" mt-4  " key={items.card.card.title}>
                          <span className="text-xl">

                            {items.card.card.title}
                          </span>

                          {items?.card?.card?.itemCards?.map((dishes, index) => {
                            return items.card.card.hasOwnProperty("itemBadge") ? null :
                              (<div className="flex hover:scale-105 items-center "> <span className="flex flex-col md:flex-wrap ml-5" key={index}>
                                {dishes?.card?.info?.name}

                              </span>
                                <button
                                  className="bg-lime-500 hover:scale-95 hover:bg-lime-300 p-1 text-gray-700 rounded-md m-2 border-solid border-gray-500 border-2 text-sm"
                                  type="submit"
                                  onClick={() => addFoodItem(itemName = dishes?.card?.info?.name, itemPrice = dishes?.card?.info?.price, resName = ResCardInfo?.name)}
                                >
                                  Add to cart
                                </button>
                              </div>
                              )
                          })}

                        </li>
                      </div>
                    );
                }
              )
              }
            </ul>
          </div>

          {/* restaurant info */}
          <div className="ml-4 pt-10 pr-8 md:pr-0 md:ml-2 md:mr-2">
            {ResCardInfo?.cloudinaryImageId ? (<img
              alt="Image not available"
              src={ImgLink + ResCardInfo?.cloudinaryImageId}></img>)
              :
              <img alt="Alternate Image" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r2bzgqdkeeqjcfvlbavd"></img>
            }
            {/* <img
              className="w-80 h-auto"
              src={ImgLink + ResCardInfo?.cloudinaryImageId}
            /> */}
            <div className="flex justify-between">
              <h3 className="pt-4 pl-10">{ResCardInfo?.city}</h3>

              <h3 className="pt-4 pr-10">{ResCardInfo?.avgRating} star</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default RestaurantMenu;

import { Api } from "../constant";
import React, { useState, useContext, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import HomeContainer from "./HomeContainer";
import Context from "./Context";

function FilterData(SearchInput, RestaurantList) {
  return RestaurantList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(SearchInput.toLowerCase())
  );
}
const Body = () => {
  const [SearchInput, setSearchInput] = useState("");
  const [RestaurantList, setRestaurantList] = useState("");
  const [SearchedList, setSearchedList] = useState(Api);


  useEffect(() => {
    callBackFn();
  }, []);

  async function callBackFn() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.3731673&lng=78.1350904&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const data = json?.data?.cards[0]?.data?.data?.cards;
    // console.log(json)
    setRestaurantList(data);
    setSearchedList(data);
  }

  const isOnline = useStatus();
  if (!isOnline) {
    return <h1>You're offline</h1>;
  }

  const {user, setUser} = useContext(Context);


  return RestaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>

      <div className="mt-4 mb-2 p-5 flex justify-center text-sm">
        <input
          className="border-solid border-2 p-1 rounded-l-md border-gray-200 w-72"
          type="type"
          placeholder="Search"
          value={SearchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white p-1  rounded-r-md"
          type="submit"
          onClick={() => {
            const data = FilterData(SearchInput, RestaurantList);
            setSearchedList(data);
          }}>
          Search
        </button>

        <input
          value={user.name}
          className="border-solid ml-4 rounded-md pl-1 border-black-200 border-2"
          onChange={e=>setUser({
          name :  e.target.value,
            gmail : "newuser@gmail.com"}
          )}
          ></input>
      </div>
      <div className="flex flex-wrap justify-center">
        {SearchedList?.map((x) => {
          return (
            <Link
              className="w-72 m-2 border-solid border-2 h-auto shadow-lg  "
              to={"/restaurant/" + x.data.id}
              key={x.data.id}>
              <HomeContainer {...x} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

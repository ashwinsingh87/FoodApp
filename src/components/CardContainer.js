import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";

const HomeContainer = (item) => {
  const dispatch = useDispatch();
  const HandleRemove = () => {
    dispatch(removeItem(item.name))
  }

  return (
    <div className="m-2 rounded-md shadow-md p-2 flex flex-col items-start border border-gray-400" >

      <div className="flex justify-center flex-wrap items-center sm:justify-center  sm:flex-col ">
        <div>
          <h3 className=" text-lg font-semibold">{item.name}</h3>
          <h4 className=" text-sm text-slate-500 truncate pt-1" > {item.resName}</h4>
        </div>
        <div className="flex items-center">
          <h4 className="ml-4 text-md font-normal">₹ {item.price / 100}</h4>
          <button className="ml-4 bg-lime-500 p-1 text-gray-700 rounded-md m-2 border-solid border-gray-500 border-2 text-sm"
            type="submit" onClick={() => HandleRemove()}> Remove Item</button>

        </div>
      </div>

    </div>
  );
};
export default HomeContainer;

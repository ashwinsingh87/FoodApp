import { ImgLink } from "../constant";

const HomeContainer = (props) => {
  return (
    <div 
    className="w-72 m-2 bg-pink-100 hover:bg-pink-300 border-solid border-2  shadow-lg duration-200 hover:scale-105">
      {props?.data?.cloudinaryImageId ? (<img 
        alt="Image not available"
        src={ImgLink + props?.data?.cloudinaryImageId}></img>):
        <img alt="Alternate Image" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r2bzgqdkeeqjcfvlbavd"></img>
        }
      
   
        <h3 className="pl-2 pt-3 text-lg font-semibold hover:text-violet-600">{props.data.name}</h3>
        <h4 className="pl-2 pt-1 text-md font-normal ">{props?.data?.cuisines?.join(", ")}</h4>
        <h4 className=" pl-2 text-sm text-slate-500   truncate pt-1" >Distance ({props?.data?.lastMileTravelString})</h4>
        <h4 className=" pl-2 text-sm text-slate-500  truncate pb-4">Delivery time ({props?.data?.maxDeliveryTime} min)</h4>
     
    </div>
  );
};
export default HomeContainer;

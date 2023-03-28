import { ImgLink } from "../constant";

const HomeContainer = (props) => {
  return (
    <div>
      <img 
        alt=""
        src={ImgLink + props?.data?.cloudinaryImageId}></img>
      
        <h3 className="pl-2 pt-3 text-lg font-semibold">{props?.data?.title}</h3>
        <h4 className="pl-2 pt-1 text-md font-normal">{props?.data?.cuisines?.join(", ")}</h4>
        <h4 className=" pl-2 text-sm text-slate-500 truncate pt-1" > {props?.data?.lastMileTravelString && "distance"}</h4>
        <h4 className=" pl-2 text-sm text-slate-500 truncate pb-4">Delivery time ({props?.data?.maxDeliveryTime} min)</h4>
     
    </div>
  );
};
export default HomeContainer;

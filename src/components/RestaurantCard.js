import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-full sm:w-[250px] max-w-[250px] bg-[#0f172a] border border-white/10 rounded-2xl hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-emerald-500/50 transition-all duration-300 group shadow-2xl"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          className="w-full h-[150px] object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4 text-gray-300">
        <h3 className="text-lg font-black text-white truncate group-hover:text-emerald-400 transition-colors">
          {name}
        </h3>
        <div className="h-[1px] bg-white/10 w-full"></div>

        <em className="text-xs text-gray-500 font-medium line-clamp-1 h-4 italic">
          {cuisines.join(", ")}
        </em>

        <div className="flex flex-wrap gap-y-2 mt-2">
          <h4 className="flex items-center gap-2 bg-emerald-500/10 px-2 py-1 rounded-md text-emerald-400 text-xs font-bold border border-emerald-500/20">
            <AiOutlineStar className="text-emerald-400" />
            <span>{avgRating} stars</span>
          </h4>

          <h4 className="flex items-center gap-2 ml-auto text-xs font-bold text-gray-400">
            <span>{costForTwo}</span>
          </h4>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h4 className="flex items-center gap-2 text-xs font-bold text-gray-500">
            <FiClock className="text-emerald-500" />
            <span>{sla.deliveryTime} mins</span>
          </h4>
          <h4 className="text-[10px] uppercase tracking-tighter text-gray-600 font-black">
            User: {loggedInUser}
          </h4>
        </div>
      </div>
    </div>
  );
};

// * Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute z-10 top-6 left-6 px-3 py-1 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Loader from "./Loader";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Loader />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="min-h-screen bg-[#020617] pb-20 pt-10">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Navigation Section */}
        <div className="text-left mb-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-2 font-black text-sm uppercase tracking-widest text-black bg-emerald-500 rounded-xl hover:bg-emerald-400 hover:-translate-x-2 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>

        {/* Restaurant Header Section */}
        <div className="text-center p-10 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase italic drop-shadow-md">
              {name}
            </h1>
            <p className="text-xl font-bold text-emerald-400 tracking-wide mb-6">
              {cuisines.join(", ")}
            </p>
            <div className="flex justify-center items-center gap-4">
               <span className="px-4 py-2 bg-[#0f172a] rounded-full border border-white/10 text-white font-black text-sm">
                💰 {costForTwoMessage}
               </span>
               <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/40 font-black text-sm">
                ⭐ {avgRating} Ratings
               </span>
            </div>
          </div>
          {/* Background Glow Effect */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full"></div>
        </div>

        {/* Categories Accordions */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            // Controlled Component
            <div key={category?.card?.card.title} className="bg-white/5 rounded-3xl border border-white/5 overflow-hidden hover:border-emerald-500/20 transition-colors">
                <RestaurantCategory
                  data={category?.card?.card}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                  dummy={dummy}
                />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RestaurantMenu;
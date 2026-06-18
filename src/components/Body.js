import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Loader from "./Loader";
import { RESTAURANTS_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    const resData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(resData);
    setFilteredRestaurant(resData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-white text-center mt-20 text-2xl font-bold">
        Offline Connection Error
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Loader />
  ) : (
    <div className="body bg-[#020617] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 p-6 sm:p-8 mb-8 bg-white/5 rounded-3xl border border-white/10 mt-8 mx-4">
          {/* Search Section */}
          <div className="search flex w-full md:w-auto items-center">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-wrap items-center gap-2 w-full"
            >
              <input
                type="text"
                data-testid="searchInput"
                placeholder="Search a restaurant..."
                className="px-6 py-3 bg-[#0f172a] border border-emerald-500/30 text-white rounded-l-xl focus:outline-none focus:border-emerald-500 w-full md:w-[350px] min-w-0 font-medium"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="px-8 py-3 bg-emerald-500 text-black rounded-r-xl font-black hover:bg-emerald-400 transition-all duration-300 w-full md:w-auto"
                onClick={() => {
                  const filtered = listOfRestaurants.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase()),
                  );
                  setFilteredRestaurant(filtered);
                }}
              >
                Search
              </button>
            </form>
          </div>

          {/* Total number of restaurants - UPDATED STYLE */}
          <div className="flex items-center gap-4 bg-[#0f172a] p-2 px-6 rounded-xl border border-white/10 shadow-lg">
            <h1 className="font-bold text-gray-400 text-sm uppercase tracking-tighter">
              Total Found:
            </h1>
            <span className="text-emerald-400 font-black text-xl">
              {filteredRestaurant.length}
            </span>
          </div>

          {/* Filter Button */}
          <div className="search w-full sm:w-auto">
            <button
              className="px-8 py-3 w-full sm:w-auto bg-white/10 border border-white/20 text-emerald-400 hover:bg-emerald-500 hover:text-black rounded-xl font-black transition-all duration-300"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => parseFloat(res.info.avgRating) > 4.5,
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>

          {/* User Input */}
          <div className="search flex flex-wrap items-center gap-4 bg-[#0f172a] p-2 px-4 rounded-xl border border-white/10 w-full sm:w-auto">
            <label
              htmlFor="name"
              className="font-bold text-gray-400 text-sm uppercase tracking-tighter"
            >
              User Name:
            </label>
            <input
              id="name"
              className="bg-transparent border-b-2 border-emerald-500/50 focus:border-emerald-500 outline-none text-white font-bold w-full sm:w-[150px] max-w-[200px] px-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
              className="transition-transform duration-300 hover:scale-95"
            >
              {restaurant?.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <div className="bg-[#0f172a] rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors shadow-2xl">
                  <RestaurantCard resData={restaurant?.info} />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

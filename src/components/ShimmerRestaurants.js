const ShimmerRestaurants = () => {
  return (
    <div className="body bg-[#020617] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 p-6 sm:p-8 mb-8 bg-white/5 rounded-3xl border border-white/10 mx-4">
          <div className="search flex w-full md:w-auto items-center">
            <div className="flex flex-wrap items-center gap-2 w-full">
              <div className="px-6 py-3 bg-[#0f172a] border border-emerald-500/30 rounded-l-xl w-full md:w-[350px] h-12 animate-pulse bg-gray-700"></div>
              <div className="px-8 py-3 bg-emerald-500 rounded-r-xl w-full md:w-auto h-12 animate-pulse"></div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0f172a] p-2 px-6 rounded-xl border border-white/10 h-14 w-32 animate-pulse"></div>

          <div className="search w-full sm:w-auto">
            <div className="px-8 py-3 w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl h-12 animate-pulse"></div>
          </div>

          <div className="search flex flex-wrap items-center gap-4 bg-[#0f172a] p-2 px-4 rounded-xl border border-white/10 w-full sm:w-auto h-12 animate-pulse"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="m-4 p-4 w-full sm:w-[250px] max-w-[250px] bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl animate-pulse"
            >
              <div className="overflow-hidden rounded-xl">
                <div className="w-full h-[150px] bg-gray-700 rounded-xl"></div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                <div className="h-[1px] bg-white/10 w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="flex flex-wrap gap-y-2 mt-2">
                  <div className="h-6 bg-gray-700 rounded w-24"></div>
                  <div className="h-6 bg-gray-700 rounded w-16 ml-auto"></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="h-4 bg-gray-700 rounded w-20"></div>
                  <div className="h-4 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurants;

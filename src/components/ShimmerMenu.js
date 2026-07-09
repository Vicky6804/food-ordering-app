const ShimmerMenu = () => {
  return (
    <div className="min-h-screen bg-[#020617] pb-20 pt-10">
      <div className="w-full max-w-3xl mx-auto px-4">
        {/* Navigation Section */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center px-5 py-2 rounded-xl w-32 h-10 bg-emerald-500 animate-pulse"></div>
        </div>

        {/* Restaurant Header Section */}
        <div className="text-center p-10 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl mb-12 relative overflow-hidden animate-pulse">
          <div className="relative z-10">
            <div className="h-12 bg-gray-700 rounded mb-4 w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-700 rounded mb-6 w-2/3 mx-auto"></div>
            <div className="flex justify-center items-center gap-4">
              <div className="px-4 py-2 bg-gray-700 rounded-full w-40 h-10"></div>
              <div className="px-4 py-2 bg-gray-700 rounded-full w-40 h-10"></div>
            </div>
          </div>
        </div>

        {/* Categories Accordions */}
        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-3xl border border-white/5 overflow-hidden p-6 animate-pulse"
            >
              <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, itemIndex) => (
                  <div key={itemIndex} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-700 rounded"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;

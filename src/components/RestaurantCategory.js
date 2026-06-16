import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Accordion Header */}
      <div
        className={`rounded-3xl p-6 shadow-lg border border-white/10 transition-all duration-500 ${
          showItems ? 'bg-[#0f172a] shadow-emerald-500/20' : 'bg-white/5 hover:bg-white/10'
        }`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className={`font-black text-xl ${showItems ? 'text-emerald-400' : 'text-white hover:text-white'} transition-colors duration-300`}>
            {data.title} ({data.itemCards.length})
          </span>
          <span className={`text-2xl text-gray-400 transition-transform duration-500 ${showItems ? 'rotate-180 text-emerald-400' : ''}`}>
            🔽
          </span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
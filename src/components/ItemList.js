import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { CDN_URL } from '../utils/constants';

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between p-6 m-4 bg-[#0f172a]/80 backdrop-blur-lg border border-white/5 rounded-2xl shadow-xl hover:shadow-emerald-500/15 transition-all duration-300"
        >
          <div className="w-8/12 text-left">
            <div className="py-2">
              <span className="text-white font-bold text-lg mr-2">{item.card.info.name}</span>
              <span className="text-emerald-400 font-black">
                ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium line-clamp-2 h-8">{item.card.info.description || 'Delicious and fresh!'}</p>
          </div>

          <div className="w-4/12 p-4 relative flex items-center justify-center">
            {/* Image with a subtle overlay */}
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-24 object-cover rounded-lg shadow-md border border-white/5"
            />
            {/* Add Button */}
            <button
              className="absolute bottom-[-15px] p-2.5 px-4 rounded-xl bg-emerald-500 cursor-pointer text-black font-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95 transition-all duration-300"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
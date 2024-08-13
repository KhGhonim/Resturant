import FavoriteIcon from "@mui/icons-material/Favorite";
import { ShoppingBag } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/CartSlice";

export default function CardItem({
  city,
  imageLink,
  category,
  name,
  id,
  dishType,
  Price,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      AddToCart({ id, name, category, city, imageLink, dishType, Price })
    );
  };

  return (
    <div className="max-w-[350px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 !overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
        <p className="text-sm text-gray-400">{category}</p>
      </div>
      <img
        className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
        src={imageLink}
        alt={name}
        onClick={() => {
          navigate(`/FoodArticles/${id}`);
        }}
      />
      <div className="p-6 text-gray-300">
        <p>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
      </div>
      <div className="flex items-center justify-between p-6 bg-gray-800">
        <button
          className="hover:text-red-500 transition duration-300"
          aria-label="Add to Favorites"
        >
          <FavoriteIcon />
        </button>
        <p className="text-xs text-gray-400">
          Available at <span className="text-white">{city}</span>
        </p>
        <button
          className="hover:text-blue-400 transition duration-300"
          aria-label="Add to Cart"
          onClick={handleAddToCart}
        >
          <ShoppingBag />
        </button>
      </div>
    </div>
  );
}

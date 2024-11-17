import { Box } from "@mui/material";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./loading.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/CartSlice";

export default function FoodArticles() {
  const [FoodData, setFoodData] = useState(null);
  const [Loading, setLoading] = useState(true);
  let { ArticleId } = useParams();
  const [SimilarFoodData, setSimilarFoodData] = useState([]);
  // @ts-ignore
  // const {SelectedProducts} = useSelector((state) => state.CartShop)

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BACKEND_URL}/Api/Food/${ArticleId}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodData([data]);
        setLoading(false);
      });
  }, [ArticleId]);

  useEffect(() => {
    if (FoodData?.length > 0) {
      const mainCategory = FoodData[0].category;
      fetch(`${process.env.REACT_APP_API_BACKEND_URL}/Api/Food`)
        .then((res) => res.json())
        .then((data) => {
          setSimilarFoodData(
            data.filter((item) => item.category === mainCategory)
          );
        });
    }
  }, [FoodData]);

  if (Loading) {
    return (
      <div className=" !w-full !h-screen lds-hourglass !flex !justify-center !items-center "></div>
    );
  }

  if (!Loading && FoodData) {
    return (
      <Box>
        <Helmet>
          <title>Food Article </title>
          <meta
            name="description"
            content="Discover exquisite food articles from our restaurant, where culinary delights await your taste buds."
          />
          <meta
            name="keywords"
            content="Food Article, Restaurant, Culinary Delights, Exquisite Dining"
          />

          <link rel="icon" href="/KGLogo.png" type="image/x-icon" />
        </Helmet>
        <Header />
        {/* Main Hero Section */}
        <Box className="relative bg-gray-50">
          {/* Hero Image */}
          <Box className="relative w-full h-[60vh]">
            <img
              src="https://www.nusr-et.com.tr/Resources/Dish/ImageFile/2_m.jpg" // Replace with dynamic image
              alt="Restaurant Hero"
              className="w-full h-full object-cover brightness-75"
            />
            <Box className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-lg">
                Exquisite Dining Awaits
              </h1>
            </Box>
          </Box>

          {/* Food Details */}
          <Box className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
            {FoodData.map((item) => (
              <Box
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 bg-white shadow-md rounded-lg overflow-hidden"
              >
                {/* Food Image */}
                <Box className="relative">
                  <img
                    src={item.imageLink}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Box className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                    ${item.price || "89.00"}
                  </Box>
                </Box>

                {/* Food Information */}
                <Box className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {item.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {item.description ||
                      "A carefully curated dish crafted with the freshest ingredients and utmost precision to deliver a one-of-a-kind culinary experience."}
                  </p>
                  <p className="text-green-600 font-semibold mb-4">In Stock</p>
                  <button
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition"
                    onClick={() => dispatch(AddToCart(item))}
                  >
                    Add to Cart
                  </button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Similar Dishes Section */}
        <Box className="bg-gray-100 py-16">
          <Box className="max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
              Explore Similar Dishes
            </h2>
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SimilarFoodData?.slice(0, 3)?.map((food) => (
                <a
                  href={`/FoodArticles/${food.id}`}
                  key={food.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  {/* Food Image */}
                  <Box className="relative h-48">
                    <img
                      src={food.imageLink}
                      alt={food.name}
                      className="w-full h-full object-cover"
                    />
                  </Box>
                  {/* Food Details */}
                  <Box className="p-6">
                    <h3 className="text-xl font-bold text-gray-700">
                      {food.name}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      ${food.price || "69.00"}
                    </p>
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                      onClick={() => dispatch(AddToCart(food))}
                    >
                      Add to Cart
                    </button>
                  </Box>
                </a>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

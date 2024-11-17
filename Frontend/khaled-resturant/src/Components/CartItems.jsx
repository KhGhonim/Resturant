import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CartItems() {
  const [RecommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BACKEND_URL}/Api/Food`).then((res) => {
      //${process.env.REACT_APP_API_BACKEND_URL}
      setRecommendedProducts(res.data);
    });
  }, []);

  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);
  const navigate = useNavigate();
  var subtotal = 0;
  return (
    <section className="bg-white text-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300"
        >
          <ArrowBack className="w-5 h-5 mr-2" />
          Back to Shopping
        </button>

        <div className="bg-gray-50 rounded-lg shadow-xl p-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-md text-gray-500 mt-2">
              Review your selected items before checkout.
            </p>
          </header>

          {/* Cart Items Section */}
          <div className="space-y-8">
            {SelectedProducts.map((item, index) => {
              const itemTotal = item.Price * item.quantity;
              subtotal += itemTotal;

              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white border-b border-gray-200 py-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={item.imageLink}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-400">
                        {item.dishType} • {item.city}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-800">
                      £{itemTotal.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-400">
                      Qty: {item.quantity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Summary Section */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">Subtotal</div>
              <div className="text-2xl font-bold text-gray-900">
                £{subtotal.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Continue Shopping Button */}
          <div className="mt-8 text-center flex justify-between items-center gap-5">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white rounded-lg px-8 py-3 text-lg font-semibold hover:bg-blue-500 transition-all duration-300"
            >
              Continue Shopping
            </a>

            <a
              href="/Checkout"
              className="inline-block bg-emerald-600 text-white rounded-lg px-8 py-3 text-lg font-semibold hover:bg-emerald-500 transition-all duration-300"
            >
              Check Out
            </a>
          </div>

          {/* Recommendations Section (New) */}
          <div className="mt-16 bg-gray-100 p-2 md:p-4 lg:p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Recommended for You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RecommendedProducts?.map((recommendation, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
                >
                  <div className="relative">
                    <img
                      src={recommendation.imageLink}
                      alt={recommendation.name}
                      className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-2 text-xs font-bold uppercase tracking-wider shadow-lg">
                      {recommendation.dishType}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200">
                    {recommendation.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {recommendation.city}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900">
                      £{recommendation.Price}
                    </div>
                    <a
                      href={`/FoodArticles/${recommendation.id}`}
                      className="text-blue-600 hover:text-blue-500 font-medium text-sm transition-all duration-200"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

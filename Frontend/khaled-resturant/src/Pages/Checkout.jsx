import { useSelector } from "react-redux";
import Header from "../Components/Header";

export default function Checkout() {
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);
  var subtotal = 0;
  const ProductQ = (item) => {
    const MyProductQ = SelectedProducts.find((itemx) => {
      return itemx.id === item.id;
    });
    return MyProductQ ? MyProductQ.quantity : 0;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 py-24 md:py-14 lg:py-12 px-8 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Order Summary Section */}
        <div className="w-full md:w-1/2 mx-auto bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Order Summary
          </h2>
          <div className="space-y-6">
            {SelectedProducts.map((item, index) => {
              const itemTotal = item.Price * item.quantity;
              subtotal += itemTotal;
              return (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.imageLink}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {ProductQ(item)} x {item.name}
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    ${itemTotal.toFixed(2)}
                  </span>
                </div>
              );
            })}

            {/* Total Section */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800">Total</h3>
              <span className="text-xl font-bold text-teal-600">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Information Section */}
        <div className="w-full md:w-1/2 mx-auto bg-white p-8 mt-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Payment Information
          </h2>
          <form className="space-y-6">
            {/* Card Number */}
            <div>
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 transition"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="expiry-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry-date"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 transition"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 transition"
                  placeholder="123"
                />
              </div>
            </div>

            {/* Cardholder Name */}
            <div>
              <label
                htmlFor="cardholder-name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardholder-name"
                className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 transition"
                placeholder="John Doe"
              />
            </div>

            {/* Payment Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-4 rounded-xl text-xl font-semibold hover:bg-teal-700 transition duration-200"
            >
              Pay ${subtotal.toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

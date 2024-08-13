import { useSelector } from "react-redux";

export default function Checkout() {
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);
  var subtotal = 0;
  let Itemtotal = 0;

  const ProductQ = (item) => {
    const MyProductQ = SelectedProducts.find((itemx) => {
      return itemx.id === item.id;
    });
    return MyProductQ ? MyProductQ.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4 flex flex-col md:flex-row justify-center items-center gap-0 md:gap-9">
      <div className="w-full md:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>
        <div className="space-y-4">
          {SelectedProducts.map((item, index) => {
            const itemTotal = item.Price * item.quantity;
            subtotal += itemTotal;
            Itemtotal += item.Price;
            return (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm"
              >
                <div>
                  <img
                    src={item.imageLink}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-700">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">
                    {ProductQ(item)}x {item.name}
                  </p>
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  ${Itemtotal}
                </span>
              </div>
            );
          })}

          <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
            <h3 className="text-xl font-semibold text-gray-800">Total</h3>
            <span className="text-xl font-bold text-gray-900">${subtotal}</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mx-auto bg-white p-6 mt-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Payment Information
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="card-number"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="expiry-date"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry-date"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                placeholder="123"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="cardholder-name"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholder-name"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              placeholder="John Doe"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Pay $14.47
          </button>
        </form>
      </div>
    </div>
  );
}

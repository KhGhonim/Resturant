import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartItems() {
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);
  const navigate = useNavigate();
  var subtotal = 0;
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-md px-5 py-2 focus:outline-none"
        >
          <ArrowBack />
          Go Home
        </button>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold">Shopping Cart</h1>
            <p className="text-gray-400 mt-2">
              Review your items before checkout
            </p>
          </header>

          <div className="space-y-6">
            {SelectedProducts.map((item, index) => {
              const itemTotal = item.Price * item.quantity - 50;
              subtotal += itemTotal;

              return (
                <div
                  key={item.id}
                  className="flex items-center bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors duration-200"
                >
                  <img
                    src={item.imageLink}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />

                  <div className="flex-grow ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="text-sm text-gray-300 mt-1">
                      <span>{item.dishType}</span> • <span>{item.city}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-bold">£{itemTotal}</div>
                    <div className="text-sm text-gray-400">
                      Qty: {item.quantity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">Subtotal</div>
              <div className="text-2xl font-bold">£{subtotal}</div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white rounded-lg px-6 py-3 text-lg transition hover:bg-blue-500 focus:outline-none"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

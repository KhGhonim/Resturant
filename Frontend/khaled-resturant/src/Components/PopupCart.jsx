import { Box, Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Add, CloseOutlined } from "@mui/icons-material";
import { DecreaseQuantity, IncreaseQuantity } from "../Redux/CartSlice";
export default function PopupCart({ HandleCartCloser }) {
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);
  const dispatch = useDispatch();

  const ProductQ = (item) => {
    const MyProductQ = SelectedProducts.find((itemx) => {
      return itemx.id === item.id;
    });
    return MyProductQ ? MyProductQ.quantity : 0;
  };


  return (
    <Box className="relative">
      <div
        className="fixed inset-y-0 z-50 w-full max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-2xl px-4 py-8 sm:px-6 lg:px-8 transform sm:-translate-x-1/2 sm:translate-y-1/2"
        aria-modal="true"
        role="dialog"
        style={{ top: '50%',  transform: 'translate(-80%, -85%)' }}
      >
        <IconButton
          onClick={HandleCartCloser}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-500 transition"
        >
          <CloseOutlined />
        </IconButton>

        {SelectedProducts.map((item) => (
          <div key={item.id} className="mt-4 space-y-6">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img
                  src={item.imageLink}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>

                  <dl className="mt-1 text-xs text-gray-500">
                    <div>
                      <dt className="inline font-medium">Dish Type: </dt>
                      <dd className="inline">{item.dishType}</dd>
                    </div>

                    <div>
                      <dt className="inline font-medium">City: </dt>
                      <dd className="inline">{item.city}</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <Button
                    onClick={() => dispatch(IncreaseQuantity(item))}
                    className="text-gray-600 hover:text-green-500 transition"
                    size="small"
                  >
                    <Add />
                  </Button>

                  <span>{ProductQ(item)}</span>

                  <Button
                    onClick={() => dispatch(DecreaseQuantity(item))}
                    className="text-gray-600 hover:text-red-500 transition"
                    size="small"
                  >
                    <DeleteForeverIcon />
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        ))}

        <div className="space-y-4 text-center mt-6">
          <a
            href="/Cart"
            className="block w-full rounded-lg border border-gray-300 px-5 py-3 text-sm text-gray-700 bg-white hover:bg-gray-100 transition"
          >
            View My Cart ({SelectedProducts.length})
          </a>

          <a
            href="/Checkout"
            className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm text-white hover:bg-blue-500 transition"
          >
            Checkout
          </a>
        </div>

        <div className="text-center mt-4">
          <span
            onClick={HandleCartCloser}
            className="inline-block text-sm text-gray-500 underline cursor-pointer hover:text-gray-600 transition"
          >
            Continue Shopping
          </span>
        </div>
      </div>
    </Box>
  );

}

import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Add, CloseOutlined } from "@mui/icons-material";
import { DecreaseQuantity, IncreaseQuantity } from "../Redux/CartSlice";
export default function PopupCart({ HandleCartCloser }) {
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);
  const dispatch = useDispatch()

  const ProductQ = (item) => {
    const MyProductQ =  SelectedProducts.find((itemx) => { return (
      itemx.id === item.id )

       })
    return MyProductQ.quantity
  }
  return (
    <Box className=" relative  ">
      <div
        className=" absolute w-screen max-w-sm  border border-gray-600 bg-gray-200  rounded-md shadow-lg px-4 py-8 sm:px-6 lg:px-8 -translate-x-72 md:-translate-x-62 "
        aria-modal="true"
        role="dialog"
      >
        <Button
          onClick={HandleCartCloser}
          className="  top-0 left-72 border-solid border-red-400 w-3 h-5 transition bg-white "
          sx={{ color: "black" }}
        >
          <CloseOutlined />
        </Button>

        {SelectedProducts.map((item, index) => (
          <div key={item.id} className="mt-4 space-y-6 ">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img
                  src={item.imageLink}
                  alt={item.name}
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900">{item.name}</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">DishType:</dt>
                      <dd className="inline">{item.dishType}</dd>
                    </div>

                    <div>
                      <dt className="inline">city:</dt>
                      <dd className="inline">{item.city}</dd>
                    </div>
                  </dl>
                </div>

                <div className="  flex flex-1 items-center justify-end gap-2">
                <button onClick={() => { 
                    dispatch(IncreaseQuantity(item))
                   }} className="text-gray-600 transition hover:text-red-600">
                    <Add />
                  </button>


                  <button onClick={() => { 
                    dispatch(DecreaseQuantity(item))
                   }} className="text-gray-600 transition hover:text-red-600">
                    <DeleteForeverIcon />
                  </button>
                </div>
              </li>
            </ul>

            <div className="space-y-4 text-center">
              <a
                href="/Cart"
                className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
              >
                View my cart {ProductQ(item)}
              </a>

              <a
                href="/Cart"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        ))}
        <div className="   text-center mt-2  ">
          <span
            onClick={HandleCartCloser}
            className=" text-center inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </span>
        </div>
      </div>
    </Box>
  );
}

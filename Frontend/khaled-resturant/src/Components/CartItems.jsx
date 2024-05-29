import { useSelector } from "react-redux";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CartItems() {
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);
  const navigate = useNavigate();
  var subtotal = 0;
  return (
    <section className=" bg-black   max-lg:mb-0   h-full   w-full !text-white ">
      <div className="  mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="outlined"
          color="warning"
          className=" !absolute top-3  right-6  border-solid !border-red-500 "
        >
          Go Home
        </Button>
        <div className="mx-auto max-w-5xl border border-solid border-grey-300 max-md:border-none my-9 sm:my-3 p-3 md:p-5">
          <header className="text-center">
            <h1 className="text-xl font-bold sm:text-3xl">Your Cart</h1>
          </header>

          {SelectedProducts.map((item) => {
            subtotal += item.Price * item.quantity - 50;
            console.log(item);
            return (
              <div key={item.id} className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <img
                      src={item.imageLink}
                      alt={item.name}
                      className="  size-72 max-md:size-36 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="  text-3xl ">{item.name}</h3>

                      <dl className="mt-1 space-y-px text-sm lg:text-lg">
                        <div>
                          <dt className="inline">DishType : </dt>
                          <dd className="inline">{item.dishType}</dd>
                        </div>

                        <div>
                          <dt className="inline">City : </dt>
                          <dd className="inline">{item.city}</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
                <div className="flex justify-end  pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-lg">
                      <div className="flex justify-between">
                        <dt>Order</dt>
                        <dd>£{item.Price}</dd>
                      </div>

                      <div className="flex justify-between">
                        <dt>Discount</dt>
                        <dd>-£50</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Quantity</dt>
                        <dd> {item.quantity}</dd>
                      </div>
                      <Divider className=" !mt-4   !border-dashed bg-white" />
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>£{subtotal}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-end my-5">
            <a
              href="/"
              className="block rounded bg-gray-700 px-5 py-3 text-sm -100 transition hover:bg-gray-600"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

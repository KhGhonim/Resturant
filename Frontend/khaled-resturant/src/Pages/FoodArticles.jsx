import { Box, Button } from "@mui/material";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import "./loading.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/CartSlice";

export default function FoodArticles() {
  const [FoodData, setFoodData] = useState([]);
  const [Loading, setLoading] = useState(true);
  let { ArticleId } = useParams();
  const navigate = useNavigate();
  // @ts-ignore
  // const {SelectedProducts} = useSelector((state) => state.CartShop)

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/Api/Food/${ArticleId}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodData([data]);
        setLoading(false);
      });
  }, [ArticleId]);

  if (Loading) {
    return (
      <div className=" !w-full !h-screen lds-hourglass !flex !justify-center !items-center "></div>
    );
  }

  if (!Loading && FoodData) {
    return (
      <Box>
        <Header />
        <Box className=" relative bg-black">
          <Box className=" relative w-full flex justify-end">
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="outlined"
              color="warning"
              className=" absolute top-20  right-10"
            >
              Go Home
            </Button>
          </Box>
          <Box className=" w-full h-screen flex justify-center items-center  ">
            {FoodData.map((item) => {
              return (
                <Box className="" key={item.id}>
                  <Helmet>
                    <title>Food Article </title>
                  </Helmet>

                  <Box className="flex flex-col md:flex-row font-mono w-full p-8  ">
                    <div className="flex-none  mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400 h-72 w-72 md:h-96 md:w-96 ">
                      <img
                        src={item.imageLink}
                        alt=""
                        className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <form className="flex-auto pl-0 md:pl-6 justify-center items-center">
                      <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                        <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                          {item.name}
                        </h1>
                        <div className="relative text-lg text-white">
                          $89.00
                        </div>
                        <div className="relative uppercase text-teal-400 ml-3">
                          In stock
                        </div>
                      </div>

                      <div className="flex space-x-2 mb-4 text-sm font-medium">
                        <div className="flex space-x-4">
                          <button
                            className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black hover:bg-teal-600 transition duration-100"
                            type="button"
                            onClick={() => {
                              dispatch(AddToCart(item));
                            }}
                          >
                            Buy now
                          </button>
                        </div>
                      </div>
                      <p className="text-xs leading-6 text-slate-500">
                        Free shipping on all continental US orders.
                      </p>
                    </form>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}

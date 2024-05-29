import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { HelmetProvider } from "react-helmet-async";
import FoodArticles from "./Pages/FoodArticles";
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import CartItems from "./Components/CartItems";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/FoodArticles/:ArticleId" element={<FoodArticles />} />
      <Route path="/Cart" element={<CartItems />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}> 
      <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();

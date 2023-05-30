import React from "react";
import DashBoard from "./container/DashBoard";
import { useRoutes } from "react-router-dom";
import Product from "./container/Product";
import User from "./container/User";
import Orders from "./container/Orders";
import Customers from "./container/Customers";
import Coupon from "./container/Coupon";

const App = () => {
  let element = useRoutes([
    { path: "/", element: <DashBoard /> },
    { path: "Product", element: <Product /> },
    { path: "User", element: <User /> },
    { path: "Orders", element: <Orders /> },
    { path: "Customers", element: <Customers /> },
    { path: "Coupon", element: <Coupon /> },

  ]);

  return element;
};

export default App;
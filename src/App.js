import React from "react";
import DashBoard from "./container/DashBoard";
import { Route, Routes } from "react-router-dom";
import Product from "./container/Product";
import User from "./container/User";
import Orders from "./container/Orders";
import Customers from "./container/Customers";
import Coupon from "./container/Coupon";
import Login from "container/Login";
import { PrimaryLayout } from "components/Layout";

const App = () => {
  // let element = useRoutes([
  //   { path: "/", element: <DashBoard /> },
  //   { path: "Product", element: <Product /> },
  //   { path: "User", element: <User /> },
  //   { path: "Orders", element: <Orders /> },
  //   { path: "Customers", element: <Customers /> },
  //   { path: "Coupon", element: <Coupon /> },
  //   { path: "Login", element: <Login /> },


  // ]);

  return (
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<DashBoard />} />
        <Route path="user" element={<User />} />
        <Route path="Customers" element={<Customers />} />
        <Route path="product" element={<Product />} />
        <Route path="orders" element={<Orders />} />
        <Route path="coupon" element={<Coupon />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
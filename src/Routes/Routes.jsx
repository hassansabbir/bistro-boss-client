import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivetRoute>
            <Secret></Secret>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addAnItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);

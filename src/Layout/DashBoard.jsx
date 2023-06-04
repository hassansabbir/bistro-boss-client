import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingBasket,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  //TODO: load data from the server to have dynamic isAdmin based on data.
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className=" ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content text-2xl font-bold">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/homej">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/homefs">
                  <GiForkKnifeSpoon /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/homeah">
                  <FaBars /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/homea43yh">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart /> My Cart
                  <div className="indicator">
                    <span className="indicator-item badge badge-secondary">
                      {cart?.length || 0}
                    </span>
                    <span className="btn btn-sm">Items</span>
                  </div>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars /> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBasket /> Order Food
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <LuPhoneCall /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;

import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  // const { loggedInUser } = useContext(UserContext);
  //This can be used to create a symbol in header to show if the user is online/offline
  // const onlineStatus = useOnlineStatus();
  return (
    <div className="mb-10 flex justify-between items-center m-1 p-5 bg-[#f0f0f0] rounded-2xl shadow-2xl">
      <div className="flex">
        <img className="w-24 rounded-full" alt="app-logo" src={LOGO_URL} />
        <p className="m-4 p-4 text-2xl hover:text-orange-400">Namaste Food</p>
      </div>
      <div>
        <ul className="flex px-1">
          {/* <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li> */}
          <li className="text-xl m-4 hover:text-orange-500 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl m-4 hover:text-orange-500 hover:font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-xl m-4 hover:text-orange-500 hover:font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-xl m-4 hover:text-orange-500 hover:font-bold">
            <Link to="/groceries">Grocery</Link>
          </li>
          <li className="text-xl m-4 hover:text-orange-500 hover:font-bold">
            <Link to="/cart">
              Cart
              {cartItems.length === 0 ? (
                <span>({cartItems.length})</span>
              ) : (
                <span className="text-green-500 font-bold">
                  ({cartItems.length})
                </span>
              )}
            </Link>
          </li>
          <li>
            <button
              className="text-xl m-4 hover:text-orange-500 hover:font-bold"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          {/* <li className="text-xl m-4 hover:text-orange-500 hover:font-bold">
            {loggedInUser}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;

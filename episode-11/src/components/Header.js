import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //This can be used to create a symbol in header to show if the user is online/offline
  // const onlineStatus = useOnlineStatus();
  return (
    <div className="mb-10 flex justify-between items-center m-1 p-5 bg-[#f0f0f0] rounded-2xl shadow-2xl">
      <div>
        <img className="w-24 rounded-full" alt="app-logo" src={LOGO_URL} />
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
            Cart
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //This can be used to create a symbol in header to show if the user is online/offline
  // const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img className="app-logo" alt="app-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li> */}
          <li>
            <Link to="/" className="res-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="res-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="res-link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/groceries" className="res-link">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

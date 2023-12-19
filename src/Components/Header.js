import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { isLogged } from "../Slice/loginSlice";

function Header({ onClick, count }) {
  const Logged=useSelector(isLogged);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="Home">
        Navbar
      </Link>
   
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item  ">
          { !Logged &&
            <Link className="nav-link" to="Login">
              {" "}
              Login
            </Link>
            }
            { Logged &&
            <Link className="nav-link" to="Success">
              {" "}
              Profile
            </Link>
            }
          </li>
          <li className={""}>
            <Link className="nav-link " to="Home">
              Link
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
}

export default Header;

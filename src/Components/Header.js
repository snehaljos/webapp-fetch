import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header({ onClick, count }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="Home">
        Navbar
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item  ">
            <Link className="nav-link" to="Login">
              {" "}
              Login
            </Link>
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

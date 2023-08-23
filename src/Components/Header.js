import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header({ onClick, count }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item  ">
            <Link class="nav-link" to="Login">
              {" "}
              Login
            </Link>
          </li>
          <li className={""}>
            <Link class="nav-link " to="Home">
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

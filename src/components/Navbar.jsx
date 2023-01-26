import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";
import "../assets/css/style2.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {/* <!-- first half --> */}
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="#">
            <span className="logo">DocS</span>
          </NavLink>
          <NavLink
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </NavLink>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <!-- tài liệu  --> */}

            <NavLink to="/intro" className="navbar-item">
              {" "}
              Giới thiệu{" "}
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink to="/login" className="button is-primary">
                  <strong>Đăng nhập</strong>
                </NavLink>
                <NavLink to="/register" className="button is-light">
                  Đăng kí
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import "../assets/css/style2.css";

const NavbarLogged = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      {/* <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="112" height="28" alt="logo" />
          </NavLink>

          <NavLink
            to="!#"
            role="button"
            className="navbar-burger burger"
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
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {/* <!-- first half --> */}
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/dashboard">
            <span className="logo">DocS</span>
          </NavLink>
          {/* <NavLink
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </NavLink> */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <!-- tài liệu  --> */}

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink to="/documents" className="navbar-link">
                {" "}
                Tài liệu{" "}
              </NavLink>
              <div className="navbar-dropdown">
                {/* <!-- tài liêụ đại cương --> */}
                <div className="nested navbar-item dropdown">
                  <div className="dropdown-trigger">
                    <button
                      className="button"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                    >
                      <span>
                        {" "}
                        <NavLink to="/documents/bytype/Tài liệu đại cương">
                          Tài liệu đại cương
                        </NavLink>
                      </span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <NavLink
                        to="/documents/bysubject/Giải tích"
                        className="dropdown-item"
                      >
                        Giải tích
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Đại số"
                        className="dropdown-item"
                      >
                        Đại số
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Xác suất thống kê"
                        className="dropdown-item"
                      >
                        Xác suất thống kê
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Vật lý đại cương"
                        className="dropdown-item"
                      >
                        Vật lý đại cương
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Tin học đại cương"
                        className="dropdown-item"
                      >
                        Tin học đại cương
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Các môn đại cương khác"
                        className="dropdown-item"
                      >
                        Các môn khác
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* <!-- Tài liệu ngành CNTT --> */}
                <div className="nested navbar-item dropdown">
                  <div className="dropdown-trigger">
                    <button
                      className="button"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                    >
                      <span>
                        <NavLink to="/documents/bytype/Tài liệu ngành CNTT">
                          Tài liệu ngành CNTT
                        </NavLink>
                      </span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <NavLink
                        to="/documents/bysubject/Toán rời rạc"
                        className="dropdown-item"
                      >
                        Toán rời rạc
                      </NavLink>

                      <NavLink
                        to="/documents/bysubject/Cấu trúc dữ liệu và thuật toán"
                        className="dropdown-item"
                      >
                        Cấu trúc dữ liệu và thuật toán
                      </NavLink>

                      <NavLink
                        to="/documents/bysubject/Lập trình hướng đối tượng"
                        className="dropdown-item"
                      >
                        Lập trình hướng đối tượng
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Mạng máy tính"
                        className="dropdown-item"
                      >
                        Mạng máy tính
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Cơ sở dữ liệu"
                        className="dropdown-item"
                      >
                        Cơ sở dữ liệu
                      </NavLink>

                      <NavLink
                        to="/documents/bysubject/Hệ điều hành"
                        className="dropdown-item"
                      >
                        Hệ điều hành
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Kĩ thuật lập trình"
                        className="dropdown-item"
                      >
                        Kĩ thuật lập trình
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Nhập môn AI"
                        className="dropdown-item"
                      >
                        Nhập môn AI
                      </NavLink>

                      <NavLink
                        to="/documents/bysubject/Nhập môn CNPM"
                        className="dropdown-item"
                      >
                        Nhập môn CNPM
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Nhập môn học máy"
                        className="dropdown-item"
                      >
                        Nhập môn học máy
                      </NavLink>
                      {/* <NavLink
                        to="/documents/bysubject/"
                        className="dropdown-item"
                      ></NavLink> */}

                      <NavLink
                        to="/documents/bysubject/Nhập môn an toàn thông tin"
                        className="dropdown-item"
                      >
                        Nhập môn an toàn thông tin
                      </NavLink>
                      <NavLink
                        to="/documents/bysubject/Các môn CNTT khác"
                        className="dropdown-item"
                      >
                        Các môn khác
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* <!-- <NavLink className="navbar-item"> Tài liệu ngành CNTT </NavLink> --> */}
                <NavLink
                  to="/documents/bytype/Tài liệu khác"
                  className="navbar-item"
                >
                  {" "}
                  Tài liệu khác{" "}
                </NavLink>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link"> Quản lý </NavLink>

              <div className="navbar-dropdown">
                <NavLink to="/documents/add" className="navbar-item">
                  {" "}
                  Thêm tài liệu{" "}
                </NavLink>
                <NavLink to="/users" className="navbar-item">
                  {" "}
                  Quản lý người dùng{" "}
                </NavLink>
                {/* <!-- <NavLink className="navbar-item"> Tài liệu khác </NavLink> --> */}
              </div>
            </div>
            <NavLink to="/introduce" className="navbar-item">
              {" "}
              Giới thiệu{" "}
            </NavLink>
          </div>

          {/* <!-- second half --> */}
          <div className="navbar-item">
            <form className="navbar-search">
              <input
                className="input is-primary"
                type="text"
                placeholder="tìm tài liệu, tác giả"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="button"
                type="submit"
                onClick={() => {
                  navigate(`/documents/search/${search}`);
                }}
              >
                Tìm
              </button>
            </form>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="dropdown is-right is-hoverable">
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    aria-controls="dropdown-menu"
                    aria-haspopup="true"
                  >
                    <span>{user && user.name}</span>
                    {/* <!-- <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span> --> */}
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <NavLink to="/profile" className="dropdown-item">
                      {" "}
                      Cập nhật thông tin{" "}
                    </NavLink>
                    <button
                      onClick={logout}
                      className="button is-white dropdown-item"
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLogged;

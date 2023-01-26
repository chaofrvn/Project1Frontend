import React, { useEffect } from "react";
import Layout from "./Layout";
// import FormEditProduct from "../components/FormEditProduct";
// import Product from "../components/Product";
// import Profile from "../components/Profile";
import Introdution from "../components/Introdution";
import Navbar from "../components/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

const Intro = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const { isError } = useSelector((state) => state.auth);

  //   useEffect(() => {
  //     dispatch(getMe());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     if (isError) {x
  //       navigate("/");
  //     }
  //   }, [isError, navigate]);

  return (
    <>
      <Navbar />
      <div></div>
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div className="column has-background-light is-10 is-offset-1">
          <main>
            <Introdution />
          </main>
        </div>
      </div>
    </>
  );
};

export default Intro;

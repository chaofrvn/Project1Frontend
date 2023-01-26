import React, { useEffect } from "react";
import Layout from "./Layout";
// import FormEditProduct from "../components/FormEditProduct";
// import Product from "../components/Product";
// import Profile from "../components/Profile";
import Introdution from "../components/Introdution";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const IntroL = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <Introdution />
    </Layout>
  );
};

export default IntroL;

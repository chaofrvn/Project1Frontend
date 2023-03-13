import React, { useEffect } from "react";
import Layout from "./Layout";
import DocumentList from "../components/DocumentList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Documents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      // navigate("/");S
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <DocumentList />
    </Layout>
  );
};

export default Documents;

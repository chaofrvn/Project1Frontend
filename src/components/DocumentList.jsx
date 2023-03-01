import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Documents from "./Documents.jsx";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getDocuments();
  }, []);

  const getDocuments = async () => {
    const response = await axios.get("http://localhost:4688/documents");
    setDocuments(response.data);
  };

  const deleteDocument1 = async (documentId) => {
    await axios.delete(`http://localhost:4688/documents/${documentId}`);
    getDocuments();
  };

  const deleteDocument = async (documentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      // alert("Item Deleted");
      deleteDocument1(documentId);
    }
  };

  return (
    <div>
      <h1 className="title">Tài liệu</h1>
      <h2 className="subtitle">Danh sách tài liệu</h2>
      {/* <Link to="/documents/add" className="button is-primary mb-2">
        Thêm tài liệu 
      </Link> */}
      <Documents documents={documents} deleteDocument={deleteDocument} />
    </div>
  );
};

export default DocumentList;

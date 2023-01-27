import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Documents from "./Documents.jsx";
const DocumentBySubject = () => {
  const [documents, setDocuments] = useState([]);
  const { subject } = useParams();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const getDocumentBySubject = async () => {
      try {
        // console.log(subject);
        const response = await axios.get(
          `http://localhost:4688/documentsbysubject/${subject}`
        );
        setDocuments(response.data);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getDocumentBySubject();
  }, [subject]);
  const getDocumentBySubject1 = async () => {
    try {
      // console.log("testsubject ");
      const response = await axios.get(
        `http://localhost:4688/documentsbysubject/${subject}`
      );
      setDocuments(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const deleteDocument = async (documentId) => {
    await axios.delete(`http://localhost:4688/documents/${documentId}`);
    getDocumentBySubject1();
  };

  return (
    <div>
      {/* <h1 className="title"></h1> */}
      <h2 className="subtitle">Danh sách tài liệu theo môn {subject} </h2>
      <p>{msg}</p>
      {/* <Link to="/documents/add" className="button is-primary mb-2">
        Add New
      </Link> */}
      <Documents documents={documents} deleteDocument={deleteDocument} />
      {/* <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Tên tài liệu</th>
            <th>Tác giả</th>
            
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, index) => (
            <tr key={document.uuid}>
              <td>{index + 1}</td>
              <td>{document.name}</td>
              <td>{document.author}</td>
  
              <td>
                <Link
                  to={`/documents/edit/${document.uuid}`}
                  className="button is-small is-info"
                >
                  Chỉnh sửa
                </Link>
                <Link
                  to={`/documents/view/${document.uuid}`}
                  className="button is-small is-success"
                >
                  Xem
                </Link>
                <button
                  onClick={() => deleteDocument(document.uuid)}
                  className="button is-small is-danger"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default DocumentBySubject;

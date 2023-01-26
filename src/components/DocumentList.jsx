import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getDocuments();
  }, []);

  const getDocuments = async () => {
    const response = await axios.get("http://localhost:4688/documents");
    setDocuments(response.data);
  };

  const deleteDocument = async (documentId) => {
    await axios.delete(`http://localhost:4688/documents/${documentId}`);
    getDocuments();
  };

  return (
    <div>
      <h1 className="title">Tài liệu</h1>
      <h2 className="subtitle">Danh sách tài liệu</h2>
      {/* <Link to="/documents/add" className="button is-primary mb-2">
        Thêm tài liệu 
      </Link> */}
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Tên tài liệu</th>
            <th>Tác giả</th>
            {/* <th>Created By</th> */}
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, index) => (
            <tr key={document.uuid}>
              <td>{index + 1}</td>
              <td>{document.name}</td>
              <td>{document.author}</td>
              {/* <td>{document.user.name}</td> */}
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
      </table>
    </div>
  );
};

export default DocumentList;

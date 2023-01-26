import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DocumentByType = () => {
  const [documents, setDocuments] = useState([]);
  const { type } = useParams();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const getDocumentByType = async () => {
      try {
        // console.log(price);
        const response = await axios.get(
          `http://localhost:4688/documentsbytype/${type}`
        );
        setDocuments(response.data);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getDocumentByType();
  }, [type]);
  const getDocumentByType1 = async () => {
    try {
      // console.log("testprice ");
      const response = await axios.get(
        `http://localhost:4688/documentsbytype/${type}`
      );
      setDocuments(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const deleteDocument = async (documentId) => {
    await axios.delete(`http://localhost:5000/documents/${documentId}`);
    getDocumentByType1();
  };

  return (
    <div>
      {/* <h1 className="title">Documents</h1> */}
      <h2 className="subtitle"> {type} </h2>
      <p>{msg}</p>
      {/* <Link to="/documents/add" className="button is-primary mb-2">
        Add New
      </Link> */}
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Tên tài liệu</th>
            <th>Tác giả</th>
            {/* <th>Created By</th> */}
            <th>Actions</th>
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
                  Edit
                </Link>
                <Link
                  to={`/documents/view/${document.uuid}`}
                  className="button is-small is-success"
                >
                  View
                </Link>
                <button
                  onClick={() => deleteDocument(document.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentByType;

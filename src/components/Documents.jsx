import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Pagination from "./Pagination.jsx";
export default function Documents({ documents, deleteDocument }) {
  const [page, setPage] = useState(1);
  const { user } = useSelector((state) => state.auth);
  const { search } = useSelector((state) => state.search);
  documents = documents.filter((obj) => {
    const { author, name } = obj;
    if (
      removeAccents(author)
        .toUpperCase()
        .includes(removeAccents(search).toUpperCase()) ||
      removeAccents(name)
        .toUpperCase()
        .includes(removeAccents(search).toUpperCase())
    ) {
      return true;
    } else return false;
  });
  const numberOfDocumentsOnAPage = 20;
  const totalPages = Math.ceil(documents.length / numberOfDocumentsOnAPage);
  return (
    <>
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
          {documents.map((document, index) => {
            if (
              index < (page - 1) * numberOfDocumentsOnAPage ||
              index >= page * numberOfDocumentsOnAPage
            )
              return null;
            return (
              <tr key={document.uuid}>
                <td>{index + 1}</td>
                <td>{document.name}</td>
                <td>{document.author}</td>
                {/* <td>{document.user.name}</td> */}
                <td>
                  {user && user.role === "admin" && (
                    <Link
                      to={`/documents/edit/${document.uuid}`}
                      className="button is-small is-info"
                    >
                      Chỉnh sửa
                    </Link>
                  )}
                  <Link
                    to={`/documents/view/${document.uuid}`}
                    className="button is-small is-success"
                  >
                    Xem
                  </Link>
                  {user && user.role === "admin" && (
                    <button
                      onClick={() => deleteDocument(document.uuid)}
                      className="button is-small is-danger"
                    >
                      Xóa
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      ></Pagination>
    </>
  );
}
function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

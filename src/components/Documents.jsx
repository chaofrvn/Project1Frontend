import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination.jsx";
export default function Documents({ documents, deleteDocument }) {
  const [page, setPage] = useState(1);
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

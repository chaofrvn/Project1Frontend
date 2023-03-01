import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination.jsx";

const Userlist = () => {
  const numberOfUserOnAPage = 20;
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4688/users");
    setUsers(response.data);
  };

  const deleteUser1 = async (userId) => {
    await axios.delete(`http://localhost:4688/users/${userId}`);
    getUsers();
  };

  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa đi người dùng này ?"
    );
    if (confirmDelete) {
      // alert("Item Deleted");
      deleteUser1(userId);
    }
  };

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <Link to="/users/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            if (index < (page - 1) * numberOfUserOnAPage) return null;
            if (index >= page * numberOfUserOnAPage) return null;
            return (
              <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link
                    to={`/users/edit/${user.uuid}`}
                    className="button is-small is-info"
                  >
                    Chỉnh sửa
                  </Link>
                  <button
                    onClick={() => deleteUser(user.uuid)}
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
        totalPages={users.length / numberOfUserOnAPage}
      ></Pagination>
    </div>
  );
};

export default Userlist;

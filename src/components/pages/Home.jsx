import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUsers(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Users List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row"> {index + 1} </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/users/view/${user.id}`}
                    className="btn  btn-primary"
                  >
                    View
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn ml-2 btn-outline-primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to="/"
                    onClick={() => deleteUser(user.id)}
                    className="btn ml-2 btn-danger"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import Paginator from '../Paginator/Paginator';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(async () => {
    await updateUsers(1);
  }, []);

  const updateUsers = async (page) => {
    let res = await fetch(
      `http://localhost:5000/private/getUsers?page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('token'),
        },
      }
    );
    res = await res.json();
    setUsers(res.users);
    setCount(res.count);
  };

  const handlePaginatorChange = async (newPage) => {
    await updateUsers(newPage);
  };

  return (
    <div>
      <h2 className="mb-3 pt-3 text-start">Users</h2>
      <div className="p-2 bg-white">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">ID (in DB)</th>
              <th scope="col">Username</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{user._id}</th>
                <td>{user.username}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center m-3">
        {!!users.length && (
          <Paginator change={handlePaginatorChange} count={count} />
        )}
      </div>
    </div>
  );
};

export default UsersTable;

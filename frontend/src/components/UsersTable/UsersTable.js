import React from 'react';

const UsersTable = () => {
  let users = [
    { id: 'qwee', username: 'asdads', phoneNumber: '012213' },
    { id: 'qwee2', username: 'asdads2', phoneNumber: '012213' },
    { id: 'qwee3', username: 'asdads3', phoneNumber: '012213' },
    { id: 'qwee4', username: 'asdads4', phoneNumber: '012213' },
  ];
  return (
    <div className="p-2 bg-white">
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Taps from "../components/Taps/Taps";
import UsersTable from "../components/UsersTable/UsersTable";

const AdminUsersPage = () => {
  return(
    <div>
      <Navbar />
      <div className="App container bg-light">
        <Taps />
        <UsersTable />
      </div>
    </div>
  )
}

export default AdminUsersPage
import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

const Navbar = () => {
  let handleLogout = useContext(AuthContext).handleLogout

  return (
    <div className="border-bottom d-flex justify-content-between bg-white">
      <h1 className="ms-5">Louvre</h1>
      <div className="">
        <h5 className="m-0">{localStorage.getItem('username')}</h5>
        <p className="m-0">{localStorage.getItem('role')}</p>
      </div>
        <button onClick={handleLogout} className="me-5 btn btn-outline-danger">logout</button>
    </div>
  )
}

export default Navbar
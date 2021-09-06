import React from "react";

const Navbar = () => {
  return (
    <div className="border-bottom d-flex justify-content-between bg-white">
      <h1 className="ms-5">Louvre</h1>
      <div className="me-5">
        <h5 className="m-0">{localStorage.getItem('username')}</h5>
        <p>{localStorage.getItem('role')}</p>
      </div>
    </div>
  )
}

export default Navbar
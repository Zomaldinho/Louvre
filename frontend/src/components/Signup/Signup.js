import React from 'react';
import "./Signup.css"

const Signup = () => {
  let usernamePlaceHolder = 'input your username here';
  let passwordPlaceHolder = 'input your password here';
  let phoneNumberPlaceHolder = 'input your password here';
  return(
    <div className="main-login d-flex justify-content-md-center align-items-center vh-100 ">
      <div className="card login-card mx-auto">
        <div className="card-header text-center">Sign Up</div>
        <form className="p-4">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              placeholder={usernamePlaceHolder}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Phone Number
            </label>
            <input
              placeholder={phoneNumberPlaceHolder}
              type="test"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="form-label" >User Type</label>
            <select className="form-control" aria-label="Default select example">
              <option value="Guest">Guest</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              placeholder={passwordPlaceHolder}
              type="password"
              className="form-control"
            />
          </div>

          <div>
            <button type="submit" className="mx-auto btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="mt-2">or <a href="#">Login</a> if you have an account</p>
        </form>
      </div>
    </div>
  )
}

export default Signup
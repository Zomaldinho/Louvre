import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
  let usernamePlaceHolder = 'input your username here';
  let passwordPlaceHolder = 'input your password here';
  return (
    <div className="main-login d-flex justify-content-md-center align-items-center vh-100 ">
      <div className="card login-main" >
        <div className="card-header text-center">Login</div>
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
            <label htmlFor="exampleInputPassword1" className="form-label">
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
              Login
            </button>
          </div>
          <p className="mt-2">or <Link to="/signup">Sign up</Link> if you are a new Guest</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
  let usernamePlaceHolder = 'input your username here';
  let passwordPlaceHolder = 'input your password here';

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="main-login d-flex justify-content-md-center align-items-center vh-100 ">
      <div className="card login-main" >
        <div className="card-header text-center">Login</div>
        <form className="p-4">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              placeholder={usernamePlaceHolder}
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
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

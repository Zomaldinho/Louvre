import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { errorHandler } from '../../helpers/Popups';

const Login = () => {
  let usernamePlaceHolder = 'input your username here';
  let passwordPlaceHolder = 'input your password here';
  let history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLoginButtonClick = async (event) => {
    event.preventDefault();
    let res = await fetch('http://localhost:5000/public/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (res.status != 200)
      return errorHandler('Username and/or password are not correct');
    res = await res.json()
    localStorage.setItem('token', res.token);
    localStorage.setItem('userId', res.userId);
    localStorage.setItem('role', res.role);
    if(res.role == 'Admin'){
      history.replace('/admin/arts')
    } else if (res.role == 'Guest'){
      history.replace('/gallery')
    }
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
            <button onClick={handleLoginButtonClick} type="submit" className="mx-auto btn btn-primary">
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

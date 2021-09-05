import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { errorHandler, signUpSuccessfulMessage } from '../../helpers/Popups';
import "./Signup.css"

const Signup = () => {
  let usernamePlaceHolder = 'input your username here';
  let passwordPlaceHolder = 'input your password here';
  let phoneNumberPlaceHolder = 'input your password here';
  let history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value)
  }

  const handleSignupSubmitForm = async (event) => {
    event.preventDefault();
    let res = await fetch('http://localhost:5000/public/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role, mobileNumber }),
    });

    if (res.status == 422)
      return errorHandler('Validation failed. Make sure the username isn\'t used yet!');
    if (res.status != 201)
      return errorHandler('Something went wrong, please try again');

    res = await res.json()
    signUpSuccessfulMessage()
    history.replace('/login')
  }

  return(
    <div className="main-login d-flex justify-content-md-center align-items-center vh-100 ">
      <div className="card login-card mx-auto">
        <div className="card-header text-center">Sign Up</div>
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
            <label className="form-label">
              Phone Number
            </label>
            <input
              placeholder={phoneNumberPlaceHolder}
              onChange={handleMobileNumberChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="form-label" >User Type</label>
            <select onChange={handleRoleChange} className="form-control" aria-label="Default select example">
              <option selected value="Guest">Guest</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              onChange={handlePasswordChange}
              placeholder={passwordPlaceHolder}
              type="password"
              className="form-control"
            />
          </div>

          <div>
            <button onClick={handleSignupSubmitForm} type="submit" className="mx-auto btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="mt-2">or <Link to="/login">Login</Link> if you have an account</p>
        </form>
      </div>
    </div>
  )
}

export default Signup
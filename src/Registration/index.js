import LoginBar from "../Login/loginBar";
import Navigation from "../Navigation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../users/client";
import "./index.css";

function Registration() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "", firstName: "", lastName: "", role: "USER"});
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/profile");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  
  return(
      <div>
        <LoginBar/>
        <div className="page-padding">
        <h1>Sign up</h1>
        {error && <div>{error}</div>}
        <label for="first-name-form-control" className="form-label">First Name</label>
          <input
                type="text"
                id = "first-name-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="First Name"
                onChange={(e) => setCredentials({
                  ...credentials,
                  firstName: e.target.value })}

            />

        <label for="last-name-form-control" className="form-label">Last Name</label>
          <input
                type="text"
                id = "last-name-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="Last Name"
                onChange={(e) => setCredentials({
                  ...credentials,
                  lastName: e.target.value })}

            />

        <label for="username-form-control" className="form-label">Username</label>
          <input
                type="text"
                id = "username-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="Username"
                onChange={(e) => setCredentials({
                  ...credentials,
                  username: e.target.value })}

            />
            <label for="password-form-control" className="form-label">Password</label>
            <input
                type="password"
                id = "password-form-control"
                className="form-control rounded-pill w-25"
                placeholder="Password"
                onChange={(e) => setCredentials({
                  ...credentials,
                  password: e.target.value })}

            />
        {/* Check in with katie regarding db values */}
        <label for="role-dropdown" className="form-label">Roles</label><br/>
        <select class="form-select w-25" id = "role-dropdown"
        onChange={(e) => setCredentials({
          ...credentials,
          role: e.target.value
        })}>
            <option selected value="USER">User</option>
            <option value="ADMIN">Administrator</option>
            <option value="AUTHOR">Author</option>
          </select><br/>

          <button
                onClick={signup}
                className="btn btn-dark rounded-pill w-25 margin-top-small">
                    Sign Up
                </button>

        </div>
     </div>
  );
}
export default Registration;
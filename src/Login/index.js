import { useState } from "react";
import * as client from "../users/client";
import LoginBar from "./loginBar";
import Navigation from "../Navigation";
import { Link, useNavigate } from "react-router-dom";
import './index.css';

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const signin = async () => {
    try{
    await client.signin(credentials);
    navigate("/profile");
    } catch (error) {
        setError(error);
    }
  };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  // const logIn = async () => {
  //   try{
  //      const credentials = {username: username, password: password};
  //       const user = await client.signin(credentials);
  //       console.log(user); 
  //   } catch (error) {
  //       setError(error);
  //   }
    
  // };
  return(
      <div>
        <LoginBar/>

        <div className='page-padding'>
          <h1>Login</h1>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <label for="username-form-control" className="form-label">Username</label>
          <input
                type="text"
                id = "username-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="Username"
                value = {credentials.username}
                onChange = {(e) => setCredentials({...credentials, username: e.target.value})}
            />
            <label for="password-form-control" className="form-label">Password</label>
            <input
                type="password"
                id = "password-form-control"
                className="form-control rounded-pill w-25"
                placeholder="Password"
                value = {credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}

            />
            
            <button
                onClick={signin}
                className="btn btn-dark rounded-pill w-25 margin-top-small">
                    Login
            </button><br/>
            
            <Link to="../signup">Not an existing user? Sign up here.</Link>
        </div>
     </div>
  );
}
export default Login;
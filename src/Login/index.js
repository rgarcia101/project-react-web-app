import { useState } from "react";
import * as client from "../client";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import './index.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const logIn = async () => {
    try{
       const credentials = {username: username, password: password};
        const user = await client.signin(credentials);
        console.log(user); 
    } catch (error) {
        setError(error);
    }
    
  };
  return(
      <div>
        <Navigation/>

        <div className='page-padding center'>
          <h1>Sign In</h1>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <label for="username-form-control" className="form-label">Username</label>
          <input
                type="text"
                id = "username-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="Username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
            />
            <label for="password-form-control" className="form-label">Password</label>
            <input
                type="password"
                id = "password-form-control"
                className="form-control rounded-pill w-25"
                placeholder="Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}

            />
            <button
                onClick={logIn}
                className="btn btn-dark rounded-pill w-25 margin-top-small">
                    Sign In
            </button>
            
            <Link to="../signup">Not an existing user? Sign up here.</Link>

        </div>
     </div>
  );
}
export default Login;
import { useState } from "react";
import * as client from "../client";

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

        <div className='page-padding'>
          <h4 className="page-padding-top">LOGIN PAGE</h4>
          {error && <div className="alert alert-danger">{error.message}</div>}
          <input
                type="text"
                className = "form-control"
                placeholder="Username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}

            />
            <button
                onClick={logIn}
                className="btn btn-primary">
                    Login
                </button>

        </div>


     </div>
  );
}
export default Login;
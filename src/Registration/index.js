import LoginBar from "../Login/loginBar";

function Registration() {
  
  return(
      <div>
        <LoginBar/>
        <div className="page-padding">
        <h1>Sign up</h1>

        <label for="first-name-form-control" className="form-label">First Name</label>
          <input
                type="text"
                id = "first-name-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="First Name"

            />

        <label for="last-name-form-control" className="form-label">Last Name</label>
          <input
                type="text"
                id = "last-name-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="Last Name"

            />

        <label for="username-form-control" className="form-label">Username</label>
          <input
                type="text"
                id = "username-form-control"
                className = "form-control rounded-pill margin-bottom-small w-25"
                placeholder="Username"

            />
            <label for="password-form-control" className="form-label">Password</label>
            <input
                type="password"
                id = "password-form-control"
                className="form-control rounded-pill w-25"
                placeholder="Password"

            />
        {/* Check in with katie regarding db values */}
        <label for="role-dropdown" className="form-label">Roles</label><br/>
        <select class="form-select w-25" id = "role-dropdown">
            <option selected value="USER">General User</option>
            <option value="ADMIN">Administrator</option>
            <option value="AUTHOR">Author</option>
          </select><br/>

          <button
                //onClick={logIn}
                className="btn btn-dark rounded-pill w-25 margin-top-small">
                    Sign Up
                </button>

        </div>
     </div>
  );
}
export default Registration;
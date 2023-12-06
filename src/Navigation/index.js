
import {BsBookFill} from "react-icons/bs";
import * as client from "../users/client";
import { useNavigate } from "react-router-dom";

function Navigation(){
  const navigate = useNavigate();
  const signout = async () => {
    await client.signout();
    navigate("/login");
  };

  return(
      <div className="row gold-background wd-general">
        <div>
          <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black"}} />
          <span style={{ fontSize: "1.5em"}}>BookBuddies</span>
          <div className="float-end">
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Profile</button>
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Search</button>
            <button type="button" onClick={signout} className="btn btn-warning" style={{ fontSize: "1.1em"}}>Logout</button>
          </div>
        </div>
      </div>
  );
}
export default Navigation;


import {BsBookFill} from "react-icons/bs";

function Navigation(){
  return(
      <div className="row gold-background wd-general">
        <div>
          <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black"}} />
          <span style={{ fontSize: "1.5em"}}>BookBuddies</span>
          <div className="float-end">
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Profile</button>
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Search</button>
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Logout</button>
          </div>
        </div>
      </div>
  );
}
export default Navigation;

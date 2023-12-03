import { useNavigate } from 'react-router-dom';
import {BsBookFill} from "react-icons/bs";

function Navigation(){
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleSearch = () => {
    navigate('/Search')
  }

  const handleProfile = () => {
    navigate('/Profile')
  }

  return(
      <div className="row gold-background wd-general">
        <div>
          <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black"}} />
          <span style={{ fontSize: "1.5em"}}>BookBuddies</span>
          <div className="float-end nav navbar-expand-lg gold-background nav-pills black-text">
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Home</button>
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}onClick={handleProfile}>Profile</button>
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}onClick={handleSearch}>Search</button>
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}} onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
  );
}
export default Navigation;

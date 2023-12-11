import { useNavigate } from 'react-router-dom';
import { BsBookFill } from "react-icons/bs";

function LoginBar(){
const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };
  return(
      <div className="row gold-background wd-general">
        <div>
          <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black"}} />
          <span style={{ fontSize: "1.5em"}}>BookBuddies</span>
          <div className="float-end">
            <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}onClick={handleHome}>Home</button>
          </div>
        </div>
      </div>
  );
}
export default LoginBar;
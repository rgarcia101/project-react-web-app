import { useState, useEffect } from 'react';
import * as client from "../users/client";
import { useNavigate, useLocation } from 'react-router-dom';
import { BsBookFill } from "react-icons/bs";
import './index.css';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(location.pathname.split('/')[1]); 
  }, [location]);

  
const isTabActive = (tabPath) => {
  const currentBasePath = location.pathname.split('/')[1].toLowerCase(); 
  return currentBasePath === tabPath.toLowerCase();
};
  
const signout = async () => {
    await client.signout();
    navigate("/login");
};


  return (
    <div className="row gold-background wd-general">
      <div>
        <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black" }} />
        <span style={{ fontSize: "1.5em" }}>BookBuddies</span>
        <div className="float-end nav navbar-expand-lg gold-background nav-pills black-text">
          <button type="button" 
                  className={`btn ${isTabActive('HomeLoggedIn') ? 'oval-active-nav-pill nav-link active' : 'btn-warning'}`}
                  onClick={() => navigate('/HomeLoggedIn')}>
            Home
          </button>
          <button type="button" 
                  className={`btn ${isTabActive('Profile') ? 'oval-active-nav-pill nav-link active' : 'btn-warning'}`}
                  onClick={() => navigate('/Profile')}>
            Profile
          </button>
          <button type="button" 
                  className={`btn ${isTabActive('search') ? 'oval-active-nav-pill nav-link active' : 'btn-warning'}`}
                  onClick={() => navigate('/Search')}>
            Search
          </button>
          <button type="button" 
                  className={`btn ${isTabActive('') ? 'oval-active-nav-pill nav-link active' : 'btn-warning'}`}
                  onClick={signout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

import React from 'react';
import { BsBookFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function AnonymousNavigation() {
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate('/login');
  };
  const handleGetStarted = () => {
    navigate('/signup');
  };
  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className="row gold-background wd-general">
      <div>
        <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black"}} />
        <span style={{ fontSize: "1.5em"}}>BookBuddies</span>
        <div className="float-end">
          <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}onClick={handleSearch}>Search</button>
          <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}onClick={handleSignin}>Sign In</button>
          <button type="button" className="active-button" style={{ fontSize: "1.1em"}}onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default AnonymousNavigation;

import React, { useEffect, useState } from 'react';
import { account } from "../users/client.js"
import HomeLoggedIn from '../HomeLoggedIn';
import HomeAnonymous from '../HomeAnonymous';

function Home() {
  const [isLoggedInState, setIsLoggedInState] = useState(false);

  useEffect(() => {
    account()
      .then(response => {
        const loggedIn = response && Object.keys(response).length > 0;
        setIsLoggedInState(loggedIn);
      })
      .catch(error => {
        console.error('Error checking account info', error);
        setIsLoggedInState(false); 
      });
  }, []);

  return isLoggedInState ? <HomeLoggedIn /> : <HomeAnonymous />;
}

export default Home;

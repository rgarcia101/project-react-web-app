import logo from './logo.svg';
import './App.css';
import Search from './Search';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";
import BookDetails from './Search/bookDetails';
import HomeAnonymous from "./HomeAnonymous";
import HomeLoggedIn from "./HomeLoggedIn";
import Profile from "./Profile";
import Login from './Login/index';
import Registration from './Registration';
import { useState} from "react";


function App() {
  const [key, setKey] = useState('home');
  // process.env;

  return (

    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="HomeAnonymous" />} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/search/:search" element={<Search/>}/>
          <Route path="/details/:bookId" element={<BookDetails/>}/>
          <Route path="/HomeAnonymous" element={<HomeAnonymous />} />
          <Route path="/HomeLoggedIn" element={<HomeLoggedIn />} />
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Profile/:id" element={<Profile />}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<Registration/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

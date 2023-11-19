import logo from './logo.svg';
import './App.css';
import Search from './Search';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";
import BookDetails from './Search/bookDetails';
import HomeAnonymous from "./HomeAnonymous";
import HomeLoggedIn from "./HomeLoggedIn";
import Profile from "./Profile";
import Login from "./Login";
import { useState} from "react";

function App() {
  const [key, setKey] = useState('home')
  // process.env;

  return (

    <HashRouter>
      {key}
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="HomeAnonymous" />} />
          <Route path="/search"    element={<Search/>}/>
          <Route path="/details" element={<BookDetails/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/HomeAnonymous" element={<HomeAnonymous />} />
          <Route path="/HomeLoggedIn" element={<HomeLoggedIn />} />
          <Route path="/Profile" element={<Profile />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

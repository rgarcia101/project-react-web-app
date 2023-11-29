import logo from './logo.svg';
import './App.css';
import Search from './Search';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import BookDetails from './Search/bookDetails';
import HomeAnonymous from "./HomeAnonymous";
import HomeLoggedIn from "./HomeLoggedIn";
import Profile from "./Profile";
import Login from './Login/index';
import Registration from './Registration';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="HomeAnonymous" />} />
          <Route path="/search"    element={<Search/>}/>
          <Route path="/details" element={<BookDetails/>}/>
          <Route path="/HomeAnonymous" element={<HomeAnonymous />} />
          <Route path="/HomeLoggedIn" element={<HomeLoggedIn />} />
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<Registration/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Search from './Search';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import BookDetails from './Search/bookDetails';

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
          <Route path="/search"    element={<Search/>}/>
          <Route path="/details" element={<BookDetails/>}/>        
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

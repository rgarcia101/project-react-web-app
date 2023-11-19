import './index.css';
import NavBar from './navBar';
import {useState} from "react";
import {API_KEY} from "../client";
import * as client from "../client";



function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);

  const fetchBooks = async () => {
    const results = await client.findBooks(searchTerm);
    setResults(results);
  };


  return(
      <div>
        <NavBar/>
        <div className='page-padding'>
            <label for="inputSearch" className="form-label"><h3>Search</h3></label>
            <form className="row">
                <div className="col-6">
                    <input type="text" className="form-control" id="inputSearch"
                           placeholder='Search by Book Title, Author, or ISBN'
                           value={searchTerm}
                           onChange={(event) => setSearchTerm(event.target.value)}

                    />
                </div>
                <div className="col-2 no-padding-left">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={fetchBooks}

                    >Search</button>
                </div>
            </form>

            <h4 className="page-padding-top">Books</h4>
            <p className='small-margin-bottom'>Page 1 of 10</p>
            <hr className='small-margin-top'/>

          <ul className="list-group">
            {results && results.map((item, index) => (
                <li key={index} className={"list-group-item"}>

                  {/*<Link to={`/details/${item.id}`}>*/}  TODO: Fix this - link not working
                    Title: {item.volumeInfo.title}<br />
                    Author: {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author'}<br />
                    Id: {item.id}<br/>
                    <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : ''}/>
                  {/*</Link>*/}
                </li>
            ))
            }


            {/*{results && results.map((item, index) => (*/}
            {/*    <li key={index} className={"list-group-item"}>*/}
            {/*      <Link to {`/details/${item.id}`}>*/}
            {/*        Title: {item.title}<br />*/}
            {/*        Author: {item.authors ? item.authors.join(', ') : 'Unknown Author'}<br />*/}
            {/*        <img src={item.imageLinks ? item.imageLinks.smallThumbnail : ''}/>*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*  ))*/}
            {/*}*/}
          </ul>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
     </div>
    );
 }
 export default Search;
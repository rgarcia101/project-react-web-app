import './index.css';
import NavBar from './navBar';
import {useEffect, useState} from "react";
import {API_KEY} from "../client";
import * as client from "../client";
import { Link, useParams, useNavigate } from 'react-router-dom';



function Search() {
  const {search} = useParams();
  const [searchTerm, setSearchTerm] = useState(search);
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const fetchBooks = async (search) => {
    const results = await client.findBooks(search);
    setResults(results);
    setSearchTerm(search);
  };

  useEffect(() => {
    if (search){
      fetchBooks(search);
    }

  }, [search]

  );


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
                            onClick={() => navigate(`/search/${searchTerm}`)

                            }

                    >Search</button>
                </div>
            </form>

            <h4 className="page-padding-top">Books</h4>
            <p className='small-margin-bottom'>Page 1 of 10 max results</p>
            <hr className='small-margin-top'/>

          <ul className="list-group">
            {results && results.map((item, index) => (
                <li key={index} className={"list-group-item"}>

                  {/* Working now, not sure why!!*/}
                  
                  <Link to={`/details/${item.id}`} className='link-styling'>  
                  <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : ''} className='float-start margin-thumbnail'/>
                    <span className='title-size font-bold'>{item.volumeInfo.title}</span><br />
                    by {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author'}<br />
                    
                  </Link>
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
          {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
        </div>
     </div>
    );
 }
 export default Search;
import './index.css';
import NavBar from './navBar';
function Search() {
    return(
       <div>
            <NavBar/>
            
            <div className='page-padding'> 
                <label for="inputSearch" className="form-label"><h3>Search</h3></label>
                <form className="row">
                    <div className="col-6">
                        <input type="text" className="form-control" id="inputSearch" placeholder='Search by Book Title, Author, or ISBN'/>
                        
                    </div>
                    <div className="col-2 no-padding-left">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>

                <h4 className="page-padding-top">Books</h4>
                <p className='small-margin-bottom'>Page 1 of 500 results</p>
                <hr className='small-margin-top'/>

                {/* figure out how to make an array of books here */}

                

            </div>

            

       </div>
    );
 }
 export default Search;
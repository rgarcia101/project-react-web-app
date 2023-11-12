import NavBar from "./navBar";
import './index.css'
function BookDetails() {
    return(
       <div>
         <NavBar/>
         <div className='page-padding'> 
          <h1>Book Details</h1>
          {/* Grid for book, book description and similar book recs */}
            <div>
               <div class="row">
                  <div class="col-2 yellow-color">
                     Book image <br/>
                     <button className="btn btn-success">Want to read</button>
                  </div>
                  <div class="col-6 green-color">
                     <h2>Book Title</h2>
                     <h5>Author Name</h5>
                     <h6>Rating</h6>
                     <div class="form-floating">
                        <input type="text" readonly class="form-control-plaintext no-cursor" id="floatingPlaintextInput" placeholder="name@example.com" value="This is where the book description will live." rows="10"/>
                     </div>

                     <p>Genre it falls under (maybe like 3?)</p>
                     <p>Book details like page number, publication date, edition</p>
                     
                  </div>
                  <div class="col aqua-color">
                     <h6>Similar books</h6>
                     {/*put similar books here. maybe three or 4 ?? */} 
                  </div>
               </div>
            </div>

            {/* Here we have a grid for user and their review */}
            <div>
            <div class="row">
               <div class="col">
               <button type="button" class="btn btn-outline-secondary float-end">Filter</button>
               <h3>Community Reviews</h3>
                  
               </div>
               
            </div>
            <div class="row">
                  <div class="col-2 yellow-color">
                     
                     <h6>User Image, Username, # of reviews, follower count, follow button</h6>
                  </div>
                  <div class="col green-color">
                     <p>star rating here or something</p>
                     <p>User Review here</p>
                  </div>
               </div>
            </div>
          </div>
       </div>
    );
 }
 export default BookDetails;
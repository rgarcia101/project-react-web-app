import Navigation from "../Navigation";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import * as client from "../client";  // this is where functions are

import './index.css'
function BookDetails() {
   const [book, setBook] = useState (null);
   const {bookId} = useParams();

   const fetchBook = async () => {
      const book = await client.findBookById(bookId);
      setBook(book);
   };

   const handleSaveBook = async () => {
     await client.saveBook({
       apiId: bookId,
       title: book.title,
       author: book.author,
       thumbnail: book.imageLinks ? book.imageLinks.smallThumbnail : ''
     })
   }

   useEffect(() =>{
      fetchBook();
   }, []);
    return(
       <div>
         <Navigation/>
         <div className='page-padding'> 
          {/* <h1>Book Details {bookId}</h1> */}
          {/* <pre>{JSON.stringify(book, null, 2)}</pre> */}
          {/* Grid for book, book description and similar book recs */}
            <div>
               {book && (
                  <div class="row">
                  <div class="col-2 text-center">
                     <img src={book.imageLinks ? book.imageLinks.smallThumbnail : ''} class = "img-fluid"/><br/>
                     <button className="btn btn-success margin-20-top"
                             onClick={handleSaveBook}
                     >Want to read</button>
                  </div>
                  <div class="col">
                     <h2 className="font-bold">{book.title}</h2>
                     <h5>{book.authors[0]}</h5>
                     <h6>Rating: {book.averageRating ? book.averageRating: "Unknown"}</h6><hr/>
                     <p dangerouslySetInnerHTML={{ __html: book.description }} /><hr/>
                     <p>Genre: {book.categories[0]}</p>

                     {/* Book details like page number, publication date, edition */}
                     <p>
                        Page Number: {book.pageCount}<br/>
                        Publisher: {book.publisher}<br/>
                        Publication Date: {book.publishedDate}<br/>
                        ISBN: {book.industryIdentifiers[0].identifier}<br/>
                        Print Type: {book.printType}

                     </p>
                     
                  </div>
                  
               </div>

               )}
               
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
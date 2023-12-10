import Navigation from "../Navigation";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "../client";    // book details from API
import * as client2 from "./client";    // interacting with back end
import * as client3 from "../users/client";

import './index.css'
function BookDetails() {
   const [book, setBook] = useState (null);
   const {bookId} = useParams();
   const [profile, setProfile] = useState(null);
   const [booksWithSameApiId, setBooksWithSameApiId] = useState([]);
   //const [booksWithDetails, setBooksWithDetails] = useState([]);

   // TODO: I want to add the logged in user to the book schema so that we know who added it.
  // When we click on a book we need to keep track of who clicked.
  const fetchAccount = async () => {
    const profile = await client3.account();
    setProfile(profile);
  };
  useEffect(() => {
    fetchAccount();
  }, []);


   const fetchBook = async () => {
      const book = await client.findBookById(bookId);
      setBook(book);
   };

   useEffect(() => {
      fetchBook();
    }, [bookId]); // Update the dependency array

   // NOT WORKING AS EXPECTED.
  // const handleSaveBookshelfItem = async () => {
  //   if (profile && book) {
  //     await client2.saveBookshelfItem(profile._id, book._id);
  //   }
  // };

//   const fetchBooks = async () => {
//    // Check if profile is available before fetching books
//    if (profile) {
//      const allBooks = await client2.findAllBooks();            // Ideally change to findAllBooksByUserId
//      // Filter books based on the current user's ID
//      const userBooks = allBooks.filter(book => book.user === profile._id);
//      setBooks(userBooks);
//    }
//  };
//  useEffect(() => {
//    fetchBooks();
//  }, [profile]);

// const fetchBooksWithApi = async () => {
//    if (book) {
//       const books = await client2.findAllBooksByApiId(bookId);
//       setBooksWithSameApiId(books);
//    }
// };
// useEffect(() => {
//    fetchBooksWithApi();
//  }, [book]);


//________RAQUEL's CODE

// const fetchBooksWithApi = async () => {
//    try{
      
//          const booksWithSameApiId = await client2.findAllBooksByApiId(bookId);
    
//          if (!booksWithSameApiId || booksWithSameApiId.length === 0) {
//           // Handle the case where there are no matching books
//           console.log("Books not found");
//           setBooksWithSameApiId([]);
//           return;
//          }
        
     
//          // Fetch user and review for each book
//          const booksWithDetails = await Promise.all(
//            booksWithSameApiId.map(async (book) => {
//              const user = await client3.findUserById(book.user);
//              const username = user ? user.username : 'Unknown';
//              const review = book.review;
//              const userProfileLink = `/profile/${book.user}`; // Adjust the route based on your actual route structure
//              return { ...book.toObject(), username, review, userProfileLink };
//            })
//          );
     
//          setBooksWithDetails(booksWithDetails);
//        } catch(error){
//       setBooksWithDetails([]);
//    }
   
   
//  };

//  useEffect(() => {
//    fetchBooksWithApi();
//  }, []);

const fetchBooksWithApi = async () => {
   try {
     const booksWithSameApiId = await client2.findAllBooksByApiId(bookId);

     if (!booksWithSameApiId || booksWithSameApiId.length === 0) {
       console.log("Books not found");
       setBooksWithSameApiId([]);
     } else {
       setBooksWithSameApiId(booksWithSameApiId);
     }
   } catch (error) {
     console.error('Error fetching books with API ID:', error);
     setBooksWithSameApiId([]);
   }
 };

 useEffect(() => {
   fetchBooksWithApi();
 }, []);

// const fetchBooksWithApi = async () => {
//   try {
//     const booksWithSameApiId = await client2.findAllBooksByApiId(bookId);

//     if (!booksWithSameApiId || booksWithSameApiId.length === 0) {
//       console.log("Books not found");
//       setBooksWithSameApiId([]);
//     } else {
//       // Fetch user and review for each book
//       const booksWithDetails = await Promise.all(
//         booksWithSameApiId.map(async (book) => {
//           const user = await client3.findUserById(book.user);
//           const username = user ? user.username : 'Unknown';

//           const review = book.review;
//           const userProfileLink = `/profile/${book.user}`;

//           return { ...book.toObject(), username, review, userProfileLink };
//         })
//       );

//       setBooksWithSameApiId(booksWithDetails);
//     }
//   } catch (error) {
//     console.error('Error fetching books with API ID:', error);
//     setBooksWithSameApiId([]);
//   }
// };

// useEffect(() => {
//   fetchBooksWithApi();
// }, []);

 const getUsernameForUser = async (userId) => {
   try {
     const user = await client3.findUserById(userId);
     return user ? user.username : 'Unknown';
   } catch (error) {
     console.error('Error fetching user by ID:', error);
     return 'Unknown';
   }
 };

  // Save book to database
  const handleSaveBook = async () => {
    if (book) {
      // save book
      const savedBook = {
        title: book.title,
        author: book.authors[0],
        apiId: bookId,
        isbn: book.industryIdentifiers[0].identifier,
        publisher: book.publisher,
        image: book.imageLinks.smallThumbnail,
        dateAdded:  new Date(),
        user: profile._id
      };
      // save bookshelf item

      await client2.saveBook(savedBook);
    }
  };
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
                    <button className="btn btn-success margin-20-top" onClick={() => {
                      handleSaveBook();
                      // handleSaveBookshelfItem();
                    }}>
                      Want to read
                    </button>

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
               {booksWithSameApiId && (booksWithSameApiId.length === 0 ? (
                  <p>No reviews found.</p>
                  ) : (
                     booksWithSameApiId.map((book) => (
                     <div className="row" key={book._id}>
                        <div className="col-2 yellow-color">
                        <h6>
                           <Link to={`/profile/${book.user}`}>{book.user}</Link>
                        </h6>
                        </div>
                        <div className="col green-color">
                        <p>{book.review || 'No review available'}</p>
                        </div>
                     </div>
                  )))
                  )}
            </div>
          </div>
       </div>
    );
 }
 export default BookDetails;
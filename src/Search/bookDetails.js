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


const fetchBooksWithApi = async () => {
  try {
    const booksWithSameApiId = await client2.findAllBooksByApiId(bookId);

    if (!booksWithSameApiId || booksWithSameApiId.length === 0) {
      console.log("Books not found");
      setBooksWithSameApiId([]);
    } else {
      // Create an array of promises to fetch usernames for user IDs
      const usernamePromises = booksWithSameApiId.map(async (book) => {
        const username = await getUsernameForUser(book.user);
        return { ...book, username };
      });

      // Resolve all promises
      const booksWithDetails = await Promise.all(usernamePromises);
      setBooksWithSameApiId(booksWithDetails);
    }
  } catch (error) {
    console.error('Error fetching books with API ID:', error);
    setBooksWithSameApiId([]);
  }
};
useEffect(() => {
  fetchBooksWithApi();
}, []);

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
                     <h5>{book.authors && book.authors.length > 0 ? book.authors[0] : 'Unknown Author'}</h5>
                     <h6>Rating: {book.averageRating ? book.averageRating: "Unknown"}</h6><hr/>
                     <p dangerouslySetInnerHTML={{ __html: book.description }} /><hr/>
                     <p>Genre: {book.categories && book.categories.length > 0 ? book.categories[0] : 'Unknown Genre'}</p>

                     {/* Book details like page number, publication date, edition */}
                     <p>
                     Page Number: {book.pageCount || 'Unknown'}<br />
                     Publisher: {book.publisher || 'Unknown'}<br />
                     Publication Date: {book.publishedDate || 'Unknown'}<br />
                     ISBN: {book.industryIdentifiers && book.industryIdentifiers.length > 0 ? book.industryIdentifiers[0].identifier : 'Unknown'}<br />
                     Print Type: {book.printType || 'Unknown'}

                     </p>
                     
                  </div>
                  
               </div>

               )}
               
            </div>

            {/* Here we have a grid for user and their review */}
            <div className="container mt-4">
              <div className="row">
                  <div className="col">
                    <h3>Community Reviews</h3>
                    <hr />
                  </div>
              </div>
              <div className="row">
                  {booksWithSameApiId && booksWithSameApiId.length === 0 ? (
                    <div className="col">
                        <p>No reviews found.</p>
                    </div>
                  ) : (
                    booksWithSameApiId.map((book, index) => (
                        <div className="col-12 mb-4" key={book._id}>
                          <div className="d-flex">
                              <div className="me-3">
                                <h6>
                                    <Link to={`/profile/${book.user}`} className= "link-styling large-font">{book.username}</Link>
                                </h6>
                              </div>
                              <div className="flex-grow-1">
                                <p>{book.review || 'No review available'}</p>
                              </div>
                          </div>
                          {index < booksWithSameApiId.length - 1 && <hr />}
                        </div>
                    ))
                  )}
              </div>
            </div>
            </div>
        </div>
    );
 }
 export default BookDetails;
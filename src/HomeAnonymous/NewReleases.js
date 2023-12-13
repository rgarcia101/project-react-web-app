import * as client from "../client";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { account } from '../users/client'; // Assuming this is how you check for logged-in user

function NewReleases(){

// Get lists of fiction and nonfiction new releases
  const [fictionReleases, setFictionReleases] = useState([]);
  const [nonFictionReleases, setNonFictionReleases] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const handleBookClick = (bookId) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate(`/details/${bookId}`);
    }
  };


  useEffect(() => {
    // Fetch user account to check if the user is logged in
    account()
      .then(response => {
        setIsLoggedIn(response && Object.keys(response).length > 0);
        // Once the login status is known, fetch latest releases
        fetchLatestReleases();
      })
      .catch(() => {
        setIsLoggedIn(false);
        fetchLatestReleases();
      });
  }, []);

  const fetchLatestReleases = async () => {
    try {
      const searchTermFiction = 'new fiction releases';
      const fictionResults = await client.findBooks(searchTermFiction);

      const searchTermNonFiction = 'new nonfiction releases';
      const nonFictionResults = await client.findBooks(searchTermNonFiction);

      setFictionReleases(fictionResults.slice(0, 10)); // Assuming you want to limit to 10
      setNonFictionReleases(nonFictionResults.slice(0, 10));
    } catch (error) {
      console.error('Error fetching latest releases:', error);
    }
  };

  const renderBookList = (books) => (
      <div className="table-responsive">
        <table className="table">
          <tbody>
          <tr>
            {books.map((book) => (
                <td key={book.id}>
                  <div onClick={() => handleBookClick(book.id)}>
                    {book.volumeInfo.imageLinks && (
                        <img
                            src={book.volumeInfo.imageLinks.smallThumbnail}
                            alt={book.volumeInfo.title}
                            className="img-thumbnail"
                        />
                    )}
                  </div>
                  <div>
                    <p>
                      <strong>{book.volumeInfo.title}</strong><br/>
                      by {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                  </div>
                </td>
            ))}
          </tr>
          </tbody>
        </table>
      </div>
  );

  return(

      <div>
        <h5>New Fiction Releases</h5>
        {renderBookList(fictionReleases)}

        <h5>New Non-Fiction Releases</h5>
        {renderBookList(nonFictionReleases)}
      </div>

  )
}

export default NewReleases
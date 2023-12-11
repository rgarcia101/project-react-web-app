import * as client from "../booksapi/client";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";

function NewReleases(){

// Get lists of fiction and nonfiction new releases
  const [fictionReleases, setFictionReleases] = useState([]);
  const [nonFictionReleases, setNonFictionReleases] = useState([]);
  const navigate = useNavigate();
  const handleBookClick = (bookId) => {
    navigate(`/details/${bookId}`);
  };

  useEffect(() => {
    const fetchLatestReleases = async () => {
      try {
        const searchTerm = 'new fiction releases'; // Adjust the search term for fiction
        const fictionReleases = await client.findBooks(searchTerm);

        const searchTermNonFiction = 'new nonfiction releases'; // Adjust the search term for non-fiction
        const nonFictionReleases = await client.findBooks(searchTermNonFiction);

        // Sort books based on publishedDate in descending order
        const sortAndSlice = (books) =>
            books
                .sort((a, b) => new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate))
                .slice(0, 10);

        setFictionReleases(sortAndSlice(fictionReleases));
        setNonFictionReleases(sortAndSlice(nonFictionReleases));
      } catch (error) {
        console.error('Error fetching latest releases:', error);
      }
    };

    fetchLatestReleases();
  }, []);

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
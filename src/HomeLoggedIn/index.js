import "../index.css";
import NewReleases from "../HomeAnonymous/NewReleases";
import Navigation from "../Navigation";
import * as client from "../users/client";
import * as client2 from "../Profile/client";
import * as postClient from "../posts/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeLoggedIn() {
  const [profile, setProfile] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [booksWithPosts, setBooksWithPosts] = useState([]);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const profile = await client.account();
    setProfile(profile);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/details/${bookId}`);
  };

  const fetchBooks = async () => {
    if (profile) {
      try {
        const allBooksData = await client2.findAllBooks();

        // Filter all books based on the current user's ID
        const userBooks = allBooksData.filter(
            (book) => book.user === profile._id
        );
        // Sort all books by dateAdded in descending order
        const sortedAllBooks = [...userBooks].sort((a, b) =>
            b.dateAdded.localeCompare(a.dateAdded)
        );
        // Limit the list to 10 books
        const top10Books = sortedAllBooks.slice(0, 10);
        setAllBooks(top10Books);

        // Fetch posts for books with posts
        const booksWithPostsData = await Promise.all(
            top10Books.map(async (book) => {
              const posts = await postClient.findPostsByBookApiId(book.apiId);
              return { ...book, posts };
            })
        );

        setBooksWithPosts(booksWithPostsData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [profile]);


  return (
      <div>
        <Navigation />
        <div className="wd-grid-col-wide-column wd-general">
          <div className="row wd-general ">
            <h5>Most Recent Additions to Your Bookshelf</h5><br/><br/>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                <tr>
                  {allBooks && allBooks.map((book) => (
                      <td key={book._id}>
                        <div onClick={() => handleBookClick(book.apiId)}>
                          {book.image && (
                              <img
                                  src={book.image}
                                  className="img-thumbnail"
                              />
                          )}
                        </div>
                        <div>
                          <p>
                            <strong>{book.title}</strong><br/>
                            by {book.author}</p>
                        </div>
                      </td>
                  ))}
                </tr>
                </tbody>
              </table>
            </div>
            <hr/>
            <NewReleases />
          </div>
        </div >
        <div className="wd-grid-col-right-panel wd-general">
          <h5>AUTHOR POSTS</h5><br/>
          <div>
            {booksWithPosts && (
              <div>
                {booksWithPosts.map((book) => (
                    <div key={book._id}>
                      {book.posts && book.posts.length > 0 && (
                          <div>
                            {book.posts.map((post) => (
                                <div key={post._id}>
                                  <p>
                                    <strong>{post.author}</strong>
                                  </p>
                                  <hr />
                                  {post.text && (
                                      <p>{post.text}</p>
                                  )}
                                </div>
                            ))}
                          </div>
                      )}
                    </div>
                ))}

                {/*{booksWithPosts.map((book) => (*/}
                {/*  <div key={book._id}>*/}
                {/*    {book.posts && book.posts.length > 0 && (*/}
                {/*      <div>*/}
                {/*        {book.posts.map((post) => (*/}
                {/*            <div key={post._id}>*/}
                {/*              <p>*/}
                {/*                <strong>{post.author}</strong>*/}
                {/*              </p><hr/>*/}
                {/*              {post.text && (*/}
                {/*                  <p>*/}
                {/*                    {post.text}*/}
                {/*                  </p>*/}
                {/*              )}*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*      </div>*/}
                {/*    )}*/}
                {/*  </div>*/}
                {/*))}*/}
              </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default HomeLoggedIn;
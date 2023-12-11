import "../index.css";
import Navigation from "../Navigation";
import * as usersClient from "../users/client";
import * as booksClient from "../books/client";
import * as followsClient from "../follows/client";
import * as postsClient from "../posts/client";
import React, { useState, useEffect } from "react";
import { BsFillPersonFill, BsPencilSquare } from "react-icons/bs";
//import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";

function Profile() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingReview, setIsEditingReview] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [editedReviewBookId, setEditedReviewBookId] = useState(null);
  const [editedReview, setEditedReview] = useState('');
  const [books, setBooks] = useState([]);
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  // PROFILE FUNCTIONS
  const findUserById = async (id) => {
    const user = await usersClient.findUserById(id);
    setProfile(user);
  };
  const fetchAccount = async () => {
    const profile = await usersClient.account();
    setProfile(profile);
    setEditedFirstName(profile.firstName || '');
    setEditedLastName(profile.lastName || '');
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, [id]);


  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };
  const toggleReviewEditMode = () => {
    setIsEditingReview(!isEditingReview);
  };

  const handleFirstNameChange = (e) => {
    setEditedFirstName(e.target.value);
  };
  
  const handleLastNameChange = (e) => {
    setEditedLastName(e.target.value);
  };

  const handleReviewChange = (e) => {
    setEditedReview(e.target.value);
  };

  const saveChanges = async () => {
    // Update the profile with edited values
    const updatedProfile = {
      ...profile,
      firstName: editedFirstName,
      lastName: editedLastName,
    };
  
    // Call the client function to update the user
    await usersClient.updateUser(updatedProfile);
  
    // Fetch the updated profile after saving changes
    fetchAccount();
  
    // Exit edit mode
    setIsEditing(false);
  };


  const saveReviewChanges = async (bookId) => {
    // Find the book by ID
    const bookToUpdate = books.find((book) => book._id === bookId);

    // Update the review in the book with edited value
    const updatedBook = {
      ...bookToUpdate,
      review: editedReview,
    };

    // Call the client function to update the book
    await booksClient.updateBook(updatedBook);

    // Fetch the updated books after saving changes
    fetchBooks();
    toggleReviewEditMode();
    setEditedReviewBookId(null);
  };


  // BOOKS FUNCTION
  const fetchBooks = async () => {
    // Check if profile is available before fetching books
    if (profile) {
      const allBooks = await booksClient.findAllBooks();
      // Filter books based on the current user's ID
      const userBooks = allBooks.filter(book => book.user === profile._id);
      setBooks(userBooks);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, [profile]);

  // POSTS FUNCTION
  const fetchPosts = async () => {
    if (profile) {
      const allPosts = await postsClient.findAllPosts();
      // Filter posts based on the current user's ID
      const userPosts = allPosts.filter(post => post.user === profile._id);
      setPosts(userPosts);
    }
  };
  useEffect(() => {
    fetchPosts();
    }, [profile]);

  // FOLLOWS FUNCTIONS
  const followUser = async () => {
    await followsClient.userFollowsUser(profile._id);
    navigate(`/profile/${profile._id}`);
  };
  const unfollowUser = async () => {
    await followsClient.userUnfollowsUser(profile._id);
    // After unfollowing, navigate to the user's profile
    navigate(`/profile/${profile._id}`);
  };
  const fetchFollowers = async () => {
    const followers = await followsClient.findFollowersOfUser(profile._id);
    setFollowers(followers);
  };

  const fetchFollowing = async () => {
    const following = await followsClient.findFollowedUsersByUser(profile._id);
    setFollowing(following);
  };

  // const alreadyFollowing = () => {
  //   return followers.some((follows) => {
  //     return follows.follower._id === profile._id;
  //   });
  // };


  useEffect(() => {
    if (profile && profile._id) {
      fetchFollowers();
      fetchFollowing();
    }
  }, [profile, id]);



  return (
      <div>
        <Navigation />
        {profile && (
        <div className="wd-grid-col-wide-column wd-general">
          <div className="wd-grid-row">
            <div className="wd-grid-col-narrow-column wd-general">
              <BsFillPersonFill className="wd-icon" style={{ float: "right", fontSize: "11em", color: "grey"}} />
            </div>
            <div className="wd-grid-col-wide-column wd-general">
            {isEditing ? (
              <button className="btn btn-success float-end" onClick={saveChanges}>
                Save
              </button>
            ) : (
              <button className="btn btn-dark float-end" onClick={toggleEditMode}>
                Edit User Information
              </button>
            )}
              <div>
                <span>
                  <h4>{profile.username}  <i>(NOTE: ROLE = USER, AUTHOR)</i></h4>
                </span>
                <>
                {/*  {alreadyFollowing() ? (*/}
                      <button onClick={unfollowUser} className="btn btn-danger button">Unfollow</button>
                  {/*) : (*/}
                      <button onClick={followUser} className="btn btn-success button">Follow</button>
                  {/*)}*/}
                  <i>(NOTE: ROLE = USER)</i>

                </>
              </div>
              <hr/>
              <table className="table">
                <tbody>
                <tr >
                  <td>First Name</td>
                  <td>{isEditing ? (
                      <input
                        type="text"
                        value={editedFirstName}
                        onChange={handleFirstNameChange}
                      />
                    ) : (
                      profile.firstName
                    )}
                  </td>
                  {/* <td>EDIT BUTTON</td> */}
                </tr>
                <tr >
                  <td>Last Name</td>
                  <td>{isEditing ? (
                        <input
                          type="text"
                          value={editedLastName}
                          onChange={handleLastNameChange}
                        />
                      ) : (
                        profile.lastName
                      )}
                  </td>
                  {/* <td>EDIT BUTTON</td> */}
                </tr>
                <tr >
                  <td>Activity</td>
                  <td>Member since {new Date(profile.startDate).toLocaleDateString('en-US', options)}</td>
                  <td></td>
                </tr>
                <tr >
                  <td>
                    Biography
                    <br/><i>(NOTE: ROLE = AUTHOR, ALLOW EDIT)</i>
                  </td>
                  <td>{profile.biography}</td>
                  <td></td>
                </tr>
                </tbody>
              </table>

            </div>
          </div><br/>

          <br/>

          {/*BOOKS TABLE */}
          <h5>Bookshelf</h5>
          <i>(NOTE: ROLE = USER)</i>
          <table className="table">
            <thead>
            <tr>
              <th className="table-dark-blue-row">Title</th>
              <th className="table-dark-blue-row">Author</th>
              <th className="table-dark-blue-row">Publisher</th>
              <th className="table-dark-blue-row">Review</th>
              <th className="table-dark-blue-row"></th>
            </tr>
            </thead>
            <tbody>
            {books && books.map((book) => (
                <tr key={book._id}>
                  <td>
                    <Link to={`/details/${book.apiId}` } className="book-link">
                      {book.title}
                    </Link>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>
                  {isEditingReview && book._id === editedReviewBookId ? (
                    <input
                      type="text"
                      value={editedReview}
                      onChange={handleReviewChange}
                    />
                  ) : (
                    book.review
                  )}
                </td>
                <td>
                  {isEditingReview && book._id === editedReviewBookId ? (
                    <button
                      className="btn btn-success"
                      onClick={() => saveReviewChanges(book._id)}
                    >
                      Save Review
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        toggleReviewEditMode();
                        setEditedReviewBookId(book._id);
                        setEditedReview(book.review);
                      }}
                    >
                      Edit Review
                    </button>
                  )}
                </td>
                </tr>
            ))}
            </tbody>
          </table><br/><br/>

          <h5>Posts to Readers</h5>
          <i>(NOTE: ROLE = AUTHOR)</i>
          <table className="table">
            <thead>
            <tr>
              <th className="table-dark-blue-row">Post Audience Has This Book</th>
              <th className="table-dark-blue-row">Post</th>
            </tr>
            </thead>
            <tbody>
            {posts && posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>{post.text}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        )}
        <div className="wd-grid-col-right-panel">
          <div className="wd-grid-row wd-general">
            <h5><i>NOTE: ROLE = USER</i></h5>
            <h5>Following</h5>
            <hr />
            <div className="follow_list">
              {following.map((follows, index) => (
                  <div
                      key={index}
                      className="follow-link"
                      onClick={() => navigate(`/profile/${follows.followed._id}`)}
                  >
                    {follows.followed.username}
                  </div>
              ))}
            </div>
            <br />
            <h5>Followers</h5>
            <hr />
            <div className="follow_list">
              {followers.map((follows, index) => (
                  <div
                      key={index}
                      className="follow-link"
                      onClick={() => navigate(`/profile/${follows.follower._id}`)}
                  >
                    {follows.follower.username}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
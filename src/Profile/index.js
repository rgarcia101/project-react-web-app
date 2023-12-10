import "../index.css";
import Navigation from "../Navigation";
import * as usersClient from "../users/client";
import * as booksClient from "../books/client";
import * as followsClient from "../follows/client";
import React, { useState, useEffect } from "react";
import { BsFillPersonFill, BsPencilSquare } from "react-icons/bs";
import { useParams } from 'react-router-dom';

function Profile() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const [books, setBooks] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { id } = useParams();


  // PROFILE FUNCTIONS
  const fetchAccount = async () => {
    const profile = await usersClient.account();
    setProfile(profile);
    setEditedFirstName(profile.firstName || '');
    setEditedLastName(profile.lastName || '');
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleFirstNameChange = (e) => {
    setEditedFirstName(e.target.value);
  };
  
  const handleLastNameChange = (e) => {
    setEditedLastName(e.target.value);
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


  // BOOKS FUNCTIONS
  // TODO: Here we are fetching all books and filtering by profile id. Ideally we should use a findAllBooksById function.
  const fetchBooks = async () => {
    // Check if profile is available before fetching books
    if (profile) {
      const allBooks = await booksClient.findAllBooks();            // Ideally change to findAllBooksByUserId
      // Filter books based on the current user's ID
      const userBooks = allBooks.filter(book => book.user === profile._id);
      setBooks(userBooks);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, [profile]);


  // REVIEWS FUNCTIONS - WIP
  // const handleReviewChange = async (bookId, updatedReview) => {
  //   const updatedBook = {
  //     ...books.find(book => book._id === bookId),
  //     review: updatedReview,
  //   };
  //
  //   // Call the client function to update the book with the updated review
  //   await booksClient.updateBook(updatedBook);
  //
  //   // Fetch the updated books after saving changes
  //   fetchBooks();
  // };



  const followUser = async () => {
    const status = await followsClient.userFollowsUser(profile._id);
  };
  const unfollowUser = async () => {
    const status = await followsClient.userUnfollowsUser(profile._id);
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
  //     return follows.follower._id === currentUser._id;
  //   });
  // }



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
                  <h4>{profile.username}</h4>
                </span>
                <button className="btn btn-success button">Follow</button>
                <button className="btn btn-danger button">Unfollow</button>
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
                </tbody>
              </table>

            </div>
          </div><br/>
          <h4>NOTE: Author could have same table but just expose biography</h4>

          <br/>

          {/*BOOKS TABLE */}
          <h5>Bookshelf</h5>
          <table className="table">
            <thead>
            <tr>
              <th className="table-dark-blue-row">Title and Author</th>
              <th className="table-dark-blue-row">Publisher</th>
              <th className="table-dark-blue-row">Review</th>
            </tr>
            </thead>
            <tbody>
            {books && books.map((book) => (
                <tr key={book._id}>
                  <td><strong>{book.title}</strong>, {book.author}</td>
                  <td>{book.publisher}</td>
                  <td>{book.review}</td>
                </tr>
            ))}
            </tbody>
          </table><br/><br/>

          <h5>SAMPLE TABLE FOR AUTHOR (Note: They could add book to bookshelf and so it could show up here) </h5>
          <table className="table">
            <thead>
            <tr>
              <th className="table-dark-blue-row">Post Audience Has This Book</th>
              <th className="table-dark-blue-row">Post</th>
            </tr>
            </thead>
            <tbody>
            {books && books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.post}</td>
                </tr>
            ))}
            </tbody>
          </table>


        </div>
        )}

        <div className="wd-grid-col-right-panel">
          <div className="wd-grid-row wd-general">
            <h6>
              Following (5)
            </h6>
            <hr/>
            <div>
              <div className="follow_list">Story Seeker</div>
              <div className="follow_list">LitLover</div>
              <div className="follow_list">WordWizard</div>
              <div className="follow_list">LisaLovesBooks</div>
              <div className="follow_list">MarkG</div>
            </div><br/>
            <h6>
              Followers (6)
            </h6><hr/>
            <div>
              <div className="follow_list">Story Seeker</div>
              <div className="follow_list">LitLover</div>
              <div className="follow_list">WordWizard</div>
              <div className="follow_list">LisaLovesBooks</div>
              <div className="follow_list">MarkG</div>
              <div className="follow_list">Jack</div>
            </div><br/>
          </div>
        </div>
      </div>
  );
}

export default Profile;
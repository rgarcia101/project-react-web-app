import "../index.css";
import Navigation from "../Navigation";
import {BsFillPersonFill} from "react-icons/bs";
import * as client from "../users/client";
import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const navigate = useNavigate();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setProfile(user);
  };
  const fetchAccount = async () => {
    const profile = await client.account();
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
    await client.updateUser(updatedProfile);
  
    // Fetch the updated profile after saving changes
    fetchAccount();
  
    // Exit edit mode
    setIsEditing(false);
  };


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
                  <td>Member since {new Date(profile.start_date).toLocaleDateString('en-US', options)}</td>
                  <td></td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
          
          <div className="wd-grid-row wd-general">
            <h5>Bookshelf</h5>
            <table className="table-profile">
              <tr className="table-profile-header-row">
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Review</th>
                <th scope="col">Review Actions</th>
              </tr>
              <tr>
                <td>Caleb's Crossing</td>
                <td>Geraldine Brooks</td>
                <td>Great Book</td>
                <td>EDIT BUTTON, DELETE BUTTON</td>
              </tr>
              <tr>
                <td>Team of Rivals</td>
                <td>Doris Kearns Goodwin</td>
                <td></td>
                <td>ADD BUTTON</td>
              </tr>
            </table>
          </div>
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
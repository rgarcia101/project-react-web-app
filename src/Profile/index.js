import "../index.css";
import Navigation from "../Navigation";
import {BsFillPersonFill} from "react-icons/bs";

function Profile() {
  return (
      <div>
        <Navigation />
        <div className="wd-grid-col-wide-column wd-general">
          <div className="wd-grid-row">
            <div className="wd-grid-col-narrow-column wd-general">
              <BsFillPersonFill className="wd-icon" style={{ float: "right", fontSize: "11em", color: "grey"}} />
            </div>
            <div className="wd-grid-col-wide-column wd-general">
              <div>
                <span>
                  <h4>Bookworm22</h4>
                </span>
              </div>
              <hr/>
              <table className="table">
                <tbody>
                <tr >
                  <td>First Name</td>
                  <td>Katie</td>
                  <td>EDIT BUTTON</td>
                </tr>
                <tr >
                  <td>Last Name</td>
                  <td>Davenport</td>
                  <td>EDIT BUTTON</td>
                </tr>
                <tr >
                  <td>Activity</td>
                  <td>Member since October 2023</td>
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
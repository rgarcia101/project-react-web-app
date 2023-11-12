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
                  <strong>Bookworm22</strong> (edit profile)
                </span>
              </div>
              <hr/>
              <table className="table">
                <tbody>
                <tr >
                  <td>Location</td>
                  <td>Medford, MA</td>
                </tr>
                <tr >
                  <td>Activity</td>
                  <td>Member since October 2023</td>
                </tr>
                <tr >
                  <td>Favorite Genres</td>
                  <td>Biography, Historical Fiction, Mystery</td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
          <div className="wd-grid-row wd-general">
            <h5>Bookshelf</h5>
            <table className="table-profile">
              <tr className="table-profile-header-row">
                <th scope="col">Book</th>
                <th scope="col">Genre</th>
                <th scope="col">My Rating</th>
                <th scope="col">Add Comment</th>
                <th scope="col">Private Notes</th>
              </tr>
              <tr>
                <td>Steve Jobs, Walter Isaacson</td>
                <td>Biography</td>
                <td>*****</td>
                <td>+</td>
                <td>Bday gift for Bob</td>
              </tr>
              <tr>
                <td>Steve Jobs, Walter Isaacson</td>
                <td>Biography</td>
                <td>*****</td>
                <td>+</td>
                <td>Bday gift for Bob</td>
              </tr>

            </table>

          </div>
          <div className="wd-grid-row wd-general">
            <h5>Wish List</h5>
            <table className="table-profile">
              <tr className="table-profile-header-row">
                <th scope="col">Book</th>
                <th scope="col">Genre</th>
                <th scope="col">NYT Rating</th>
                <th scope="col">Comment</th>
                <th scope="col">Private Notes</th>
              </tr>
              <tr>
                <td>The Book Thief, Markus Zusak</td>
                <td>Hist Fiction</td>
                <td>3.92</td>
                <td>Y</td>
                <td>Janet recommended this</td>
              </tr>
              <tr>
                <td>The Book Thief, Markus Zusak</td>
                <td>Hist Fiction</td>
                <td>3.92</td>
                <td>Y</td>
                <td>Janet recommended this</td>
              </tr>
              <tr>
                <td>The Book Thief, Markus Zusak</td>
                <td>Hist Fiction</td>
                <td>3.92</td>
                <td>Y</td>
                <td>Janet recommended this</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="wd-grid-col-followers">
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
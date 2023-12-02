import "../index.css";
import { BsBookFill } from "react-icons/bs";
import NewReleases from "./NewReleases";

function HomeAnonymous() {

  return (
      <div>
        {/*Top Navigation Bar */}
        <div className="row gold-background wd-general">
          <div>
            <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black"}} />
            <span style={{ fontSize: "1.5em"}}>BookBuddies</span>
            <div className="float-end">
              <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Sign In</button>
              <button type="button" className="active-button" style={{ fontSize: "1.1em"}}>Get Started</button>
            </div></div>
        </div>

        {/*Middle Navigation Bar*/}
        <div className="row gold-background wd-general">
          <div className="col large-banner-text">
            <span>
              Create your bookshelf.
            </span><br/>
            <span>
              Learn about books.
            </span><br/>
            <span>
              Connect with other readers.
            </span><br/>
            <span>
              Share book recommendations.
            </span><br/>
          </div>
        </div>

        {/*Data from APIs */}
        <div className="row wd-general ">
          <NewReleases />
        </div>

        {/*Author Page */}
        <hr/>
        <div className="wd-bottom-of-page">
          <h6>Are you an Author?</h6>
          Book Buddies is a great place to promote your books and expand your readership.
          Engage with book lovers by creating posts that are visible to your readers.
        </div>
      </div>
  );
}
export default HomeAnonymous;
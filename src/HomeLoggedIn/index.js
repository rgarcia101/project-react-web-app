import "../index.css";
import NewReleases from "../HomeAnonymous/NewReleases";
import Navigation from "../Navigation";


function HomeLoggedIn() {
  return (
      <div>
        <Navigation />
        <div className="wd-grid-col-wide-column wd-general">
          <div className="row wd-general ">
            <h5>PLACEHOLDER: Most Recent Additions to Your Bookshelf</h5><br/><br/>
            <h5>ADD ANOTHER TABLE IN THE SAME FORMAT BELOW WITH RECENT BOOKS ADDED TO BOOKSHELF</h5><br/><br/>
            <hr/>
            <NewReleases />
          </div>
        </div >

        <div className = "wd-grid-col-right-panel row wd-general">
          <h5>
            AUTHOR CORNER
          </h5>
          <div>
            <p><strong>Author:</strong> Barbara Kingsolver</p>
          </div>
        </div>

      </div>
  );
}

export default HomeLoggedIn;
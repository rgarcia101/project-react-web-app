import "../index.css";
import { BsBookFill } from "react-icons/bs";
import BookList from "./BookList";

function HomeAnonymous() {
  return (
      <div>
        <div className="row gold-background wd-general">
          <div>
            <BsBookFill className="wd-home-icon" style={{ float: "left", fontSize: "2em", color: "black"}} />
            <span style={{ fontSize: "1.5em"}}>BookBuddies</span>
            <div className="float-end">
              <button type="button" className="btn btn-warning" style={{ fontSize: "1.1em"}}>Sign In</button>
              <button type="button" className="active-button" style={{ fontSize: "1.1em"}}>Get Started</button>
            </div></div>
        </div>
        <div className="row gold-background wd-general">
          <div className="col large-banner-text">
            <span>
              Learn about books.
            </span><br/>
            <span>
              Get book recommendations.
            </span><br/>
            <span>
              Share books with friends.
            </span><br/>
            <span>
              Add to your bookshelf.
            </span><br/>
          </div>

        </div>
        <div className="row wd-general ">
          <h6>Sample Personal Recommendations</h6>
          <BookList />
        </div>
        <hr/>
        <div className="row wd-general ">
          <h6>Top Fiction</h6>
          <BookList />
        </div>
        <hr/>
        <div className="row wd-general ">
          <h6>Top Nonfiction</h6>
          <BookList />
        </div>
        <hr/>
        <div className="wd-bottom-of-page">
          <h6>Are you an Author?</h6>
          Book Buddies is a great place to promote your books and expand your readership.
        </div>
      </div>
  );
}
export default HomeAnonymous;
import "../index.css";
import BookList from "../HomeAnonymous/BookList";
import Newsfeed from "./Newsfeed";
import Navigation from "../Navigation";


function HomeLoggedIn() {
  return (
      <div>
        <Navigation />
        <div className="row wd-general ">
          <h5>Your Recommendations</h5>
          <BookList />
        </div><br/>
        <div className="row wd-general">
          <h5>Latest</h5>
          <div>
            <Newsfeed />
          </div>
        </div>
      </div>
  );
}

export default HomeLoggedIn;
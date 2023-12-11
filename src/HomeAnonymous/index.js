import "../index.css";
import { BsBookFill } from "react-icons/bs";
import NewReleases from "./NewReleases";
import { useNavigate } from 'react-router-dom';
import AnonymousNavigation from "./AnonymousNavigation";
function HomeAnonymous() {
  const navigate = useNavigate();

  const handleSignin = () => {
    
    navigate('/login');
  };
  const handleGetStarted = () => {
    
    navigate('/signup');
  };

  const handleSearch = () => {
    
    navigate('/search');
  };


  return (
      <div>
        {/*Top Navigation Bar */}
        <div>
          <AnonymousNavigation /> 
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
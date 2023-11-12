import './index.css';
function NavBar(){
    return(
    <>
        <ul className="nav navbar-expand-lg gold-background nav-pills black-text">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item oval-active-nav-pill">
                    <a className="nav-link active" href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Logout</a>
                </li>
            </ul>
    </>
    );
    

}

export default NavBar;
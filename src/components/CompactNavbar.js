import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


function CompactNavbar() {
  return (
    <>
      <nav className="compact-navbar">
        <h1>Logo</h1>
        <div className="compact-navbar-container">
          <Link to="/" className="link">
            <button className="compact-navbar-button">Home</button>
          </Link>
          <Link to="/calendar" className="link">
            <button className="compact-navbar-button">Calendar</button>
          </Link>
          <Link to="/lineup" className="link">
            <button className="compact-navbar-button">Lineup</button>
          </Link>
          <Link to="/settings" className="link">
            <button className="compact-navbar-button">Settings</button>
          </Link>
          <Link to="/more" className="link">
            <button className="compact-navbar-button">More</button>
          </Link>
        </div>
        <GiHamburgerMenu className="compact-navbar-icon"/>
      </nav>
    </>
  );
}

export default CompactNavbar;
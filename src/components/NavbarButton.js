import { Link } from 'react-router-dom';

function NavbarButton({ imageSrc, imageAlt, text, link }) {
  return (
    <Link to={link} className="link">
      <button className="navbar-button">
        {imageSrc && <img src={imageSrc} alt={imageAlt} className="icon"/>}
        {text}
      </button>
    </Link>
  );
}

export default NavbarButton;
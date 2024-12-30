import { IoIosArrowUp } from "react-icons/io";

function NavbarButtonDropdown( {text, imageSrc, imageAlt} ) {
  return (
      <button className="navbar-buttonDropdown">
        <div className="navbar-buttonDropdown-container">
          {imageSrc && <img src={imageSrc} alt={imageAlt} className="navbar-icon"/>}
          {text}
        </div>
        <IoIosArrowUp/>
      </button>
  );
}

export default NavbarButtonDropdown;
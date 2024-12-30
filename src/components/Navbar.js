import NavbarButton from "./NavbarButton";
import NavbarButtonDropdown from "./NavbarButtonDropdown";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="font-display">Logo</h1>
      <div className="navbar-container">
        <NavbarButton text="Home"  imageSrc="/logo192.png" imageAlt="icon"/>
        <NavbarButton text="Calendar"  imageSrc="/logo192.png" imageAlt="icon"/>
        <NavbarButton text="Team"  imageSrc="/logo192.png" imageAlt="icon"/>
        <NavbarButton text="Settings"  imageSrc="/logo192.png" imageAlt="icon"/>
      </div>
      <NavbarButtonDropdown text="More" imageSrc="/logo192.png" imageAlt="icon"/>
    </nav>
  );
}

export default Navbar;
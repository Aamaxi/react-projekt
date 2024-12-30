function NavbarButton({ imageSrc, imageAlt, text }) {
  return (
    <button className="navbar-button">
      {imageSrc && <img src={imageSrc} alt={imageAlt} className="navbar-icon"/>}
      {text}
    </button>
  );
}

export default NavbarButton;
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar_container">
        <div className="link_container">
          <a href="#">Inicio</a>
          <a href="#">Sobre</a>
          <a href="#">Catálogo</a>
          <a href="#">Contato</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import "../styles/footer.css";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer_container">
        <div className="copyright_section">
          <h1>AMACLÁSSICOS</h1>
          <p>© {year} AmaClassicos. Todos os direitos reservados.</p>
        </div>

        <div className="wrapper">
          <div className="nav_section">
            <div>
              <h4>Atalhos</h4>
            </div>
            <div className="footer_links">
              <Link to="/#hero">Inicio</Link>
              <Link to="/#sobre">Sobre</Link>
              <Link to="/catalogo#catalogo">Catálogo</Link>
            </div>
          </div>

          <div className="footer_contact_section">
            <div>
              <h4>Meios de contato</h4>
            </div>
            <div className="footer_contact_content">
              <p>(19) 98205-8008</p>
              <p>contato@amaclassicos.com.br</p>
            </div>
          </div>

          <div className="footer_socialmedia_section">
            <h4>Redes Sociais</h4>

            <div className="socialmedia_icons">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FacebookLogoIcon size={45} weight="fill" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <InstagramLogoIcon size={45} weight="fill" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <LinkedinLogoIcon size={45} weight="fill" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <TiktokLogoIcon size={45} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

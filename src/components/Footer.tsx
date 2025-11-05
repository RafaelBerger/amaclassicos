import "../styles/footer.css";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
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
              <a href="">Inicio</a>
              <a href="">Sobre</a>
              <a href="">Catálogo</a>
            </div>
          </div>

          <div className="footer_contact_section">
            <div>
              <h4>Meios de contato</h4>
            </div>
            <div className="footer_contact_content">
              <p>(11) 98205-8008</p>
              <p>contato@amaclassicos.com.br</p>
            </div>
          </div>

          <div className="footer_socialmedia_section">
            <h4>Redes Sociais</h4>

            <div className="socialmedia_icons">
              <a href="">
                <FacebookLogoIcon size={45} weight="fill" />
              </a>
              <a href="">
                <InstagramLogoIcon size={45} weight="fill" />
              </a>
              <a href="">
                <LinkedinLogoIcon size={45} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

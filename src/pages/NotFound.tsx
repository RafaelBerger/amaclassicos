import "../styles/notfound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Página Não Encontrada</h2>

        <p className="error-description">
          Parece que a página que você está procurando foi movida, excluída ou
          nunca existiu.
        </p>

        <div className="navigation-links">
          <Link to="/" className="btn primary-btn">
            Ir para Home
          </Link>

          <Link to="/catalogo" className="btn secondary-btn">
            Ver catálogo da ama clássicos
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;

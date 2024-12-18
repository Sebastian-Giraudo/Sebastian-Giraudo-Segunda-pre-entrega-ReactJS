import { Link } from "react-router-dom";
import "./notfoundpage.css"

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">ERROR 404</h1>
            <p className="not-found-message">Oops! La página que buscas no existe.</p>
            <Link to="/" className="not-found-link">
                Volver al inicio
            </Link>
        </div>
    );
};

export default NotFoundPage;
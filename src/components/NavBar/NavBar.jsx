import "./navbar.scss"
import "./CartWidget"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="brand">
                <img src="https://www.letrasdeencuentro.es/regalos-para-lectores/images/logo-agendas-moleskine.jpg" alt="" />

            </div>
            
            <ul className="categories">
                <li>Agendas 2025</li>
                <li>Cuadernos</li>
                <li>Carpetas</li>
                <li>Planificadores</li>
            </ul>

            <CartWidget />

        </nav>
    )
}

export default NavBar
import CartWidget from "./CartWidget"
import { NavLink, Link, useNavigate } from "react-router-dom";


import "./navbar.css"

const NavBar = () => {


    return (
        <nav className="navbar">
            
            <Link to="/" className="brand">
                <img src="https://www.letrasdeencuentro.es/regalos-para-lectores/images/logo-agendas-moleskine.jpg" alt="Logo" className="icon-brand"/>
            </Link>

            <ul className="categories">
                <NavLink to="/category/agendas2025" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Agendas 2025</NavLink>
                <NavLink to="/category/cuadernos" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Cuadernos</NavLink>
                <NavLink to="/category/carpetas" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Carpetas</NavLink>
                <NavLink to="/category/planificadores" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Planificadores</NavLink>
            </ul>


            <CartWidget />
            

        </nav>
    )
}

export default NavBar
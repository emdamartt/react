import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="hidden text-2xl lg:flex track text-yellow-500 space-x-14">
                <li className="nav-links transition duration-300 font-saiyan"><Link to="/products">Productos</Link></li>
                <li className="nav-links transition duration-300 font-saiyan"><Link to="/products/newest">Lo mas nuevo</Link></li>
                <li className="nav-links transition duration-300 font-saiyan"><Link to="/products/discount">Ofertas</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
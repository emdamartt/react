import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            {/* Menú hamburguesa para pantallas pequeñas */}
            <div className="flex justify-between items-center py-4 px-1 lg:hidden">
                <button onClick={toggleMenu} className="text-yellow-500">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor">
                        <path   strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <Link to="/" className="text-yellow-500 text-2xl font-saiyan"></Link>
            </div>
            
            {/* Menú desplegable en pantallas pequeñas */}
            {isOpen && (
                <div className="lg:hidden">
                    <ul className="text-2xl text-yellow-500 space-y-4 px-4 py-2">
                        <li className="font-saiyan"><Link to="/products" onClick={toggleMenu}>Productos</Link></li>
                        <li className="font-saiyan"><Link to="/products/newest" onClick={toggleMenu}>Lo más nuevo</Link></li>
                        <li className="font-saiyan"><Link to="/products/discount" onClick={toggleMenu}>Ofertas</Link></li>
                    </ul>
                </div>
            )}

            {/* Menú visible en pantallas grandes */}
            <ul className="hidden lg:flex lg:text-2xl lg:track lg:text-yellow-500 lg:space-x-14">
                <li className="nav-links transition duration-300 font-saiyan"><Link to="/products">Productos</Link></li>
                <li className="nav-links transition duration-300 font-saiyan"><Link to="/products/newest">Lo mas nuevo</Link></li>
                <li className="nav-links transition duration-300 font-saiyan"><Link to="/products/discount">Ofertas</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;

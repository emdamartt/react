import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            <div className="flex justify-between items-center py-4 px-1 lg:hidden">
                <button onClick={toggleMenu} className="text-yellow-500">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <Link to="/" className="text-yellow-500 text-2xl font-saiyan"></Link>
            </div>
            <ul className={`flex flex-col px-4 gap-6 duration-500 font-semibold absolute w-full text-yellow-500 text-2xl bg-black h-full top-0 left-0 max-w-md z-50 p-4 items xs:text-4xl md:text-3xl lg:static lg:bg-transparent lg:h-auto lg:flex-row lg:gap-12 lg:px-0 lg:translate-x-1 transition-transform ${isOpen ? "":"-translate-x-full"}`} >
                <li>
                    <div className='flex pb-6 justify-between items-center lg:hidden'>
                        <div className="flex lg:ml-0 items-center justify-center cursor-pointer hover:opacity-70">
                            <img src="../public/img/logo.webp" alt="Logo" className="lg:w-20 lg:h-20 object-cover w-10 h-10 m" />
                            <h1 className=" text-3xl lg:-ml-3 -ml-1 font-saiyan text-red-600">DBZtore</h1>
                        </div>
                        <i onClick={toggleMenu} className="bi bi-x-lg tx|ext-2xl"></i>
                    </div>
                </li>
                <li className="nav-links transition duration-300 font-saiyan md:text-4xl md:hover:text-white lg:text-2xl"><Link to="/products">Productos</Link></li>
                <li className="nav-links transition duration-300 font-saiyan md:text-4xl md:hover:text-white lg:text-2xl"><Link to="/products/newest">Lo mas nuevo</Link></li>
                <li className="nav-links transition duration-300 font-saiyan md:text-4xl md:hover:text-white lg:text-2xl"><Link to="/products/discount">Ofertas</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;

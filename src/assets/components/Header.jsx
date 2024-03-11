import Cartwidget from "./Cartwidget";

const Header = () =>{
    return (
        <>
        <div className="w-full bg-black text-gray-200">
            <header className="flex items-center justify-between p-4 mx-auto max-w-7xl flex-col lg:flex-row">
                <div>
                    <img src="../src/assets/img/peugeot white.svg" alt="Logo" className="w-20 h-20 object-cover logo"/>
                </div>  
                <nav>
                    <ul className="hidden gap-10 text-2xl lg:flex">
                        <li className="nav-links transition duration-300"><a href="">Nosotros</a></li>
                        <li className="nav-links transition duration-300"><a href="">Productos</a></li>
                        <li className="nav-links transition duration-300"><a href="">Contacto</a></li>
                    </ul>
                </nav>
                <form action="" className="bg-white p-2 rounded-md flex items-center">
                    <input type="text" placeholder="Buscar Producto" className="focus:outline-none"/>
                    <i className="bi bi-search text-black text-2xl"></i>
                </form>
                <Cartwidget />
            </header>
        </div>
        </>
    )
};

export default Header;
import Cartwidget from "./Cartwidget";

const Header = () =>{
    return (
        <>
        <div className="w-full bg-black text-gray-200">
            <header className="flex items-center justify-between p-6 mx-auto max-w-7xl flex-col lg:flex-row">
                <div>
                    <img src="../src/assets/img/peugeot-logo.svg" alt="Logo" className="w-24 h-24" />
                    {/* <h1 className="text-gray-200"></h1> */}
                </div>  
                <nav>
                    <ul className="hidden gap-[8.125rem] lg:flex">
                        <li className="nav-links"><a href="">Nosotros</a></li>
                        <li className="nav-links"><a href="">Productos</a></li>
                        <li className="nav-links"><a href="">Contacto</a></li>
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
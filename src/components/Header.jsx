import Cartwidget from "./Cartwidget";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () =>{
    return (
        <>
        <div className="w-full bg-black text-gray-200">
            <header className="flex items-center justify-between gap-5 md:gap-0 md:justify-between p-4 mx-auto max-w-7xl flex-wrap lg:flex-row">
                <Link to='/'>
                    <div className="flex items-center justify-center cursor-pointer hover:opacity-70">
                        <img src="../public/img/logo.webp" alt="Logo" className="w-20 h-20 object-cover"/>
                        <h1 className=" text-3xl -ml-3 font-saiyan text-red-600">DBZtore</h1>
                    </div>  
                </Link>
                <Navbar />
                <div className="flex item-center gap-2 md:order-4">
                    <div >
                        <i title="Sign in" className="bi bi-person-fill cursor-pointer text-4xl text-yellow-500"></i>
                    </div>
                    <Cartwidget />
                </div>
                <form action="" className=" p-2 rounded-md flex items-center relative md:mx-0 md:order-3 mx-auto">
                    <input type="text" placeholder="Buscar Producto" className="placeholder:font-saiyan bg-transparent border-b py-1 focus:outline-none"/>
                    <i title="search" className="bi bi-search cursor-pointer text-red-600 text-2xl absolute right-4 top-1 "></i>
                </form>
            </header>
        </div>
        </>
    )
};

export default Header;
import Cartwidget from "./Cartwidget";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <div className="w-full bg-black ">
                <header className="flex items-center justify-between gap-5 md:gap-0 md:justify-between p-4 mx-auto max-w-7xl flex-wrap lg:flex-row">
                    <div className="lg:order-2">
                        <Navbar />
                    </div>
                    <Link to='/'>
                        <div className="flex -ml-10 lg:ml-0 items-center justify-center cursor-pointer hover:opacity-70">
                            <img src="../public/img/logo.webp" alt="Logo" className="lg:w-20 lg:h-20 object-cover w-10 h-10 m" />
                            <h1 className=" text-3xl lg:-ml-3 -ml-1 font-saiyan text-red-600">DBZtore</h1>
                        </div>
                    </Link>
                    <div className="flex item-center gap-4 md:order-4">
                        <div >
                            <i title="Sign in" className="bi bi-person-fill cursor-pointer text-4xl text-yellow-500"></i>
                        </div>
                        <Cartwidget />
                    </div>
                    <form action="" className=" p-2 rounded-md flex items-center relative md:mx-0 md:order-3 mx-auto">
                        <input type="text" placeholder="Buscar Producto" className="placeholder:font-saiyan bg-transparent border-b py-1 focus:outline-none" />
                        <i title="search" className="bi bi-search cursor-pointer text-red-600 text-2xl absolute right-4 top-1 "></i>
                    </form>
                </header>
            </div>
        </>
    )
};

export default Header;
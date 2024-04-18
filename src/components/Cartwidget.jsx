import { useContext} from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cartwidget = () => {
    const {cart} = useContext (CartContext)
    return (
        <>
            <Link to='/cart'className="relative my-0.5">
                <i className="bi bi-cart cursor-pointer text-3xl text-red-600"></i>
                <span className="text-yellow-500 font-saiyan font-bold text-xl rounded-full absolute px-1 -top-1 left-4">{cart.length}</span>
            </Link>
        </>
    )
} 
export default Cartwidget   
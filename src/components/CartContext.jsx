import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [precioFinal, setPrecioFinal] = useState(0)

    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            precioFinal,
            setPrecioFinal
        }}>
        {children}
        </CartContext.Provider>
    )
}














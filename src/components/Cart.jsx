import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, setCart, finalPrice, setFinalPrice } = useContext(CartContext);

    // const handleAdd = (productId, productPrice) => {
    //     const updatedCart = cart.map((product) =>
    //         product.id === productId ? { ...product, stockInCart: product.stockInCart + 1 } : product
    //     );
    //     setCart(updatedCart);
    //     const newFinalPrice = finalPrice + productPrice;
    //     setFinalPrice(newFinalPrice);
    // };

    // const handleRest = (productId, productPrice) => {
    //     const updatedCart = cart.map((product) =>
    //         product.id === productId && product.stock > 1 ? { ...product, stock: product.stock - 1 } : product
    //     );
    //     setCart(updatedCart);

    //     // Si el stock es mayor que 1, actualizar el precio final
    //     if (updatedCart.find((product) => product.id === productId).stockInCart > 1) {
    //         const newFinalPrice = finalPrice - productPrice;
    //         setFinalPrice(newFinalPrice);
    //     }
    // };

    const handleRemove = (productId, productPrice) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);

        // Restar el precio del producto eliminado del precio final
        const product = cart.find((product) => product.id === productId);
        const newFinalPrice = finalPrice - productPrice * product.stockInCart;
        setFinalPrice(newFinalPrice);
    };

    return (
        <>
            {cart.length > 0 ? (
                <div className="max-w-7xl mx-auto py-10">
                    <table className="w-full ">
                        <thead>
                            <tr className="grid grid-cols-4">
                                <th className="col-span-2">Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((prod) => {
                                return (
                                    <tr key={prod.id} className="grid items-center grid-cols-4 border-t">
                                        <th className="col-span-2 flex items-center gap-6">
                                            <div className="h-32 w-32">
                                                <img className="w-full h-full object-cover" src={prod.images} alt={prod.name} />
                                            </div>
                                            <p className="truncate">{prod.name}</p>
                                        </th>
                                        <th className="mx-auto">
                                            <div className="flex items-center gap-4 mx-auto">
                                                {/* <span onClick={() => handleRest(prod.id, prod.price)} className="w-6 h-8 rounded bg-red-500 text-white text-xl cursor-pointer">
                                                    -
                                                </span> */}
                                                <span>{prod.stockInCart}</span>
                                                {/* <span onClick={() => handleAdd(prod.id, prod.price)} className="w-6 h-8 rounded bg-red-500 text-white text-xl cursor-pointer">
                                                    +
                                                </span> */}
                                            </div>
                                        </th>
                                        <th className="flex gap-4 mx-auto">
                                            <p>${prod.price}</p>
                                            <button onClick={() => handleRemove(prod.id, prod.price)} className="text-red-500 hover:text-red-700">X</button>
                                        </th>
                                    </tr>
                                );
                            })}
                            <tr className="grid grid-cols-2 border-t-2 border-gray-800 pt-6">
                                <th>
                                    <p>Precio Final</p>
                                </th>
                                <th>
                                    <p>${finalPrice}</p>
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex pt-8 justify-center">
                        <Link to="/checkout">
                            <button className="bg-red-500 px-4 py-2 text-white w-fit mx-auto rounded hover:opacity-75 transition-colors">Iniciar Pago</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto">
                    <div className="grid place-items-center py-20 gap-4">
                        <p className="text-lg font-semibold">No hay productos en el carrito, Elige el producto que más te guste</p>
                        <Link to="/products">
                            <button className="w-fit mx-auto rounded px-4 py-2 bg-red-500 text-white hover:opacity-75 transition-colors">Ver productos</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};



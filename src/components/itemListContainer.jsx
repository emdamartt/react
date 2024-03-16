import AsyncMock from "./AsyncMock";
import { useState, useEffect } from "react";


//Devuelve el contenedor de todos los items. 
const ItemListContainer = () => {

    //Creo una variable con un array vacio para luego setearlo y reemplazar su contenido con el array de prod. 
    const [products, setProducts] = useState([]);

    //Obtiene los productos, devuelve una promesa una vez resuelta la misma. 
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(AsyncMock);
            reject(console.log(reject));
        });
    }
    //Antes de cargar la pagina obtiene los productos y los setea dentro de products, utilizando el useState. 
    useEffect(() => {
        getProducts()
        .then((resp) => {
            setProducts(resp); 
        })
    })
    //Devuelve el contenedor de las cards recorriendo el array de productos. 
        return (
            <div className="w-full p-10">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {products.map((product) => (
                        <article key={product.id} className="rounded-lg shadow-md overflow-hidden">
                            <div className="">
                                <img src={product.images[0]} alt={product.name} className="object-contain w-80 h-48" />
                                <div className=" text-white p-2 mt-4 border-t border-gray-400">
                                    <h2 className=" font-bold text-lg text-black mb-2">{product.name}</h2>
                                    <p className="text-sm font-sm text-black mb-14">{product.details}</p>
                                    <p className="text-2xl font-medium text-black">ARS ${product.price}</p>
                                </div>
                            </div>
                            <div className="p-4 flex justify-center">
                                <button className="w-40 bg-yellow-400 hover:bg-red-600 text-black font-bold py-2 rounded focus:outline-none focus:shadow-outline">
                                    Comprar
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
            );
        }



export default ItemListContainer;
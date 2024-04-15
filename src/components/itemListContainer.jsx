import AsyncMock from "./AsyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

// Devuelve el contenedor de todos los items.
const ItemListContainer = () => {
    // Creo una variable con un array vacío para luego setearlo y reemplazar su contenido con el array de prod.
    const [products, setProducts] = useState([]);

    // Sirve para tomar lo que ponga como categoria al producto (FILTRAR).
    const { category } = useParams();

    // Obtiene los productos, devuelve una promesa una vez resuelta la misma.
    const getProducts = () => {
        return new Promise((resolve) => {
            // No deberías rechazar la promesa inmediatamente después de resolverla.
            // Deberías hacer el reject solo si hay un error.
            resolve(AsyncMock);
        });
    };

    // Antes de cargar la página obtiene los productos y los setea dentro de products, utilizando el useState.
    useEffect(() => {
        getProducts()
        .then((resp) => {
            if (category) {
                // Utiliza el operador ternario para filtrar los productos según la categoría.
                const filteredProducts = category === "newest" ? resp.filter((product) => product.newest) : 
                                        category === "discount" ? resp.filter((product) => product.discount) : 
                                        resp;
                setProducts(filteredProducts); 
            } else {
                setProducts(resp); 
            }
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
        });
    }, [category]);

    // Devuelve el contenedor de las cards recorriendo el array de productos.
    return (
        <div className="w-full p-10">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
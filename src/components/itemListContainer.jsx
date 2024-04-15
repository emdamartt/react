import AsyncMock from "./AsyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


//Devuelve el contenedor de todos los items. 
const ItemListContainer = () => {

    //Creo una variable con un array vacio para luego setearlo y reemplazar su contenido con el array de prod. 
    const [products, setProducts] = useState([]);

    //Sirve para tomar lo que ponga como categoria al producto (FILTRAR).
    const category = useParams().category;
        
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
            if(category){
                category === "newest" && setProducts(resp.filter((product)=>product.newest));
                category === "discount" && setProducts(resp.filter((product)=>product.discount));
            }else{
                setProducts(resp); 
            }
        })
    },[category]);
    //Devuelve el contenedor de las cards recorriendo el array de productos. 
        return (
            <div className="w-full p-10">
                <ItemList products={products} />
            </div>
            );
        }

export default ItemListContainer;
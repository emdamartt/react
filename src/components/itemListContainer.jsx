import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {collection , getDocs} from "firebase/firestore"
import { db } from "../../firebase/config";


//Devuelve el contenedor de todos los items. 
const ItemListContainer = () => {

    //Creo una variable con un array vacio para luego setearlo y reemplazar su contenido con el array de prod. 
    const [products, setProducts] = useState([]);

    //Sirve para tomar lo que ponga como categoria al producto (FILTRAR).
    const category = useParams().category;
        
    //Antes de cargar la pagina obtiene los productos y los setea dentro de products, utilizando el useState. 
    useEffect(() => {
        const productosRef = collection (db, "products");
        getDocs(productosRef)
            .then((res) => {
                const prods = res.docs.map((doc) => {
                    return {...doc.data(),id:doc.id}
                })
                if(category){
                    category === "newest" && setProducts(prods.filter((prod) => prod.newest));
                    category === "discount" && setProducts(prods.filter((prod)=> prod.discount)) 
                }else {
                    setProducts(prods)
                }
            })
    },[category]);

    //Devuelve el contenedor de las cards recorriendo el array de productos. 
        return (
            <div className="w-full bg-white p-10">
                {products.length > 0 && <ItemList products={products} />} 
            </div>
            );
        }

export default ItemListContainer;
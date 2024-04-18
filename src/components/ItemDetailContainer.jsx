import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc , getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { CartContext } from './CartContext';


export const ItemDetailContainer = () => {

    const {cart, setCart, precioFinal, setPrecioFinal} = useContext (CartContext)
    const [carga, setCarga] = useState(1)
    const [item, setItem] = useState(null)
    const { id } = useParams()

    const handleClickAddCart = () => {
        const existingCartItem = cart.find((prod) => prod.id === item.id);
        const precioStock = carga * item.price; // Calcula el precio total del stock agregado al carrito
        if (existingCartItem) {
            if (item.stock >= carga + existingCartItem.stockInCart) {
                // Si hay suficiente stock disponible, actualizamos el carrito y el precio final
                const updatedCart = cart.map((prod) => {
                    if (prod.id === item.id) {
                        return {...prod, stockInCart: prod.stockInCart + carga};
                    }
                    return prod;
                });
                setCart(updatedCart);
                setPrecioFinal(precioFinal + precioStock); // Actualiza el precio final con el nuevo stock
            } else {
                console.log("No hay suficiente stock disponible");
            }
        } else {
            setCart([...cart, {...item, stockInCart: carga}]);
            setPrecioFinal(precioFinal + precioStock); // Actualiza el precio final con el nuevo stock
        }
    }
    

    const handleCargaSumar = () => {
            carga < item.stock && setCarga(carga + 1)
            console.log(carga)
    }

    const handleCargaRestar = () => {
        carga > 1 && setCarga(carga - 1)

    }
    useEffect(() => {
        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then((res)=>{
                setItem({...res.data(),id:res.id})
            })
    }, [id])
    useEffect(() => {
        console.log(cart)
        console.log(carga)
        console.log(precioFinal)
    },[cart])

    return (
        <div className='mx-auto bg-white w-full py-10'>
            {item && (
                <section className='max-w-7xl grid grid-cols-1 lg:grid-cols-2 ml-3 mr-4 lg:px-0'>
                    <div className='w-100 ml-20'>
                        <img className='w-72' src={item.images} alt={item.name} />
                        <div className='border-t-2 mt-10 mr-10'>
                            <h2 className='text-normal font-semibold text-gray-500 mb-6 mt-5'>DESCRIPCION</h2>
                            <p className='text-xs text-gray-500'>Star Dragons es una de las mayores empresas representantes de la cultura animé en japón.</p>
                            <p className='text-xs text-gray-500 mb-4'>Con sus juguetes y figuras de acción es una de las preferidas por los más pequeños y por quienes se dedican a coleccionar.</p>
                            <h3 className='text-gray-500'>Materiales nobles</h3>
                            <p className='text-xs text-gray-500 mb-4'>Las figuras de acción están hechas de abs lo que asegura que sean amables y suaves al tacto, diferenciando las distintas texturas y
                                relieves del cuerpo de los personajes.</p>
                            <h3 className='text-gray-500'>Ideal para coleccionistas</h3>
                            <p className='text-xs text-gray-500 mb-4'>Una de las actividades que podrás hacer con este tipo de figuras es coleccionarlas y guardarlas en un lugar especial. A medida que
                                conozcas más y más, tu colección irá creciendo y será más variada.</p>
                            <h3 className='text-gray-500'>Juguetes Articulados</h3>
                            <p className='text-xs text-gray-500'>Al tener marcas las articulaciones podrás manejar y acomodar tus figuras como más te guste. Con ellas, vas a poder crear historias en
                                la que los personajes pueda movilizarse y cobrar vida.</p>
                        </div>
                    </div>
                    <section className='w-90 flex flex-col p-6  pl-10 ml-10 gap-6 bg-gray-50 border rounded-md'>
                        <span className='text-gray-500 text-xs mt-1'>nuevo | +10 vendidos</span>
                        <h2 className='px-2 font-saiyan text-2xl capitalize'>{item.name}</h2>
                        <h3 className='px-2 font-saiyan text-md capitalize text-gray-700'>{item.description}</h3>
                        <p className='text-start font-sm text-xl text-black'>US$ {item.price}.00</p>
                        <div className='mb-2'>
                            <span className='flex flex-col text-xs font-semibold text-green-500'>Llega gratis mañana</span>
                            <span className='text-blue-500 text-xs mt-1'><a href="">Mas formas de entrega</a></span>
                            <span className='flex flex-col text-xs font-semibold text-green-500'>Devolucion Gratis</span>
                            <span className='text-gray-500 text-xs mt-1'>Tenes 30 dias desde que lo recibis</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-xs text-gray-500'>Cantidad: <span className='font-semibold text-xs text-gray-700'>1 unidad</span></span>
                            <div className='space-x-3'>
                                <button onClick={handleCargaRestar} className='w-10 h-10 text-sm font-semibold bg-red-500 text-white rounded hover:bg-yellow-400 transition-colors'>-</button>
                                <span className='font-semibold text-lg'>{carga}</span>
                                <button onClick={handleCargaSumar} className='w-10 h-10 text-sm font-semibold bg-red-500 text-white rounded hover:bg-yellow-400 transition-colors'>+</button>
                            </div>
                        </div>
                        <div className='flex-col flex gap-2 mt-5 items-center'>
                            <button onClick={handleClickAddCart} className='rounded-full bg-yellow-400 text-black text-sm font-normal font-saiyan p-1 w-60 hover:bg-red-500 hover:text-white'>Agregar al carrito</button>
                        </div>
                        <div className='flex gap-1 mt-10'>
                            <span className='text-xs text-gray-500'>Vendido por </span>
                            <span className='text-xs text-gray-500 font-semibold'><a className='text-blue-600' href="https://github.com/emdamartt"> Emdmartt</a></span>
                        </div>
                        <div>
                            <span className='text-xs text-gray-500 '>DragonStar Lider | </span><span className='text-xs text-gray-500 font-semibold'> +1000 ventas</span>
                        </div>
                        <div>
                            <span className='flex gap-2'>
                                <img className='w-[10px] h-5' src="/public/img/shield.svg" alt="verify" />
                                <span className='text-xs text-blue-600'>Compra protegida,<span className='text-xs text-gray-500'> recibí el producto que esperabas o te devolvemos tu dinero. </span> </span>
                            </span>
                        </div>
                    </section>
                </section>
            )}
        </div>
    );
};

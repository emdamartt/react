import { useEffect, useState } from 'react'
import { GetItemById } from './FechData'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        GetItemById(Number(id))
            .then((resp) => setItem(resp))
    }, [id])

    return (
        <div className='mx-auto max-w-4xl bg-white py-10'>
            {item && (
                <section className='grid grid-cols-1 lg:grid-cols-2 ml-3 mr-4 lg:px-0'>
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
                    <section className='w-90 flex flex-col p-6 mt-10 pl-10 ml-10 gap-6  bg-gray-50 border rounded-md'>
                        <span className='text-gray-500 text-xs mt-1'>nuevo | +10 vendidos</span>
                        <h2 className='px-2 font-saiyan text-lg capitalize'>{item.name}</h2>
                        <h3 className='px-2 font-saiyan text-lg capitalize'>{item.details}</h3>
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
                                <button className='py-1 px-2 text-sm font-semibold bg-red-500 text-white rounded hover:bg-yellow-400 transition-colors'>-</button>
                                <span className='font-semibold text-sm'>1</span>
                                <button className='py-1 px-2 text-sm font-semibold bg-red-500 text-white rounded hover:bg-yellow-400 transition-colors'>+</button>
                            </div>
                        </div>
                        <div className='flex-col flex gap-2 items-center'>
                            <button className='rounded-full bg-yellow-400 text-black text-sm font-normal font-saiyan p-1 w-60 hover:bg-red-500 hover:text-white'>Comprar ahora</button>
                            <button className='rounded-full bg-yellow-400 text-black text-sm font-normal font-saiyan p-1 w-60 hover:bg-red-500 hover:text-white'>Agregar al carrito</button>
                        </div>
                        <div className='flex gap-1'>
                            <span className='text-xs text-gray-500'>Vendido por </span>
                            <span className='text-xs text-gray-500 font-semibold'><a className='text-blue-600' href="https://github.com/emdamartt"> Emdmartt</a></span>
                        </div>
                        <div>
                            <span className='text-xs text-gray-500 '>DragonStar Lider | </span><span className='text-xs text-gray-500 font-semibold'> +1000 ventas</span>
                        </div>
                        <div>
                            <span className='flex gap-2'>
                                <img className='w-[10px]' src="/public/img/shield.svg" alt="verify" />
                                <span className='text-xs text-blue-600'>Compra protegida,<span className='text-xs text-gray-500'> recibí el producto que esperabas o te devolvemos tu dinero. </span> </span>
                            </span>
                        </div>
                    </section>
                </section>
            )}
        </div>
    );
};

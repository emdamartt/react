import React, { useEffect, useState } from 'react'
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
        <div className='mx-auto max-w-7xl bg-white py-10'>
            {item && (
                <section className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-0'>
                    <div>
                        <img src={item.images} alt={item.name} />
                    </div>
                    <section className='flex flex-col gap-10 justify-beetwen mx-auto'>
                        <h2 className='text-center font-bold text-3xl capitalize'>{item.name}</h2>
                        <p className='text-center font-semibold text-2xl text-red-600'>US${item.price}.00</p>
                        <div className='flex justify-between items-center'>
                            <span className='font-semibold text-lg'>Cantidad</span>
                            <div className='space-x-3'>
                                <button className='py-2 px-4 text-lg font-semibold bg-red-500 text-white rounded hover:bg-yellow-400 transition-colors'>-</button>
                                <span className='font-semibold text-lg'>1</span>
                                <button className='py-2 px-4 text-lg font-semibold bg-red-500 text-white rounded hover:bg-yellow-400 transition-colors'>+</button>
                            </div>
                        </div>
                        <div>
                            <p>{item.details}</p>
                        </div>
                        <div>
                            <button className='rounded-full bg-red-500 text-white text-lg font-bold p-4 w-full max-w-sm mx-auto'>Add carro</button>
                        </div>
                    </section>
                </section>
            )}
        </div>
    );
};

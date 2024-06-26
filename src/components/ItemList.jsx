import { Link } from "react-router-dom";

const ItemList = ( {products} ) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.length > 0 && products.map((product) => (
                <article key={product.id} className="flex flex-col justify-between rounded-lg shadow-2xl overflow-hidden mt-4 hover:outline outline-gray-300 transition">
                    <div className="flex flex-col">
                        <div className="overflow-hidden cursor-pointer h-64">
                            <img src={product.images} alt={product.name} className="object-contain mt-8 w-80 h-48 hover:scale-125 transition duration-1000" />
                        </div>
                        <div className=" flex flex-col justify-between text-white mt-4 border-t border-gray-400 p-4">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full text-xs text-black bg-gray-200 mb-2">stock ready</span>
                                <span className="px-3 py-1 rounded-full text-xs text-black bg-gray-200 mb-2">official store</span>
                            </div>
                            <div>
                                <h2 className=" font-saiyan text-2xl text-gray-700 mb-2">{product.name}</h2>
                                <p className="text-sm font-semibold text-gray-700 mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">{product.description}</p>
                                <p className="text-lg font-saiyan text-black">Us${product.price}</p>
                                <span className="text-sm line-through opacity-50 text-black">Us$400</span>
                                <span className="bg-green-400 px-2 py-0.5 ml-2 rounded-md text-xs text-white">save 20%</span>
                            </div>
                            <span className="flex items-center mt-1">
                                <img src="../public/img/star.svg" alt="estrella" />
                                <img src="../public/img/star.svg" alt="estrella" />
                                <img src="../public/img/star.svg" alt="estrella" />
                                <img src="../public/img/star-half-fill.svg" alt="estrella" />
                                <img src="../public/img/star-no-fill.svg" alt="estrella" />
                                <span className="text-xs ml-2 text-gray-500">10k reviews</span>
                            </span>
                        </div>
                    </div>
                    <div className="p-3 mb-2 flex justify-center">
                        <Link to={`/item/${product.id}`}>
                            <button className="transition font-saiyan w-40 bg-yellow-400 hover:bg-red-600 hover:text-white text-black rounded-md focus:outline-none focus:shadow-outline">Comprar</button>
                        </Link>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default ItemList;
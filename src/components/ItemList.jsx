import { Link } from "react-router-dom"

export default function ItemList({products}) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {products.map((product) => (
                <article key={product.id} className="flex flex-col justify-between rounded-lg shadow-2xl overflow-hidden mt-4 ">
                    <div className="">
                        <img src={product.images[0]} alt={product.name} className="object-contain w-80 h-48 " />
                        <div className=" flex flex-col justify-between text-white mt-4 border-t border-gray-400 p-4">
                            <h2 className=" font-saiyan text-3xl text-gray-700 mb-2">{product.name}</h2>
                            <p className="text-sm font-sm text-black mb-14 truncate">{product.details}</p>
                            <p className="text-2xl font-saiyan text-black">Us${product.price}</p>
                        </div>
                    </div>
                    <div className="p-4 flex justify-center">
                        <Link to= {`/item/${product.id}`}>
                            <button className="font-saiyan w-40 bg-yellow-400 hover:bg-red-600 hover:text-white text-black py-2 rounded focus:outline-none focus:shadow-outline">Comprar
                            </button>
                        </Link>
                    </div>
                </article>
            ))}
    </section>
    )
}

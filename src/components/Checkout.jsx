import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import { CartContext } from './CartContext';
import { addDoc, collection } from 'firebase/firestore';

const Checkout = () => {
  const { cart, setCart, setPrecioFinal, precioFinal } = useContext(CartContext);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    formaDePago: ''
  });
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.nombreCompleto === '' ||
      formData.email === '' ||
      formData.telefono === '' ||
      formData.formaDePago === ''
    ) {
      setError('Por favor completa todos los campos');
      return;
    }

    try {
      const orderData = {
        ...formData,
        cart: cart,
        precioFinal: precioFinal
      };
      console.log(orderData)
      const ordersRef = collection(db, "orders");
      const doc = await addDoc(ordersRef, orderData);

      setOrderId(doc.id)
      setFormData({
        nombreCompleto: '',
        email: '',
        telefono: '',
        formaDePago: ''
      })
      setCart([]);
      setPrecioFinal(0);
      setError(null);
    } catch (error) {
      console.error('Error al enviar los datos a Firebase: ', error);
      setError('Error al enviar los datos, por favor intenta de nuevo más tarde');
    }
  };

  useEffect(() => {
    orderId && (
      <div className='max-w-7xl mx-auto'>
        <div className="grid place-items-baseline py-8 border rounded ">
          <div className='flex flex-col gap-4 mx-auto'>
            <p className='text-green-500'>Gracias por su compra. Su ID de pedido es: {orderId}</p>
            <div>
              <Link to="/">
                <button className='bg-red-500 px-4 py-2 mt-6 text-white rounded hover:opacity-75 transition-colors'>Ver mas productos</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }, [orderId])
  useEffect(() => {
    if (orderId) {
      setConfirmationMessage(
        <div className='max-w-7xl mx-auto py-32'>
          <div className='p-6 mx-4 xl:mx-0 bg-white flex flex-col rounded gap-8'>
            <p className='text-center font-semibold text-lg'> Compra finalizada con éxito. Tu código de pedido es: <span className='text-green-500 font-semibold'>{orderId}</span>!</p>
            <span className='text-center text-sm'>Para seguir comprando, navegar por las categorías en el sitio, o buscar un producto haga click en el boton de ver más productos.</span>
            <Link className='mx-auto text-lg text-white py-3 px-10 rounded bg-red-600 hover:opacity-70 transition-colors w-fit' to="/products">Ver más productos</Link>
          </div>
        </div>
      );
    }
  }, [orderId]);

  return (
    <div className="max-w-7xl mx-auto py-10">
      {confirmationMessage || (
        <div>
          <form className=' border-2 rounded p-4' onSubmit={handleSubmit}>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="grid grid-cols-2 gap-4">
              <div className='space-x-2'>
                <label htmlFor="nombreCompleto">Nombre Completo:</label>
                <input className='border rounded p-2' type="text" id="nombreCompleto" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} />
              </div>
              <div className='space-x-2'>
                <label htmlFor="email">Email:</label>
                <input className='border rounded p-2' type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className='space-x-2'>
                <label htmlFor="telefono">Teléfono:</label>
                <input className='border rounded p-2' type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
              </div>
              <div className='space-x-2'>
                <label htmlFor="formaDePago">Forma de Pago:</label>
                <select id="formaDePago" name="formaDePago" value={formData.formaDePago} onChange={handleChange}>
                  <option value="">Selecciona una opción</option>
                  <option value="efectivo">Efectivo</option>
                  <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                  <option value="transferencia">Transferencia</option>
                </select>
              </div>
            </div>
            <button type="submit" className="bg-red-500 px-4 py-2 mt-6 text-white rounded hover:opacity-75 transition-colors">Enviar Pedido</button>
          </form>
          <div className="p-4">
            <Link to="/cart">
              <button className="bg-red-500 px-4 py-2 text-white rounded hover:opacity-75 transition-colors">Volver al Carrito</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
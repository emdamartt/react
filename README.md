# Dragon Ball Z E-commerce

Este proyecto es un ejemplo de un e-commerce desarrollado en React.js, centrado en la venta de figuras de Dragon Ball Z. Utiliza diversas tecnologías y librerías como Vite para la configuración del entorno, Tailwind CSS para estilos rápidos y personalizables, Bootstrap Icons para iconografía, React Router para la navegación dentro de la aplicación, Firebase para la base de datos en tiempo real y autenticación, así como CartContext para gestionar el carrito de compras.

## Instalación

Para instalar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio desde [GitHub](https://github.com/emdamartt/react) en tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

## Características Principales

- **Selección de Producto:** Los usuarios pueden ver una lista de productos disponibles, cada uno con su descripción, precio e imágenes asociadas.
- **Añadir al Carrito:** Los usuarios pueden agregar productos al carrito de compras.
- **Gestión del Carrito:** El carrito de compras muestra los productos seleccionados, permitiendo al usuario aumentar o disminuir la cantidad de unidades por producto, así como eliminar productos.
- **Responsive:** El diseño de la aplicación se adapta a diferentes tamaños de pantalla para una experiencia de usuario consistente en dispositivos móviles, tablets y computadoras de escritorio.
- **Autenticación:** Los usuarios pueden crear cuentas, iniciar sesión y cerrar sesión para acceder a funcionalidades exclusivas, como revisar el historial de pedidos.
- **Formulario de Compra:** Después de agregar productos al carrito, los usuarios pueden completar un formulario para finalizar la compra, proporcionando información de envío y pago.
- **Orden de Compra:** Una vez completado el formulario, se genera una orden de compra con un código único para referencia futura.

## Estructura del Código

El archivo `ItemDetailContainer.js` muestra un ejemplo del componente de detalle de un producto en la aplicación. Este componente utiliza hooks de React como `useState` y `useEffect` para gestionar el estado y efectos secundarios. También utiliza `useParams` de React Router para obtener el ID del producto de la URL. Además, se integra con `CartContext` para gestionar el estado del carrito de compras.

## Colaboradores

- **Emdmartt** - Desarrollador principal - [GitHub](https://github.com/emdamartt)

## Notas Adicionales

Este proyecto sigue en desarrollo y puede recibir actualizaciones periódicas para agregar nuevas características, mejorar la experiencia del usuario y corregir errores. Si deseas contribuir, ¡no dudes en hacer un pull request en el repositorio de GitHub!

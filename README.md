Challenge Next
Esta es una aplicación de muestra desarrollada con Next.js para el desafío. Muestra un sistema básico de gestión de productos.

Requisitos
Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

Node.js (v14.17.0 o superior)
npm (v6.14.0 o superior)
Instalación
Para ejecutar la aplicación de forma local, sigue estos pasos:

Clona el repositorio: git clone <repository-url>
Navega hasta el directorio del proyecto: cd challenge-next
Instala las dependencias: npm install
Uso
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

arduino
Copy code
npm run dev
Abre tu navegador y visita http://localhost:3000 para acceder a la aplicación.

Funcionalidades
Ver una lista de productos
Agregar un nuevo producto
Editar un producto existente
Eliminar un producto
Tecnologías utilizadas
Next.js
React
Material-UI
Estructura de carpetas
La estructura de carpetas del proyecto es la siguiente:

arduino
Copy code
├── pages
│ ├── index.tsx
│ └── ...
├── components
│ ├── ProductList.tsx
│ ├── EditModal.tsx
│ ├── CreateModal.tsx
│ └── ...
├── hooks
│ ├── useContextState.ts
│ └── ...
├── api-create
│ ├── createProduct.ts
│ └── ...
├── api-delete
│ ├── deleteProduct.ts
│ └── ...
├── interface
│ ├── product.ts
│ └── ...
├── styles
│ ├── globalStyles.ts
│ └── ...
├── public
│ └── ...
├── **tests**
│ ├── HomePage.test.tsx
│ ├── ProductList.test.tsx
│ ├── EditModal.test.tsx
│ └── ...
├── jest.config.js
├── setupTests.js
├── tsconfig.json
└── ...
Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:

arduino
Copy code
npm run test
Las pruebas se encuentran en la carpeta **tests** y cubren varios componentes y funcionalidades de la aplicación.

Licencia
Este proyecto está bajo la Licencia MIT. Puedes explorar el código y modificarlo según tus necesidades. ¡Feliz codificación!

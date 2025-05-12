<img src="./public/screenshot.jpg" alt="changelogs" style="aspect-ratio: 16/9; width: 100%;" />
<hr/>

# Listado de cambios realizados en la prueba

## Cambios realizados en la prueba

##### [ &#x2713; ] Configura Tailwind CSS en el proyecto.
- Se Agrego la librería tailwindcss colocando el archivo de css en el archivo global.css y utlizando el plugin vite-plugin-tailwindcss.

##### [ &#x2713; ] Agrega estilos básicos para mejorar la visualización de la aplicación.
- Agregue las fuentes Open Sans y Tenor Sans al archivo global.css, los estilos solamente utilice las herramientas de clases de tailwindcss. y asigne estilos globales a las etiquetas h1, h2, h3, h4, h5, h6 y body.

##### [ &#x2713; ] Reubica los componentes siguiendo el patrón de Atomic Design.
- Los componentes fueron reubicados siguiendo el patrón Atomic Design, en base a la siguiente estructura:

src/
├── __ test __/
│   ├── addItem.test.ts
│   ├── itemForm.test.tsx
│   ├── item.test.tsx
│   └── setupTests.ts
│
├── assets/                  
│   ├── fonts/
│   └── globals.css
│
├── components/            
│   ├── atoms/             
│   │   ├── button/
│   │   │   └── button.input.tsx
│   │   ├── Input/
│   │   │   └── input.tsx
│   │   └── TextArea/
│   │       └── textArea.tsx      
│   │
│   ├── molecules/
│   │   └── item/
│   │       └── item.tsx
│   │
│   ├── organisms/
│   │   ├── header/
│   │   │   └── header.tsx
│   │   ├── itemList/
│   │   │   └── itemList.tsx
│   │   ├── itemForm/
│   │   │   └── itemForm.tsx
│   │   ├── errorPage/
│   │   │   └── errorPage.tsx
│   │   └── loading/
│   │       └── loading.tsx
│   │
│   ├── templates/
│   │   └── layout.tsx
│   │
│   └── pages/
│       └── home.tsx
│
├── types/                 # Tipos personalizados
│    ├── register.ts
│    └── item.ts
│
├── hooks/                 # Hooks personalizados
│    ├── react-query/      # Hooks de React Query
│    │    ├── useItems.ts 
│    ├── useAddItem.ts
│    ├── useSubmit.ts
│
├── context/               # Contextos de React 
│    ├── store.tsx
│
├── services/              # Llamadas a APIs
│    ├── addItem.ts
│    ├── fetchItems.ts
│
├── app.tsx                 # main
└── main.jsx                # Componente raíz

- La logica se separó de los componentes utilizando hooks personalizados.

#### [ &#x2713; ] Al agregar un nuevo ítem, este debe ser el único listado en la pantalla.
- Esto se logro filtrando los items sin userid, aquellos que NO tengas userid son los items que se muestran en la pantalla, luego se agrega el nuevo item. este se realiza en el hook useAddItem.

#### [ &#x2713; ] Agrega validaciones al formulario de adición de ítems.
- Se agrego una validación para el campo title y body, mediante los filtros de register en hook useSubmit, el campo title debe tener al menos 3 caracteres y el campo body debe tener al menos 3 caracteres. El formulario mientras no este validado correctamente se desactiva el botón submit.

## Añadido adicional
#### [ &#x2713; ] Se realizaron pruebas unitarias utilizando Vitest.
- Se utilizo Vitest para realizar pruebas unitarias en los componentes y servicios.

#### [ &#x2713; ] Se paso el enndpoint de la API a un archivo de entorno.
- Se paso la URL de la API a un archivo de entorno para que sea dinámico y se pueda cambiar en cualquier momento, y proteger la información sensible.

#### [ &#x2713; ] Se agrego Axios y React Query para manejar las llamadas a la API.
- Aunque esto se encontraba en el codigo no estaba en el package.json por lo que se instalo.

#### [ &#x2713; ] Se corrigió errores de algunas dependencias.

### Integración
#### [ &#x2713; ] Crea un Pull Request (PR) en el repositorio, detallando los cambios realizados.
- Se hizo un pull request en el repositorio con los cambios realizados: [Resumen PR](https://github.com/prismaymedia/prueba-frontend-epayco/pull/25/files)
- Se coloco coloco el proyecto en producción: [URL](https://prueba-frontend-epayco.vercel.app/)

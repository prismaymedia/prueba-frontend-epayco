# Tabla de Contenidos

- [Objetivo](#objetivo)
- [Requerimientos](#requerimientos)
- [Uso de la aplicación](#uso-de-la-aplicación)
- [Versión en vivo](#versión-en-vivo)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Descripción de Carpetas y Archivos](#descripción-de-carpetas-y-archivos)
- [Dependencias](#dependencias)
- [Patrones y Arquitectura](#patrones-y-arquitectura)

---

## Objetivo

El objetivo de esta prueba es evaluar tu capacidad para estructurar y refactorizar una aplicación React utilizando las mejores prácticas de **Clean Architecture**, **Atomic Design** y buenas prácticas de desarrollo frontend.

---

## Requerimientos

A continuación se describen las tareas a cumplir en esta prueba técnica:

### Estilos y Maquetación

- [x] Configura Tailwind CSS en el proyecto.
- [x] Agrega estilos básicos para mejorar la visualización de la aplicación.

### Refactor y Funcionalidad

- [x] Reubica los componentes siguiendo el patrón de **Atomic Design**.
- [x] Agrega tipos utilizando TypeScript y separa la lógica de la presentación siguiendo un patrón de **Clean Architecture**.
- [x] Al agregar un nuevo ítem, este debe ser el **único listado** en la pantalla.
- [x] Agrega **validaciones** al formulario de adición de ítems.

### Integración

- [x] Crea un Pull Request (PR) en el repositorio, detallando los cambios realizados.

> **Nota:** Estas instrucciones forman parte de los requerimientos de la prueba y deben mantenerse como parte de tu entrega.

---

## Uso de la aplicación

En esta sección se detallan los pasos para preparar y ejecutar el proyecto en tu máquina local.

### Pre requisitos

- **Node.js** v16 o superior instalado.
- **Yarn** instalado globalmente.
- Conexión a Internet para instalar dependencias y consumir la API externa.

### Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd prueba-frontend-epayco
   ```
3. Instala las dependencias con Yarn:
   ```bash
   yarn install
   ```

### Ejecución en desarrollo

Para levantar el servidor de desarrollo con hot-reload:

```bash
yarn dev
```

Accede a la aplicación en `http://localhost:5173`.

### Generar build y previsualizar

1. Compila el proyecto:
   ```bash
   yarn build
   ```
2. Sirve la versión optimizada:
   ```bash
   yarn preview
   ```
   La aplicación compilada se sirve en `http://localhost:4173` por defecto.

---

## Versión en vivo

La aplicación está desplegada y accesible en GitHub Pages:

**https://Dennos23.github.io/prueba-frontend-epayco/**

---

## Estructura de Carpetas

```bash
src/
├── components/            # UI según Atomic Design
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── hooks/                 # Custom hooks (Use Cases)
├── pages/                 # Páginas principales
├── services/              # API y lógica de acceso a datos (Infrastructure)
├── types/                 # Modelos del dominio (Entities)
├── App.tsx                # Punto de entrada de la app (presentación)
└── main.tsx               # Montaje de React y React Query
```

---

## Descripción de Carpetas y Archivos

- **components/**: Contiene los componentes organizados siguiendo el patrón de Atomic Design:

  - **atoms**: Componentes básicos e independientes (`Button`, `Input`, `Textarea`).
  - **molecules**: Combinaciones de átomos (`ItemForm`, `ItemCard`).
  - **organisms**: Secciones completas que agrupan moléculas y átomos (`AddItemSection`, `ItemsSection`).
  - **templates**: Layout de páginas con slots para contenido (`HomeTemplate`).

- **hooks/**: Custom hooks que orquestan la lógica de negocio y usan React Query (`useItems`, `useAddItem`).

- **pages/**: Páginas de la aplicación, consumen hooks y organismos (`HomePage`).

- **services/**: Módulo que implementa el acceso a datos mediante Axios (`ItemService`).

- **types/**: Definición de los modelos de dominio (`Item.ts`).

- **App.tsx**: Componente principal que envuelve la aplicación con `QueryClientProvider`.

- **main.tsx**: Arranca React 18 usando `createRoot` e importa a `App`.

---

## Dependencias

A continuación, las dependencias principales y sus versiones utilizadas en el proyecto:

- `react` ^18.3.1: librería de UI.
- `react-dom` ^18.3.1: cliente de renderizado en el DOM.
- `@tanstack/react-query` ^5.74.4: gestión de caché y fetching de datos.
- `axios` ^1.9.0: cliente HTTP para consumir APIs.
- `react-hook-form` ^7.56.1: manejo de formularios y validaciones.
- `tailwindcss` ^3.x: utilidades de CSS (se utilizó la versión 3 para compatibilidad con PostCSS y Autoprefixer).

> **DevDependencies** incluyen TypeScript, ESLint, autoprefixer, postcss y Vite entre otros.

---

## Patrones y Arquitectura

En este proyecto se aplicaron los siguientes patrones de diseño y principios de arquitectura:

### 1.**Clean Architecture**:

- **Entidades (Domain Layer)** en `types/` definen los modelos puros (`Item`).
- **Casos de Uso (Use Cases)** implementados en `hooks/` (`useItems`, `useAddItem`) orquestan la lógica de la aplicación.
- **Adaptadores de Interfaz (Interface Adapters)** en `services/` (`ItemService`) abstraen el acceso a datos con Axios.
- **Presentación (Frameworks & Drivers)** en `components/`, `pages/`, `App.tsx` y `main.tsx` usan React, React Query y React Hook Form para la interfaz.

### 2. Atomic Design:

- **Átomos** (`atoms/`): componentes básicos (Button, Input, Textarea).
- **Moléculas** (`molecules/`): combinaciones de átomos que forman unidades funcionales (ItemForm, ItemCard).
- **Organismos** (`organisms/`): secciones completas de UI que agrupan moléculas (AddItemSection, ItemsSection).
- **Templates** (`templates/`): definiciones de layout con slots para contenido (HomeTemplate).
- **Pages** (`pages/`): composición final de templates con datos reales (HomePage).

### 3. Adapter Pattern

- Los hooks (`useItems`, `useAddItem`) y los componentes `Input` y `Textarea` usan `forwardRef` para adaptarse a las APIs de React Query y React Hook Form, conectando la lógica de datos con la UI.

### 4. Dependency Injection

- Se inyecta el `QueryClient` a través de `QueryClientProvider`.
- En `useAddItem`, se pasa `mutationFn: createItem` de forma declarativa al hook, separando configuración y ejecución.

### 5. Custom Hook Pattern

- Extraer la lógica de fetching y mutación a hooks reutilizables (`useItems`, `useAddItem`) mantiene los componentes más limpios y facilita el testing.

### 6. SOLID (Single Responsibility)

- Cada archivo y carpeta tiene una única responsabilidad:
  - **types/** → modelos de dominio.
  - **services/** → acceso a datos.
  - **hooks/** → casos de uso y lógica de aplicación.
  - **components/** → presentación y UI.

Estos patrones y principios contribuyen a una aplicación **mantenible**, **testable** y **escalable**, con responsabilidades claramente definidas y bajo acoplamiento.

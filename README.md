# Prueba Frontend - Epayco

## Objetivo

El objetivo de esta prueba es evaluar la capacidad para estructurar y refactorizar una aplicación React utilizando las mejores prácticas de **Clean Architecture**, **Atomic Design**, y **TypeScript**.

---

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript para tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos frontend.
- **Tailwind CSS**: Framework de utilidades para estilos.
- **React Hook Form**: Manejo de formularios y validaciones.
- **React Query**: Manejo de datos asíncronos.
- **Axios**: Cliente HTTP para realizar peticiones.

---

## Estructura del Proyecto

El proyecto sigue el patrón de **Atomic Design** y **Clean Architecture**. A continuación, se detalla la estructura de carpetas:

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Input, Textarea, etc.)
│   ├── molecules/      # Combinaciones de átomos (Form, ItemCard, etc.)
│   ├── organisms/      # Combinaciones de moléculas (ItemList, etc.)
├── pages/              # Páginas principales (Home)
├── services/           # Lógica de negocio y llamadas a la API
├── types/              # Definiciones de tipos TypeScript
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada de la aplicación
```

## Componentes

### Atoms

- **Button**: Botón reutilizable con estilos de Tailwind CSS.
- **Input**: Campo de entrada con soporte para validaciones.
- **Textarea**: Campo de texto multilínea con soporte para validaciones.
- **Loading**: Indicador de carga centrado en la pantalla.
- **ErrorMessage**: Mensaje de error estilizado.

### Molecules

- **Form**: Formulario para agregar nuevos ítems con validaciones.
- **ItemCard**: Tarjeta que muestra la información de un ítem.

### Organisms

- **ItemList**: Lista de ítems que utiliza `ItemCard` para mostrar cada elemento.

---

## Cambios Realizados

### 1. Configuración de Tailwind CSS

- Se configuró Tailwind CSS en el proyecto para manejar estilos de forma eficiente.
- Se agregaron clases de Tailwind CSS a los componentes para mejorar la visualización.

### 2. Refactorización siguiendo Atomic Design

- Los componentes fueron reorganizados en carpetas siguiendo el patrón de **Atomic Design**:
  - **Atoms**: Componentes básicos como `Button`, `Input`, `Textarea`.
  - **Molecules**: Componentes combinados como `Form` y `ItemCard`.
  - **Organisms**: Componentes más complejos como `ItemList`.

### 3. Uso de TypeScript

- Se agregaron tipos a todos los componentes y funciones.
- Se creó una carpeta `types` para centralizar las definiciones de tipos.

### 4. Validaciones en el Formulario

- Se implementaron validaciones con `react-hook-form`:
  - El campo `title` es obligatorio y debe tener al menos 3 caracteres.
  - El campo `body` es obligatorio y debe tener al menos 10 caracteres.
- Los mensajes de error se muestran debajo de los campos.

### 5. Lógica de Negocio y Clean Architecture

- La lógica de negocio se separó en la carpeta `services`:
  - `api.ts`: Manejo de peticiones HTTP con Axios.

### 6. Funcionalidad de Agregar Ítems

- Al agregar un nuevo ítem, este se convierte en el único listado en la pantalla.
- El formulario se limpia automáticamente después de agregar un ítem.

---

## Instalación y Ejecución

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

### Pasos

1. Clona el repositorio:

   ```bash
   git clone https://github.com/prismaymedia/prueba-frontend-epayco.git
   cd prueba-frontend-epayco
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre la aplicación en tu navegador:
   ```
   http://localhost:5173
   ```

---

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.

---

## Mejoras Futuras

- Implementar pruebas unitarias con Jest y React Testing Library.
- Agregar soporte para internacionalización (i18n).
- Mejorar la gestión de errores en las peticiones HTTP.

---

## Autor

**Leonardo Alvarado**  
[GitHub](https://github.com/leonardojap) | [LinkedIn](https://linkedin.com/in/leonardo-alvarado-16964b16a)

---

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

```

### Explicación
1. **Estructura Clara**: El README.md está organizado en secciones claras para facilitar la comprensión del proyecto.
2. **Detalles Técnicos**: Incluye información sobre tecnologías, estructura del proyecto y componentes.
3. **Instrucciones**: Proporciona pasos claros para instalar y ejecutar el proyecto.
4. **Mejoras Futuras**: Sugiere posibles mejoras para el proyecto.

Este archivo README.md proporciona toda la información necesaria para entender, instalar y trabajar con el proyecto.
```

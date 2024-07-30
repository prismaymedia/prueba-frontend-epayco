## Objetivo
El objetivo de esta prueba es evaluar tu capacidad para estructurar y refactorizar una aplicación React utilizando las mejores prácticas de Clean Architecture, patrones de diseño, y buenas prácticas de desarrollo frontend.

## Requerimientos

### Estilos y Maquetación
- [ ] Configura Tailwind CSS en el proyecto.
- [ ] Agrega estilos básicos para mejorar la visualización de la aplicación.

### Refactor y Funcionalidad
- [ ] Reubica los componentes siguiendo el patrón de Atomic Design.
- [ ] Agrega tipos utilizando TypeScript y separa la lógica de la presentación siguiendo un patrón de Clean Architecture.
- [ ] Al agregar un nuevo ítem, este debe ser el único listado en la pantalla.
- [ ] Agrega validaciones al formulario de adición de ítems.

### Integración
- [ ] Crea un Pull Request (PR) en el repositorio, detallando los cambios realizados.



#### Estructura del Proyecto y Refactorización

1. **Estructura de Carpetas:**
   - Se creó la siguiente estructura de carpetas siguiendo el patrón de Atomic Design:
     ```plaintext
     src/
     ├── components/
     │   ├── atoms/
     │   ├── molecules/
     │   ├── organisms/
     │   ├── templates/
     │   └── pages/
     ├── hooks/
     ├── services/
     └── App.tsx
     ```

2. **Componentes:**
   - **Atoms:** Se crearon componentes simples y reutilizables.
     - `Input.tsx`
     - `Textarea.tsx`
   - **Molecules:** Componentes que combinan átomos para formar partes funcionales del UI.
     - `Form.tsx`
   - **Organisms:** Componentes más complejos que componen secciones de la UI.
     - `Item.tsx`
     - `ItemList.tsx`
   - **Pages:** Componentes que representan páginas completas.
     - `Home.tsx`

3. **Hooks:**
   - Se creó `useItems.ts` para manejar las consultas y mutaciones de datos con `react-query`.

4. **Tailwind CSS:**
   - Configuración de `tailwind.config.js` y `index.css` para incluir Tailwind CSS.
   - Aplicación de estilos utilizando clases de Tailwind en todos los componentes.

5. **Validaciones del Formulario:**
   - Implementación de validaciones en `Form.tsx` usando `react-hook-form`.

6. **Mostrar Sólo el Nuevo Ítem:**
   - Modificación en `useAddItem` para actualizar la lista de ítems con solo el nuevo ítem agregado.

7. **Migración a `createRoot`:**
   - Actualización de `main.tsx` para usar `createRoot` en lugar de `ReactDOM.render` según los requisitos de React 18.

8. **Estilos y Diseño:**
   - Fondo degradado diagonal y estilos ajustados en `Home.tsx`.
   - Botón `Add Item` con transición suave al cambiar de color en `Form.tsx`.

9. **Contenedor con Scroll:**
   - Limitación de altura del contenedor con `h-[90vh]` y `overflow-y-auto` para desplazamiento interno.


Estos cambios han mejorado la estructura, funcionalidad y apariencia de la aplicación, alineándola con las mejores prácticas y requerimientos solicitados.
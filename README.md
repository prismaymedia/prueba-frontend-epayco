# React Clean Architecture Challenge

## Objetivo
El objetivo de esta prueba es evaluar tu capacidad para estructurar y refactorizar una aplicación React utilizando las mejores prácticas de Clean Architecture, patrones de diseño, y buenas prácticas de desarrollo frontend.

## Requerimientos Implementados

### Estilos y Maquetación ✅
- [x] Configura Tailwind CSS en el proyecto
  - Implementado mediante `index.css` con las directivas de Tailwind
  - Configuración optimizada para producción
- [x] Agrega estilos básicos para mejorar la visualización
  - Sistema de diseño consistente con sombras y espaciado
  - Animaciones y transiciones suaves
  - Feedback visual para estados de carga y errores
  - Diseño responsive y adaptable

### Refactor y Funcionalidad ✅
- [x] Reubica los componentes siguiendo el patrón de Atomic Design
  - **Atoms**: Button.tsx
  - **Molecules**: ItemCard.tsx, Tabs.tsx
  - **Organisms**: ItemForm.tsx
  - **Pages**: Home.tsx
  - **Types**: item.ts

- [x] Agrega tipos utilizando TypeScript y separa la lógica
  - Interfaces definidas para todas las props de componentes
  - Types dedicados para modelos de datos
  - Hooks personalizados para lógica de negocio
  - Clean Architecture implementada mediante:
    - API Layer (`itemsApi.ts`)
    - Business Logic Layer (`useItems.ts`, `useAddItem.ts`)
    - Presentation Layer (Componentes React)

- [x] Visualización de items mejorada
  - Sistema de pestañas para alternar vistas
  - Vista "Latest Item" para mostrar el último ítem agregado
  - Vista "All Items" para el listado completo
  - Transición automática a "Latest Item" al agregar

- [x] Validaciones de formulario
  - Implementado con react-hook-form y zod
  - Validaciones en tiempo real
  - Mensajes de error descriptivos
  - Prevención de envíos duplicados

### Mejoras Adicionales 🚀

#### Optimización de Rendimiento
- Implementación de `useMemo` y `useCallback` para optimizar re-renders
- Cache de consultas con React Query
- Sistema de prevención de solicitudes duplicadas

#### Manejo de Estado
- React Query para estado del servidor
- Estado local con hooks de React
- Cache optimizada para items

#### UX/UI
- Loading states para operaciones asíncronas
- Manejo de errores con feedback visual
- Animaciones y transiciones suaves
- Contador de items dinámico
- Sistema de IDs incrementales para nuevos items

#### Arquitectura
- Separación clara de responsabilidades
- Componentes reutilizables
- Tipos TypeScript estrictos
- Patrón de diseño Atomic
- Clean Architecture

## Estructura del Proyecto
```
src/
├── api/
│   └── itemsApi.ts
├── components/
│   ├── atoms/
│   │   └── Button.tsx
│   ├── molecules/
│   │   ├── ItemCard.tsx
│   │   └── Tabs.tsx
│   └── organisms/
│       └── ItemForm.tsx
├── hooks/
│   └── useItems.ts
├── pages/
│   └── Home.tsx
├── types/
│   └── item.ts
└── main.tsx
```

## Tecnologías Utilizadas
- React 18
- TypeScript
- Tailwind CSS
- React Query
- React Hook Form
- Zod
- Axios

## API Mock - JSONPlaceholder 🔄

### Creación de Recursos POST Request

La aplicación utiliza JSONPlaceholder como API mock para simular las operaciones CRUD. Es importante tener en cuenta las siguientes consideraciones:

```javascript
// Ejemplo de request para crear un nuevo recurso
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Respuesta del servidor
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
```

⚠️ **Importante**: 
- Los recursos no son realmente creados en el servidor
- Las respuestas son simuladas pero mantienen consistencia con una API real
- Todos los nuevos recursos recibirían el ID 101 por defecto
- Por esta razón, implemente un sistema local de IDs incrementales

## Instrucciones de Uso
1. Clone el repositorio
2. Instale las dependencias: `npm install`
3. Inicie el servidor de desarrollo: `npm run dev`
4. Abra [http://localhost:5173](http://localhost:5173) en su navegador
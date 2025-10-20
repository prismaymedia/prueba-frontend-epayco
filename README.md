# 🧱 React Clean Architecture - Prueba Técnica

Este proyecto fue desarrollado como parte de una **prueba técnica** con el objetivo de demostrar el uso de **Clean Architecture**, **Atomic Design**, **React Query (TanStack)**, **TypeScript**, y **TailwindCSS** aplicados a una aplicación React moderna, modular y escalable.

---

## 🎯 Objetivo del Proyecto

Refactorizar y estructurar una aplicación React para cumplir con las mejores prácticas de arquitectura, separación de capas y patrones de diseño frontend.

---

## Resumen de cambios

La aplicación React fue completamente refactorizada aplicando **Clean Architecture** y **Atomic Design**, creando una base de código más clara, escalable y mantenible.  

Entre las principales mejoras implementadas se encuentran:  

- Reestructuración completa del proyecto en capas: `app`, `domain`, `application`, `infrastructure` y `presentation`.  
- Componentes organizados siguiendo Atomic Design (Atoms, Molecules, Organisms, Pages).  
- Tipado completo con **TypeScript** para componentes, hooks y formularios.  
- Gestión de datos con **React Query**: fetch, caching, mutaciones, skeletons y control de recarga.  
- Formularios con **React Hook Form**, validaciones y feedback visual de éxito/error mediante `MessageAlert`.  
- Manejo centralizado de errores HTTP con mensajes claros (`ERROR_MESSAGES`).  
- Estilos y diseño responsive con **Tailwind CSS**, incluyendo estados vacíos (`EmptyPlaceholder`) y skeletons.  
- Preparación para colaboración y revisión: `.env.development` configurado.  

---

## Beneficios y garantías de la implementación

Esta refactorización asegura que la aplicación cumpla con los estándares de desarrollo moderno y sea fácil de mantener y escalar:

1. `Arquitectura escalable`: la separación de responsabilidades y Clean Architecture permiten agregar nuevas funcionalidades sin generar deuda técnica.  
2. `Mantenibilidad del código`: uso de TypeScript y Atomic Design facilita la lectura, testeo y modificación de componentes.  
3. `Rendimiento optimizado`: React Query maneja caching y sincronización de datos, evitando renderizados innecesarios y mejorando la eficiencia.  
4. `Seguridad de tipos y datos`: validaciones de formulario y tipado garantizan consistencia de datos y reducción de errores en tiempo de ejecución.  
5. `Experiencia de usuario robusta`: feedback visual mediante estados de carga, mensajes de éxito/error y formularios validados.  
6. `Buenas prácticas y estándares actuales`: el proyecto sigue patrones modernos de desarrollo frontend, asegurando calidad profesional.

---

## 🧩 Tecnologías Principales

- ⚛️ **React 18 + TypeScript**
- 🎯 **TanStack React Query**
- 💨 **Tailwind CSS**
- 🧱 **Clean Architecture**
- ⚙️ **Axios (HTTP Client)**
- 🧪 **Vite (entorno de desarrollo)**
- 🧵 **Yarn (gestor de dependencias)**
- 🧭 **React Query Devtools (solo en modo desarrollo)**

---

## 🧠 Estructura de Carpetas (Clean Architecture)

```bash
src/
├── app/
│   ├── providers/
│   │   └── query-provider.tsx          # Proveedor global de React Query
│   ├── App.tsx                         # Componente raíz de la aplicación
│   └── dependency-injection.ts         # Inyección de dependencias (repositorios, casos de uso, etc.)
│
├── application/
│   ├── usecases/
│   │   ├── add-item-use-case.ts         # Caso de uso para agregar un post
│   │   └── get-items-use-case.ts        # Caso de uso para obtener posts
│
├── domain/
│   ├── entities/
│   │   └── post.ts                     # Entidad Post dentro del dominio
│   └── repositories/
│       └── post-repository.ts          # Contrato (interfaz) del repositorio de Posts
│
├── infrastructure/
│   ├── http/
│   │   ├── constants/                  # Constantes relacionadas con API
│   │   └── axios-instance.ts           # Configuración de Axios
│   └── repository/
│       └── post-api.repository.ts      # Implementación concreta del repositorio
│
├── presentation/
│   ├── hooks/
│   │   ├── useAddPost.ts               # Hook que maneja la lógica de creación de posts
│   │   └── useGetPosts.ts              # Hook que maneja la obtención de posts
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── button/
│   │   │   │   └── button.tsx          # Botón reutilizable
│   │   │   ├── input/
│   │   │   │   └── input.tsx           # Campo de texto reutilizable
│   │   │   └── textarea/
│   │   │       └── textarea.tsx        # Área de texto reutilizable
│   │   ├── molecules/
│   │   │   ├── empty-placeholder/
│   │   │   │   └── empty-placeholder.tsx  # Placeholder cuando no hay posts
│   │   │   └── message-alert/
│   │   │       └── message-alert.tsx      # Alerta de mensajes o errores
│   │   └── organisms/
│   │       ├── post/
│   │       │   └── post.tsx              # Componente que representa un post individual
│   │       └── post-list/
│   │           └── post-list.tsx         # Lista de posts renderizada
│   └── pages/
│       └── home.tsx                      # Página principal que compone toda la UI
│
└── main.tsx                              # Punto de entrada de la app (monta App.tsx)
```

---

## ⚙️ Funcionalidades Implementadas

### ✅ 1. Listado de Posts
- Obtiene los posts desde el endpoint `https://jsonplaceholder.typicode.com/posts`.
- Muestra los resultados utilizando React Query para el manejo de caché y estados de carga.
- Incluye Skeleton Loader para mejorar la UX.
- Si no existen posts disponibles, se muestra un mensaje de placeholder indicando que no hay posts registrados.

### ✅ 2. Agregar Nuevo Post
- Permite agregar un nuevo post mediante un formulario.
- Al agregar un nuevo post, **solo se muestra ese post en pantalla** (según requerimiento).
- Validaciones de campos vacíos antes de enviar el formulario.
- **El botón "Nuevo Post" permanece deshabilitado hasta que todos los campos requeridos estén correctamente completados.**

### ✅ 3. Manejo de Errores Global
- Se implementó un manejador de errores en Axios para capturar errores de red o de API.
- Los mensajes son amigables y específicos según el contexto (listado o creación de post).

---

## 🧩 Patrones Aplicados

| Capa | Patrón / Responsabilidad |
|------|---------------------------|
| **Domain** | Define entidades puras y contratos (independientes de frameworks). |
| **Infrastructure** | Implementa la comunicación con APIs externas. |
| **Application** | Contiene los casos de uso (lógica de negocio aplicada). |
| **Presentation** | Maneja la interfaz gráfica (Atomic Design). |
| **App** | Inyección de dependencias. |

---

## 💅 Atomic Design

El sistema de componentes sigue el patrón de **Atomic Design**:

- **Atoms:** elementos básicos (botón, input, textarea).
- **Molecules:** combinaciones simples (formularios, mensajes de alerta).
- **Organisms:** componentes más grandes (listado de posts, placeholders).
- **Pages:** estructura completa de vistas.

---

## 🧪 Pruebas y Validaciones

- Validación de formulario antes de crear un post.
- Manejo de errores HTTP con mensajes personalizados.
- Skeletons durante carga de datos.
- Arquitectura modular y extensible.

## Estrategia de Prueba Funcional del Formulario

El formulario `PostForm` se probó con el objetivo de asegurar que la funcionalidad principal de la aplicación funciona correctamente:

- **Validación de campos:** se verificó que los campos de título y contenido no se puedan enviar vacíos y cumplan las restricciones de longitud.
- **Creación de posts:** al enviar datos válidos, el post se agrega correctamente y se muestra como único si `showOnlyNew` está activo.
- **Manejo de errores:** se simuló un fallo en la creación de un post (p. ej. endpoint incorrecto) para verificar que los mensajes de error se muestran correctamente.
- **Estado de carga:** mientras se procesa la creación, se deshabilitan botones y se muestra un feedback visual para evitar envíos repetidos.
- **Interacción condicional:** se comprobó que los botones cambian según `showOnlyNew`, mostrando "Nuevo Post" o "Mostrar Todos" de manera coherente.

Esta estrategia asegura que el formulario cumple con **validaciones, manejo de errores y flujo esperado**, garantizando la experiencia de usuario y la consistencia de los datos.

---

## 🧠 Consideraciones Técnicas

- Arquitectura basada en **Clean Architecture**, con separación por capas: `domain`, `application`, `infrastructure`, `presentation` y `app`.
- Se aplicó **Atomic Design** para organizar los componentes (`atoms`, `molecules`, `organisms`).
- **React Query** está configurado en `app/providers/query-provider.tsx` con `QueryClientProvider`.
- Los **hooks de React Query** se mantuvieron en `presentation/hooks` por estar ligados a la capa de UI.
- Axios centralizado en `infrastructure/http/axios-instance.ts`.
- Uso de **Tailwind CSS** para una maquetación moderna y responsiva.
- **Yarn** fue utilizado como gestor de dependencias.
- **React Query Devtools** habilitado automáticamente en modo desarrollo.
- Base URL configurada mediante `VITE_API_BASE_URL` en `.env.development`.

---

## 📦 Dependencias principales

| Paquete | Versión |
|----------|----------|
| `react-query` / `@tanstack/react-query` | ^5.x |
| `axios` | ^1.x |
| `tailwindcss` | ^4.x |
| `typescript` | ^5.x |
| `vite` | ^5.x |

---

## Registro de Cambios Completados

- **Tailwind CSS Configurado:** ✅ Integración completa con diseño adaptable y moderno.
- **Mejoras de Estilo:** ✅ Aplicación con apariencia uniforme y visualmente atractiva.
- **Patrón Atomic Design:** ✅ Componentes reorganizados como átomos, moléculas y organismos.
- **TypeScript y Arquitectura Limpia:** ✅ Tipado fuerte y separación clara de responsabilidades.
- **Visualización de Ítem Reciente:** ✅ Los ítems nuevos se muestran de manera destacada, reemplazando la lista anterior.
- **Validaciones de Formulario:** ✅ Comprobaciones exhaustivas con mensajes claros para el usuario.

---

## 🧾 Autor

**Lexys M.**  
💻 Frontend Developer — Enfocado en arquitectura limpia, escalabilidad y buenas prácticas.

---

## 🏁 Conclusión

Este proyecto demuestra cómo estructurar una aplicación React moderna utilizando **Clean Architecture**, **Atomic Design** y **React Query**, garantizando separación de responsabilidades, escalabilidad y facilidad de mantenimiento.

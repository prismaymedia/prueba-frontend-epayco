
type ErrorMessages  = Record<number, string>

export const ERROR_MESSAGES:ErrorMessages = {
  400: "Los datos enviados son incorrectos.",
  404: "No se pudieron cargar los posts. Inténtalo de nuevo más tarde.",
  500: "Error del servidor al cargar posts. Inténtalo más tarde.",
};



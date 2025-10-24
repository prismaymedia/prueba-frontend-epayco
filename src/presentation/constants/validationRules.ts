/**
 * Reglas de validación para formularios
 * Valores constantes para mantener consistencia
 */
export const VALIDATION_RULES = {
  TITLE: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 100,
    REQUIRED: true,
  },
  BODY: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 500,
    REQUIRED: true,
  },
} as const;

/**
 * Mensajes de validación en español
 */
export const VALIDATION_MESSAGES = {
  TITLE: {
    REQUIRED: 'El título es requerido',
    MIN_LENGTH: `El título debe tener al menos ${VALIDATION_RULES.TITLE.MIN_LENGTH} caracteres`,
    MAX_LENGTH: `El título no puede exceder ${VALIDATION_RULES.TITLE.MAX_LENGTH} caracteres`,
  },
  BODY: {
    REQUIRED: 'El contenido es requerido',
    MIN_LENGTH: `El contenido debe tener al menos ${VALIDATION_RULES.BODY.MIN_LENGTH} caracteres`,
    MAX_LENGTH: `El contenido no puede exceder ${VALIDATION_RULES.BODY.MAX_LENGTH} caracteres`,
  },
} as const;

/**
 * Valida si una cadena de texto tiene al menos la longitud mínima
 */
export const validateMinLength = (text: string, minLength: number): boolean => {
  return text.trim().length >= minLength;
};

/**
 * Valida si una cadena de texto no está vacía
 */
export const validateRequired = (text: string): boolean => {
  return text.trim().length > 0;
};

/**
 * Capitaliza la primera letra de una cadena de texto
 */
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Trunca un texto a una longitud específica y agrega puntos suspensivos
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Formatea un número como ID con ceros a la izquierda
 */
export const formatId = (id: number, length: number = 4): string => {
  return id.toString().padStart(length, '0');
};

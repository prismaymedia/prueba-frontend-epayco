export const isRequired = (value: string): string | boolean => {
  return value.trim() ? true : 'Este campo es requerido';
};

export const minLength = (value: string, min: number): string | boolean => {
  return value.length >= min ? true : `Debe tener al menos ${min} caracteres`;
};

export const isTitleValid = (value: string): string | boolean => {
  return minLength(value, 3) && isRequired(value);
};

export const isBodyValid = (value: string): string | boolean => {
  return minLength(value, 5) && isRequired(value);
};

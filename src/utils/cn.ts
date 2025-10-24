import { type ClassValue, clsx } from 'clsx';

/**
 * Utilidad para combinar clases CSS de manera condicional
 * Usa clsx para manejar clases condicionales
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

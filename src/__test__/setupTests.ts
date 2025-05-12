import '@testing-library/jest-dom/vitest'; // Versión específica para Vitest
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Limpieza después de cada test
afterEach(() => {
  cleanup();
});
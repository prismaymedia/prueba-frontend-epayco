import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__test__/setupTests.ts'],
    include: ['**/*.test.{ts,tsx}'],
    exclude: ['node_modules', '.git', 'dist'],
    // Configuración especial para Next.js
    server: {
            deps: {
                inline: ['next'],
            },
        },  
    }
});
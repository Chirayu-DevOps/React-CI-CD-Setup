import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Add this line if you have a setup file
  },
})

// /// <reference types="vitest" />
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,       // ✅ enables "test", "expect" globally
//     environment: 'jsdom' // ✅ simulates browser DOM for React Testing Library
//   },
// });

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/business-card/",
    plugins: [plugin()],
    server: {
        port: 59172,
    }
})
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const supabaseUrl = env.VITE_SUPABASE_URL || env.SUPABASE_URL || '';
  const supabasePublishableKey = env.VITE_SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_PUBLISHABLE_KEY || '';

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(supabaseUrl),
      'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify(supabasePublishableKey)
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-icons': ['lucide-react'],
            'vendor-utils': ['axios']
          }
        }
      }
    },
    server: {
      port: 5173,
      host: '127.0.0.1',
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
});

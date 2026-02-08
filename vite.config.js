import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function cspPlugin() {
  return {
    name: 'inject-csp',
    transformIndexHtml(html, ctx) {
      if (ctx.bundle) {
        return html.replace(
          '<head>',
          `<head>\n    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; script-src 'self'; connect-src 'self';" />`
        );
      }
      return html;
    },
  };
}

export default defineConfig({
  plugins: [react(), cspPlugin()],
})

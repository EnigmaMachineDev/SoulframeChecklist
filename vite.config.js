import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function cspPlugin() {
  return {
    name: 'inject-csp',
    transformIndexHtml(html, ctx) {
      if (ctx.bundle) {
        return html.replace(
          '<head>',
          `<head>\n    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https://*.ezoic.net https://*.ezojs.com; script-src 'self' 'unsafe-inline' https://*.gatekeeperconsent.com https://*.ezojs.com https://*.ezoic.net https://cdn.id5-sync.com; connect-src 'self' https://*.ezoic.net https://*.ezojs.com https://*.gatekeeperconsent.com https://cdn.id5-sync.com https://*.id5-sync.com https://id5-sync.com; frame-src 'self' https://*.ezoic.net;" />`
        );
      }
      return html;
    },
  };
}

export default defineConfig({
  plugins: [react(), cspPlugin()],
})

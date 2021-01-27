/** @type {import("snowpack").SnowpackUserConfig } */
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({target: 'http://localhost:8000'});
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {
      src: '/api/.*',
      dest: (req, res) => proxy.web(req, res),
    },
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    animation: './src/animation',
    components: './src/components',
    hooks: './src/hooks',
    global: './src/global',
    utilities: './src/utilities',
  },
}

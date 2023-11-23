const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

cors_proxy.createServer({
  originWhitelist: [], 
  requireHeaders: [], 
  removeHeaders: ['cookie', 'cookie2'], 
}).listen(port, host, () => {
  console.log(`Servidor CORS Anywhere em http://${host}:${port}`);
});
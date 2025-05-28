const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    console.log(`[server] path: ${path} | ${new Date().getTime()}`)

    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('index');
    } else if (path.startsWith('/hello/')) {
        const name = path.split('/hello/')[1];
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`hello, ${name}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

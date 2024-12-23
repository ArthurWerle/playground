const http = require("http");
const fs = require("fs");
const path = require("path");

const httpServer = http.createServer();

httpServer.on("listening", () => console.log("Server is listening 👀..."));

httpServer.on("request", (req, res) => {
  console.log(`Received request for ${req.url}`);
  
  if (req.url === "/") {
    console.log("Rendering HTML file...");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./index.html"));
    return;
  }

  if (req.url === '/events') {
    
    try {
      
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
         'Access-Control-Allow-Origin': '*'
      })
      // Send an initial message
      res.write(`data: Connected to server\n\n`);
  
      // Simulate sending updates from the server
      let counter = 0;
      const intervalId = setInterval(() => {
          counter++;
          // Write the event stream format
          res.write(`data: Message ${counter}\n\n`);
      }, 2000);
  
      // When client closes connection, stop sending events
      req.on('close', () => {
          clearInterval(intervalId);
          res.end();
      });

      return
    } catch (e) {
      console.error(e);
      return
    }
  }
  
  const filePath = `.${req.url}`; 
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      ".js": "application/javascript",
      ".css": "text/css",
      ".html": "text/html",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".gif": "image/gif",
    };
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(fs.readFileSync(filePath));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Not Found");
});

httpServer.listen(8080);
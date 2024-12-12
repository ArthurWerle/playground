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

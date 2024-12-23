const http = require("http");
const fs = require("fs");

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
  }
});

httpServer.listen(8080);
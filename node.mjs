import http from "node:http";

http.createServer((req, resp) => {
  // resp.writeHead(200, {
  //   "content-type": "text/plain",
  // });
  resp.end("Hello world");
}).listen(3000);
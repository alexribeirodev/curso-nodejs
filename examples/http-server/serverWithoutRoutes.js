const http = require("http");
const port = 3000;
const ip = "localhost";

let server = http.createServer((req, res) => {
  console.log("Recebendo uma requisição");
  res.end("Retorno da requisição");
});

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
  console.log("Parar o servidor com: ctrl + c");
});

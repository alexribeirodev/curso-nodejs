const http = require("http");
const port = 3000;
const ip = "localhost";

let server = http.createServer((req, res) => {
  const responses = [];
  responses["/"] = "Inicio";
  responses["/sobre"] = "Sobre";
  responses["/naoEncontrado"] = "Caminho não encontrado";

  res.end(responses[req.url] || responses["/naoEncontrado"]);
});

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
  console.log("Parar o servidor com: ctrl + c");
});

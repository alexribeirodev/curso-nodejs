const fs = require("fs");

const filename = "log.txt";

// Write file
fs.writeFile(filename, "Este texto foi inserido no arquivo.", err => {
  console.log("1. Arquivo foi escrito.");

  // Read file
  fs.readFile(filename, (err, data) => {
    console.log("2. Arquivo foi lido.");
    console.log("Seu conteúdo: ", data.toString());

    // Append to file
    fs.appendFile(filename, "\nAgora editei esse arquivo.", err => {
      console.log("3. Atualizamos o arquivo.");

      // Read file
      fs.readFile(filename, (err, data) => {
        console.log("4. Arquivo foi lido.");
        console.log("Seu conteúdo: ", data.toString());
      });
    });
  });
});

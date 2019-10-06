const fs = require("fs");

const filename = "log.txt";

fileModify();

async function fileModify() {
  try {
    console.log(1);
    await writeFile({teste: 1});
    console.log(2);
    await readFile();
    console.log(3);
    await appendFile("\nEditei esse arquivo.");
    console.log(4);
    await readFile();
  } catch (err) {
    console.log("Houve um erro ao tratar o arquivo: ", err);
  }
}

function writeFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, err => {
      if (err) reject(err);
      console.log("Arquivo foi escrito.");
      resolve();
    });
  });
}

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      console.log("Conteúdo do arquivo: ", data.toString());
      resolve(data.toString());
    });
  });
}

function appendFile(data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, data, err => {
      if (err) reject(err);
      console.log("Arquivo foi editado.");
      resolve();
    });
  });
}
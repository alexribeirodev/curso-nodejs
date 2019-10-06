const fs = require("fs");

const filename = "db.json";

test();
async function test() {
  await insert("teste", { chave: "valor", chave2: "valor2" });
  await get();
  console.log(await get("teste"));
}

async function insert(key, value) {
  try {
    await checkFileExist();

    let obj = await get();
    obj[key] = value;
    await write(obj);
    resolve(obj[key]);
  } catch (err) {
    return err;
  }
}

function write(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(data), err => {
      if (err) reject(err);
      console.log("Arquivo foi escrito.");
      resolve();
    });
  });
}

function get(key = null) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      let obj = JSON.parse(data.toString());
      console.log("Conteúdo do arquivo: ", obj);
      if (key) {
        if (key in obj) {
          resolve(obj[key]);
        } else {
          resolve(null);
        }
      } else {
        resolve(obj);
      }
    });
  });
}

function checkFileExist() {
  return new Promise((resolve, reject) => {
    fs.exists(filename, exists => {
      if (!exists) {
        write({})
          .then(resolve)
          .catch(reject);
      } else {
        resolve();
      }
    });
  });
}

module.exports = { insert, get };

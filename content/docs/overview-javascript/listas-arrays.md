---
title: Array
weight: 9
---

# Array
O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

## Criando um Array

```javascript
const frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2
```

## Acessar um item (index) do Array

```javascript
const primeiro = frutas[0];
// Maçã

const ultimo = frutas[frutas.length - 1];
// Banana
```

# Métodos Modificadores
Um objeto do tipo Array possui métodos que podem ser utilizados para modificar sua estrutura. Vejamos alguns deles abaixo.

## ForEach
Executa uma dada função em cada elemento de um array.

```javascript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

## Map
Invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

```javascript
const numbers = [1, 4, 9];
let doubles = numbers.map(function(num, index, arr) {
  return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
```

## Filter
Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```javascript
function isBigEnough(value, index, arr) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtrado é [12, 130, 44]
```

## Push
Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

```javascript
const numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]
```

## Pop
Remove o último elemento de um array e retorna aquele elemento.

```javascript
const meuPeixe = ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao'];

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao']

const meuPeixePop = meuPeixe.pop();

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim' ] 

console.log(meuPeixePop); // 'esturjao'
```

## Shift
Remove o primeiro elemento de um array e retorna esse elemento.

```javascript
const minhaLista = ['anjo', 'casa', 'mandarim', 'medico'];

console.log('minhaLista antes: ' + minhaLista);
// minhaList antes: ['anjo', 'casa', 'mandarim', 'medico'] 
const shifted = minhaLista.shift();

console.log('minhaLista depois: ' + minhaLista);
// minhaList depois: ['casa', 'mandarim', 'medico'] 
console.log('Elemento removido: ' + shifted);
// Elemento removido: anjo
```

## UnShift
Adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.

```javascript
const arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

## Indexof
Retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

```javascript
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const elemento = 'a';
let idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

## Splice
Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

```javascript
const myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
let removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]
```

## Slice
Retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início(begin) e fim(end)(fim não é necessário) de um array original. O Array original não é modificado.

```javascript
// Exemplo extrair nossos bons amigos, os cítricos, das frutas
const frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
const citricos = frutas.slice(1, 3);

// citricos contem ['Laranja','Limao']
```

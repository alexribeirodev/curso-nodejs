---
title: Funções
weight: 6
---

# Funções
Segundo a descrição da [mozilla.org](https://www.mozilla.org/pt-BR/):

> Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript — um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

Funções em Javascript são conhecidas como objetos de primeira classe (first-class objects). Isso porque tudo o que você pode fazer com um objeto, você pode fazer com funções. Na realidade uma função é um objeto do tipo Function.

As funções podem ser utilizadas de diversas formas, estas às quais iremos abordar a seguir.

## Criadas de forma literal

```javascript
function myFunction(){} //definindo uma função
```

## Passadas como parâmetros para outras funções

```javascript
function myFunction(param){} //definindo a função
//invocando a função e passando como parâmetro outra função
myFunction(function(){ console.log("função como parâmetro") })
```

## Atribuídas para propriedades de objetos

```javascript
//definindo um objeto com uma propriedade que é uma função
let obj = {
    start:function(){}
};
//atribuindo uma função como propriedade para um objeto dinamicamente
let obj = {};
obj.myFunction = function(){};
```

## Retornadas como resultado de uma função

```javascript
function myFunction(){
    return function(){} //retornando uma função como resultado
}
```

## Possuir propriedades que podem ser atribuídas dinamicamente

```javascript
function myFunction(){}
myFunction.startTime = 0 // atribuindo uma propriedade para a função
// a forma abaixo também funciona
let myFunction = function(){}
myFunction.startTime = 0
```

> Exemplos retirados de uma postagem, do blog [React Brasil](https://medium.com/reactbrasil/como-o-javascript-funciona-entendendo-as-fun%C3%A7%C3%B5es-e-suas-formas-de-uso-eb387c7fa138), muito completa sobre o tema.

# Principais formas de definir funções

## Arrow functions
Arrow functions é uma forma mais simplificada e direta de se criar uma function e foi adicionada no ES6. Esta forma de se escrever uma função também é encontrada em outras linguagens.

```javascript
// arrow function em apenas uma linha e sem o return
let sum = (x, y) => x + y
sum(1, 1)

//arrow function com bloco de código
let sum = (x, y) => {
    return x + y
}
sum(1, 1)
```

## Callback functions

Uma callback function (chaamda de retorno) é uma função que é passada como argumento para outra função, para ser "chamada de volta" posteriormente. Uma função que aceita outras funções como argumentos é chamada de função de higher-order (ordem superior), que contém a lógica para quando a callback function é executada. É a combinação desses dois que nos permite ampliar nossa funcionalidade.

Veja o exemplo abaixo:

```javascript
function createQuote(quote, callback){ 
  var myQuote = "Como eu sempre digo, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote){
  console.log(quote);
}

createQuote("coma seus vegetais!", logQuote); // 1

// Resultado no console: 
// Como eu sempre digo, coma seus vegetais!
```

# Links Úteis

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es
- https://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions
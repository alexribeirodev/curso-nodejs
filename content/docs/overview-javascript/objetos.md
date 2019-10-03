---
title: Objetos
weight: 5
---

# Objetos
Utilizando Javascript, existem varias formas de se construir um objeto. Utilizando JavaScript, existem varias formas de se construir um objeto. As três formas mais conhecidas são: utilizando a notação literal, utilizando funções construtoras e classes (esta será abordada em outro tópico).

Um objeto é composto por um conjunto de chaves e valores, estes podendo ser desde string à functions, entre duas chaves (`{}`). Suponha o seguinte exemplo de função construtora:
```javascript
var Pessoa = function(nome, email) {
     this.nome =  nome;
  
     // verifica se o e-mail foi preenchido
     if (email) {
          this.email = email;    
     }
};
var joao = new Pessoa("João da Silva",  "joao@da.silva"); // criando nova pessoa, object
console.log(joao.nome); // João da Silva
console.log(joao.email); // joao@da.silva
```

E abaixo um exemplo com a criação literal:
```javascript
var joao = {
    nome: "João da Silva",
    email: "joao@da.silva"
}
```

# Links Úteis

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos
- https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico

---
title: Comentários
weight: 3
---

# Comentários
Comentários são essenciais em qualquer linguagem, principalmente se estiver pensando no seu coleguinha que irá tocar no código depois de você. Deixar comentários no código detalhando pelo menos para quê um item (classe, variável, função, e etc) está sendo utilizado é imprescindível para a saúde de qualquer projeto, independente do quão custoso isso possa ser.

No Javascript, existem duas formas de inserir comentários no código: linha única e multiplas linhas.

Exemplos com linha única utilizando `//`:
```javascript
// Variáveis
var x = 0; // Declarando variável x
var y = x + 1; // Declarando variável y
```

Exemplo com multiplas linhas, abrindo o bloco com `/*` e fechando com `*/`:
```javascript
/*
Essa classe é responsável por
definir o objeto User com seus
atributos e métodos
*/
class User {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}
```

Links Úteis
- https://www.w3schools.com/js/js_comments.asp
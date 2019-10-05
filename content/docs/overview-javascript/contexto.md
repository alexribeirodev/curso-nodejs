---
title: Contexto (this)
weight: 7
---

# Contexto (this)
O contexto no Javacript é algo que tanto pode ser tanto nosso amigo quanto nosso pior inimigo. O mesmo é responsável muitas vezes o motivo de bugs em nosso algoritmo, como também a solução para muitos de nossos problemas.

O contexto pode ser acessado de qualquer parte do seu código pelo objeto reservado `this`. Porém, seu valor pode ser diferente dependendo de qual parte do seu código está sendo chamado.

O contexto é todo o escopo que determinada função, método, objeto ou variável está inserida.

Vamos entender melhor no exemplo abaixo:
```javascript
    var nome = 'joao'

    function dizerFrase(){
        console.log(this.nome + " é meu nome!")
    }

    dizerFrase() // joao é meu nome!

    let pessoa = {
        nome: 'Fulano',
        dizerFrase: function (){
            console.log(`${this.nome} é meu nome!`)
        }
    }

    pessoa.dizerFrase() // Fulano é meu nome!
```

Como podemos ver, o primeiro `this` pegou o escopo global, enquanto que o seguindo `this` pegou o escopo do objeto ao qual se encontrava, mesmo que o parâmetro seja igual.

## Arrow Function  

Um ponto muito importante a ser levado em consideração é que se utilizarmos o mesmo código acima, alterando apenas a função `dizerFrase` do objeto `pessoa` para arrow function, teremos um retorno diferente:

```javascript
    var nome = 'joao'

    function dizerFrase(){
        console.log(this.nome + " é meu nome!")
    }

    dizerFrase() // joao é meu nome!

    let pessoa = {
        nome: 'Fulano',
        dizerFrase: () => {
            console.log(`${this.nome} é meu nome!`)
        }
    }

    pessoa.dizerFrase() // joao é meu nome!
```

O retorno se mantém com o valor da variável `nome` definida por fora do objeto `pessoa`. Isso acontece por conta de um detalhe bem peculiar do arrow function, ele considera apenas o escopo superior àquele em que está definido, diferente de uma função anônima criada com o `function`.

# Links Úteis

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
- https://www.w3schools.com/js/js_this.asp
- https://imasters.com.br/javascript/javascript-entendendo-o-de-uma-vez-por-todas
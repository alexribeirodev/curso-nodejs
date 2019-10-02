---
title: Variáveis
weight: 4
---

# Variáveis
Em Javascript, as variáveis possuem tipagens dinâmicas. Podemos criar uma variável atribuindo um valor do tipo inteiro e logo em seguida atribuir uma string, como o exemplo a seguir.
```javascript
var x = 1
console.log(x) // 1
x = "Essa é uma string"
console.log(x) // "Essa é uma string"
```

Os nomes das variáveis em Javascript são bastante flexíveis. Eles podem conter letras, números, sublinhados e cifrões. A regra aqui é que uma variável só pode começar com um caractere, um cifrão ou um sublinhado, mas nunca com um número. No entanto, é só no primeiro caractere, depois dele você pode utilizar o que quiser.

> Javascript é case-sensitive com seus identificadores.

## Operador de atribuição
Em javascript, o sinal de igual (=) é um operador de atribuição, não um operador de igualdade, assim como em diversas outras linguagens.

> O operador de igualdade é escrito como `==` (ou `===`, se for comparar tanto o valor quanto seu tipo).

## Tipos de dados
Em Javascript, todas as estrutura são objetos. Ainda assim, existem os tipos de dados abaixo:

- **Strings** — Uma String nada mais é que texto puro.
- **Numbers** — São os números, seja eles integer, float, double etc.
- **Booleans** — São os operadores booleanos (true ou false)
- **Arrays** — É uma estrutura de dado para armazenar uma coleção de valores, sendo eles de qualquer tipo.
- **Objects** — Conjunto de atributos aninhados a uma variável denomina-se um objeto.
- **Functions** — Em JavaScript é possível declarar uma variável como uma função, podendo fazer operações e retornando o valor para a variável de declaração. Obs: muito utilizado no paradigma de programação funcional.

## Tipos de declarações
Podemos fazer a declaração de uma variável no Javascript com três operadores: `var`, `let` e `const`. Ambos servem para o mesmo fim, armazenar valores de dados, porém possuem usabilidades distintas. O que diferencia uma da outra gira em torno ou de escopo ou de mutabilidade dos dados.

### Const
Utilize quando você precisar declarar constantes, ou seja, você não quer haja uma nova atribuição de valor para uma variável durante a execução do bloco. O escopo das variáveis declaradas com `const` será o bloco em que elas foram declaradas. Além de que esta, ao contrário das outras, deve ter sempre um valor atribuído logo quando inicializada.

### Var
Utilize quando precisar declarar uma variável que deve ser global dentro do seu contexto de execução, ou seja, o valor dessa variável poderá ser alterado a qualquer momento em qualquer bloco que esteja dentro do mesmo contexto de execução. Dito isto, o escopo dos identificadores definidos com var é o contexto de execução em que foram declarados, se a variável foi declarada dentro de uma função, seu escopo será aquela função, se não foi declarado dentro de nenhuma função, seu escopo será global.

### Let
Utilize quando você precisar fazer reatribuições, ou seja, a sua variável precisará assumir diferentes valores durante a execução do bloco. Assim como `const`, o escopo das variáveis definidas com `let` será o bloco em que foram declaradas.

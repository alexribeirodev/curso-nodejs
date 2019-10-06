---
title: Condicionais
weight: 10
---

# Condicionais
As estruturas condicionais Javascript não difere muito da existente na maioria das outras linguagens de programação, as utilizamos para definir se algo deve acontecer ou não.

## if...else
A condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de `else`.

```javascript
let x = 5

if (x > 5 && x < 50) {
    console.log("x é maior que 5.")
} else if (x > 50 || x == 50) {
    console.log("x é maior que 50.")
} else {
    console.log("x é menor que 5.")
}
```

## Ternário
O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução `if`.

Onde sua estrutura segue a sintaxe: `condição ? expr1 : expr2`. Conforme o exemplo abaixo:

```javascript
let x = 5

console.log(`x é ${(x > 5 ? 'maior' : 'menor')} que 5`)
```

## switch
A condicional `switch` avalia uma expressão, combinando o valor da expressão para um cláusula `case`, e executa as instruções associadas ao `case`.

```javascript
let expr = 'Bananas'

switch (expr) {
  case "Laranjas":
    console.log("As laranjas custam $0.59 o quilo.");
    break;
  case "Maçãs":
    console.log("Maçãs custam $0.32 o quilo.");
    break;
  case "Bananas":
    console.log("Bananas custam $0.48 o quilo.");
    break;
  case "Cerejas":
    console.log("Cerejas custam $3.00 o quilo.");
    break;
  case "Mangas":
  case "Mamões":
    console.log("Mangas e mamões custam $2.79 o quilo.");
    break;
  default:
    console.log("Desculpe, estamos sem nenhuma " + expr + ".");
}

console.log("Tem algo mais que você gostaria de levar?");
```
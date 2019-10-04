---
title: Operadores Aritméticos
weight: 9
---

# Operadores Aritméticos

Operadores aritméticos tem valores numéricos (literais ou variáveis) como seus operadores e retornam um valor numérico único. Os operadores aritméticos padrões são adição (`+`), subtração (`-`), multiplicação (`*`), e divisão (`/`). ([mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators))

## Adição (+)
Este operador produz a soma dos valores, estes sendo numéricos ou strings.

Exemplos:
```javascript
// Número + Número -> adição
1 + 2 // 3

// Booleano + Número -> adição
true + 1 // 2

// Booleano + Booleano -> adição
false + false // 0

// Número + String -> concatenação
5 + "foo" // "5foo"

// String + Booleano -> concatenação
"foo" + false // "foofalse"

// String + String -> concatenação
"foo" + "bar" // "foobar"
```

## Subtração (-)
Este operador subtrai dois valores, produzindo sua diferença.

```javascript
5 - 3 // 2
3 - 5 // -2
"foo" - 3 // NaN
```

## Multiplicação (*)
Este operador produz o produto dos operandos.

```javascript
2 * 2 // 4
-2 * 2 // -4
Infinity * 0 // NaN
Infinity * Infinity // Infinity
"foo" * 2 // NaN
```

## Divisão (/)
Este operador produz o quociente de seus operandos onde o operando da esquerda é o dividendo e o da direita é o divisor.

```javascript
1 / 2      // retorna 0.5 em JavaScript
1 / 2      // retorna 0 em Java 
// (nenhum dos números é explicitamente um número de ponto flutuante)

1.0 / 2.0  // retorna 0.5 em JavaScript e Java

2.0 / 0    // retorna Infinity em JavaScript
2.0 / 0.0  // retorna Infinity também
2.0 / -0.0 // retorna -Infinity em JavaScript
```

## Módulo (%)
Este operador produz o resto inteiro da divisão de dois valores.

```javascript
12 % 5 // 2
-1 % 2 // -1
NaN % 2 // NaN
```

## Exponenciação (**)
Eset operador retorna o resultado do primeiro operando elevado ao segundo operando.

```javascript
2 ** 3 // 8
3 ** 2 // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN

2 ** 3 ** 2 // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```

## Incremento (++)
Este operador incrementa seu operando e retorna um valor.

```javascript
// Posfixo 
var x = 3;
y = x++; // y = 3, x = 4

// Prefixo
var a = 2;
b = ++a; // a = 3, b = 3
```

## Decremento (--)
Este operador decrementa seu operando e retorna um valor.

```javascript
// Posfixo 
var x = 3;
y = x--; // y = 3, x = 2

// Prefixo
var a = 2;
b = --a; // a = 1, b = 1
```

## Negação Unária (-)
Este operador precede seu operando e o nega.

```javascript
var x = 3;
y = -x; // y = -3, x = 3
```

## Soma Unária (+)
Este operador precede seu operando e calcula para seu operando mas tenta convertê-lo para um número, caso ainda não o seja.

```javascript
+3     // 3
+"3"   // 3
+true  // 1
+false // 0
+null  // 0
```

> Exemplos retirados da documentação da [mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators), uma das principais fontes de conteúdo sobre javascript.
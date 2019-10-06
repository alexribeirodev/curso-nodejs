---
title: Loops
weight: 11
---

# Loops
Assim como as estruturas condicionais Javascript, as estruturas de repetição também não se diferem tanto das existente em outras linguagens de programação. Essas estruturas de repetição, são utilizadas para repetir ações semelhantes que são executadas para todos os elementos de uma lista de dados, ou simplesmente para repetir um mesmo processamento até que a condição seja satisfeita.

## for
A instrução `for` cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

```javascript
for (let i = 0; i < 9; i++) {
   console.log(i);
}
```

### for...in
O laço `for...in` interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

```javascript
let obj = {a:1, b:2, c:3};

for (let prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
```

### for...of
O loop `for...of` percorre objetos iterativos, chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

## while
A declaração `while` cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

```javascript
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

### do...while
A declaração `do...while` cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avalida depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

```javascript
let result = '';
let i = 0;

do {
   i += 1;
   result += i + ' ';
} while (i < 5);
```

## break
O comando break encerra o loop atual, ou switch, e transfere o controle da execução do programa para o comando seguinte.

```javascript
function testaBreak(x) {
   let i = 0;

   while (i < 6) {
      if (i == 3) {
         break;
      }
      i += 1;
   }
   return i * x;
}

testaBreak(2)
```

## continue
A palavra chave `continue` termina a atual iteração do laço em que ele se encontra e continua a execução deste laço com a próxima iteração.

```javascript
let i = 0;
let n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```
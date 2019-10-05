---
title: Classes
weight: 13
---
```javascript

```
# Classes
Uma classe Javascript é um tipo especial de função. 

## Declarando classes
Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave `class` seguida pelo nome da classe.

```javascript
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}
```

Outra forma de declarar uma classe é por meio do que chamados de **Expressão de Classe**. Expressões de Classes podem possuir nomes ou não (anônimas). O nome dado para uma expressão de classe é local ao corpo da classe.

```javascript
// sem nome
let Retangulo = class {
  constructor(altura, largura) {
    this.altura = altura; 
    this.largura = largura;
  }
};

// nomeada
let Retangulo = class Retangulo {
  constructor(altura, largura) { 
    this.altura = altura;
    this.largura = largura;
  }
};
```

## Sub classes (Herança)
A palavra-chave `extends` é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.

```javascript
class Animal { 
  constructor(nome) {
    this.nome = nome;
  }
  
  falar() {
    console.log(this.nome + ' emite um barulho.');
  }

  andar() {
      console.log('Estou andando!')
  }
}

class Cachorro extends Animal {
  constructor(nome, idade){
      super(nome);
      this.idade = idade
  }

  falar() {
    console.log(this.nome + ' latidos.');
  }
}

let cachoroo = new Cachorro('Mat', 5);
cachorro.falar();
cachorro.andar();
```

Observe que na classe `Cachorro`, estamos utilizando a palavra chave `super`. Esta palavra chave chave está sendo utilizada para inicializar o construtor de sua classe pai, `Animal`.

## Species
Você pode querer retornar um objeto `Array` na sua classe `MinhaArray` derivada de array. O padrão Species permite a sobrescrita do construtor padrão.

Por exemplo, quando utilizando um método como `map()` que retorna o construtor padrão, você pode querer que esse método retorne um objeto `Array` ao invés do objeto `MinhaArray`. O `Symbol.species` te permite fazer isso:

```javascript
class MinhaArray extends Array {
   // Sobrescreve species para o construtor da classe pai Array
   static get [Symbol.species]() { return Array; }
}

let a = new MinhaArray(1,2,3);
let mapped = a.map(x => x * x);
 
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Outros exemplos de implementações de classes

### Métodos Protótipos

```javascript
class Retangulo {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
  //Getter
    get area() {
        return this.calculaArea()  
    }  
  
    calculaArea() {  
        return this.altura * this.largura;  
    }
}

const quadrado = new Retangulo(10, 10);

console.log(quadrado.area);
```

### Métodos estáticos

```javascript
class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10);

p1.distancia; //undefined
p2.distancia; //undefined

console.log(Ponto.distancia(p1, p2));
```

> Para saber mais sobre como o Javascript funciona por debaixo dos panos das classes, [clique aqui](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript).
---
title: Programação Assíncrona
weight: 14
---

# Programação Assíncrona
Síncrono ou assíncrono diz respeito ao fluxo de execução de um programa. Quando uma operação executa completamente antes de passar o controle à seguinte, a execução é síncrona.

![](https://i.stack.imgur.com/pclnB.png)

Pode-se fazer a analogia de uma operação assíncrona ao agendamento de uma operação. A thread agenda a operação e pode continuar a execução normalmente. Quando a operação assíncrona estiver concluída a thread tem oportunidade de processar o seu resultado. Essa oportunidade normalmente é criada usando **callbacks**.

> Referência a uma resposta completa e detalhada a uma pergunta comum referente ao assincronismo, [clique aqui](https://pt.stackoverflow.com/questions/124283/o-que-%C3%A9-o-assincronismo) para verificar.

## Promises
Uma `Promise` é um objeto que representa a eventual conclusão ou falha de uma operação assincrona.

Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

Ao contrário dos `callbacks` com retornos de funções old-style, uma `Promise` vem com algumas garantias:

- Callbacks nunca serão chamados antes da conclusão da execução atual do loop de eventos do JavaScript. 
- Callbacks adicionadas com .then mesmo depois do sucesso ou falha da operação assincrona, serão chamadas, como acima.
- Multiplos callbacks podem ser adicionados chamando-se .then várias vezes, para serem executados independentemente da ordem de inserção.

Mas o benefício mais imediato da promises é o encadeamento.

Exemplo da criação de uma Promise e seu acionamento encadeado logo em seguida:

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Inicial');
      resolve();
    }, 2000)
})
.then(() => {
    throw new Error('Alguma falha');
        
    console.log('Faz isso');
})
.catch(() => {
    console.log('Faz isso');
})
.then(() => {
    console.log('Faz isso independente do que aconteceu antes');
});
```

## async/await
Uma função é definida como assíncrona quando ela contém o modificador `async` e deve, então, devolver uma promise.

Uma função somente pode esperar (`await`) por outra função assíncrona, caso ela também seja assíncrona (`async`).

Abaixo temos o exemplo de `Promise` em conjunto com o `async/await`:

```javascript
async function sleep (forHowLong) {
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await timeout(forHowLong);
}
```

Com essa função acima, transformamos a função built-in do Javascript que trabalha com `callback` (`setTimeout`) e transformamos em uma função assíncrona. E agora podemos utilizá-la como uma Promise:

```javascript
sleep(2000)
  .then(result => console.log(result));
}
```

Ou como uma chamada em outra função assíncrona:

```javascript
async function countFromThree () {
  await sleep(0);
  console.log(3);
  await sleep(1000);
  console.log(2);
  await sleep(1000);
  console.log(1);
  await sleep(1000);
  console.log('DONE');
}
```

> Exemplos retirados do blog da [BrazilJS](https://braziljs.org/).
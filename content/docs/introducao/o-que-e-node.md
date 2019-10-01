---
title: O que é Node.js?
weight: 1
---

# O que é Node.js?
[Node.js](https://nodejs.org/) é um runtime de JavaScript, criado por [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) em 2009. Foi desenvolvido em cima do motor [JavaScript V8](https://v8.dev/)  — engine criada pelo Google e utilizado no Chrome e Chromium, desenvolvida na linguagem C++ — , que leva o processamento e renderização do JavaScript para o lado do servidor.

Node.js usa um modelo de I/O não bloqueante orientada a evento que o torna leve e eficiente, que possibilita criar aplicações rápidas, escaláveis e estáveis. Desde seu surgimento, vem ganhando crescente espaço entre profissionais de tecnologia do Brasil e do mundo.

Já pensou, poder utilizar javascript no back-end, com a mesma segurança proporcionada por linguagens como PHP e ASP.NET?!

Para quem já tem certa experiência com desenvolvimento web (certamente conhece a limitação de uso do **Javascript no front-end**) nunca iria imaginar essa possibilidade.

Agora estamos em uma era diferente, onde praticamente todas as grandes limitações do Javascript não existem mais. A cada dia infinitas possibilidades surgem e diversas referências vem aderindo a esse avanço.

# Por que (e quando) utilizar Node.js?
Vou listar pontos cruciais, alguns já mencionados anteriormente, que irão te esclarecer o porquê de utilizar o Node.js:

- **Assíncrono** ;
- **I/O sem bloqueios** ;
- **Alta performance** ;
- **Escalabilidade fácil e barata** ;
- **Loop de eventos**.

Um detalhe que toma a dianteira em relação aos concorrentes é o **loop de eventos**. Irei explicar melhor como isso funciona.

Geralmente, um jeito “tradicional” de lidar com muitas requisições é criando múltiplas threads, ou seja, para cada requisição é criada uma thread. Nela é tratada a requisição e somente após o retorno deste tratamento a thread é finalizada. Porém, muito recurso é gasto nesse processo e muitas vezes de forma desnecessária, já que nem sempre todo aquele recurso reservado é utilizado e a thread fica “estacionada” enquanto o tratamento não estiver concluído.

> Quando uso o termo “tratamento” me refiro a qualquer processo feito antes de devolver uma resposta, seja uma consulta no banco, verificação de arquivo, cálculo…

Já o Node.js, trata toda e qualquer requisição em uma única thread.

> Aí você me pergunta: Então como é possível ele ser tão performático?

Quando ele recebe uma requisição, ao invés de esperar o resultado do tratamento desta, ele segue com a próxima requisição e assim por diante, como uma fila. Quando alguma requisição em espera tiver seu tratamento finalizado, é sinalizado um evento que a retornará o quanto antes.

Isso quer dizer que, com o Node.js, temos um ganho muito grande de número de requisições que podem ser processadas.

Node.js não é apenas um servidor, já que hoje em dia pode ser utilizado para criar até mesmo aplicações desktop. Também é ótimo para realizar diversos tipos de projetos, como:

- APIs (principal uso);
- Aplicações web real-time como servidores de chat ou aplicações colaborativas entre múltiplos usuários (socket);
- Jogos multiplayer;
- Aplicações que demandam alta escalabilidade;
- Servidores de streaming de dados.

# Quando não utilizar?
Por usar somente uma thread, ele não serve para lidar com algoritmos complexos que consumam muita CPU, como edição de imagens, por exemplo. Isso impediria a execução de outras ações até o processamento estar completo.

# Quem já utiliza?
> Então quer dizer que não é só uma “modinha”?

Aqui vai uma lista de empresas conhecidas que utilização esta linda tecnologia:

- **Walmart;**
- **PayPal;**
- **Groupon;**
- **Netflix;**
- **LinkedIn** ;
- **New York Times;**
- **Flickr** ;
- **Mozilla** ;
- **Yahoo.**.

# Links Úteis
- https://nodejs.org/
- https://en.wikipedia.org/wiki/Ryan_Dahl
- https://v8.dev/
- https://medium.com/reactbrasil/como-o-javascript-funciona-dentro-da-engine-v8-5-dicas-sobre-como-escrever-c%C3%B3digo-otimizado-e05af6088fd5
- https://dev.to/alexribeir0_/o-que-e-node-js-4oh5
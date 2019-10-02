---
title: Console
weight: 1
---

# Console
Um dos processos mais utilizados nas linguagens de programação para se debugar um algoritmo é através impressões (mais conhecidos como "print"), geralmente a nível console/terminal, do que desejamos ver do fluxo de execução, podendo ser desde fluxos de entrada, saída e erros.

Essa impressão difere entre as linguagens em questão de sintaxe, mas sua mecânica não costuma ser diferente. Abaixo temos listadas alguns exemplos desse tipo de impressão em algumas linguagens.

Java:
```java
System.out.println("Hello World!");
```

C#:
```csharp
Console.Write("Hello World!");
```

Python:
```python
print("Hello World!")
```

No Javascript, essa responsabilidade fica sobre o objeto `console`, que fornece acesso ao console de debug do navegador incluindo um conjunto de ferramentas.

# Hello World!
Agora já podemos executar nosso primeiro e clássico *Hello World* utilizando este objeto do Javascript. Para isso, acesse qualquer página web em um navegador de sua preferência, clique com o botão direito sobre qualquer lugar da página e procure a opção *Inspecionar*. Notará que abriu uma nova camada no navegador, nela acesse a aba *Console*. Este será nosso primeiro playground para Javascript.

Copie o código abaixo, cole no console e tecle Enter:
```javascript
console.log("Hello World!")
```

Parabéns! Você executou seu primeiro trecho de código em Javascript.

# Saiba mais
O objeto console possui diversas outras ferramentas complementares ao ´console.log´, [clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/API/Console) para saber mais.
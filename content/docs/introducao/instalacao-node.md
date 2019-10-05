---
title: Instalação do Node.js
weight: 2
---

# Instalação do Node.js

Existem diversas formas de se instalar o Node.js e funciona em praticamente todas os sistemas operacionais e plataformas existentes atualmente. Daremos preferência à versão LTS (Long-term Support), pois a última versão (latest) pode possuir eventuais bugs (e de bugs, já basta os nossos rsrs).

Para instalar, vamos acessar a página de download oficial do Node.js, [clicando aqui](https://nodejs.org/en/download/).

{{< tabs "instalacao" >}}
{{< tab "Windows" >}}
Existe as seguintes formas de se ter o Node.js instalado no Windows:

- .msi
- .zip
- [Chocolatey](https://chocolatey.org/)
- [Scoop](https://scoop.sh/)

Todas estas formas podem ser encontrada na página oficial de download.
{{< /tab >}}
{{< tab "Linux" >}}
Existem algumas formas de se instalar o Node.js no linux, mas a forma mais rápida é através do terminal. Por padrão, os sistemas operacionais baseados no Ubuntu já possuem alguma versão do Node.js instalada por padrão, só que vamos focar no processo manual de instalar a versão LTS.

Para ver todas as opções de instalação no Linux por terminal basta [clicar aqui](https://nodejs.org/en/download/package-manager/).

Abaixo temos um exemplo de instalação no Ubuntu:
```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs npm
```
{{< /tab >}}
{{< tab "MacOS" >}}
Para instalar no MacOs pode ser por meio de:
- .pkg
- .tar.gz
- [Homebrew](https://brew.sh/)
- [MacPorts](https://www.macports.org/)
- [pkgsrc](https://pkgsrc.joyent.com/install-on-osx/)

Como o Homebrew é um dos gerenciadores de pacotes mais utilizados para MacOS, abaixo temos um exemplo de como é feita a instalação por terminal:
```bash
$ brew install node
```
{{< /tab >}}
{{< /tabs >}}

Após instalação concluída, vamos validar pelo terminal a versão atual do Node.js e do NPM (Node Package Manager):
```bash
$ node --version
$ npm --version
```

# Links Úteis
- https://nodejs.org/en/download/
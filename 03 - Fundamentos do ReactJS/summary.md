### O que é o ReactJS ?

Nada mais que uma biblioteca de JS com objetivo de criação de interfaces, por que chamamos de biblioteca e não framwork? Simples e por que ele não tem uma `opinião forte`, como estruturas de pastas, regras e etcs.

<br>

### Como criar um projeto React?
Para criarmos algum projeto React, podemos utilizar algumas estrategias como o <a href="https://vitejs.dev/guide/" target="_blank">Vite</a> , `Next`, `Gastby`, `Remix`, `Create React app`. OBS: a própria documentaação não recomenda o Create React App.

> Recentemente Houve uma mudança nas documentações que o proprio react, sugeri utilizar um frameworks como citado a cima.
>
>Uma grande observação que as novas versões do Next.js que a opção padrão de estilização dentros dos novos projetos Nexts esão voltadas agora ao Tailwind e não ao CSS models.

Caso queria ver mais sobre isso há um vídeo na Rocketseat, ou basta clicar <a href="https://www.youtube.com/watch?v=1ZDbOkW5ITs&t=622s" target="_blank">aqui</a>. No curso atualmente se utiliza o Vite.

Já para criar um projeto utilizano o Vite, e necessário utilizar a seguinte sintaxe:
```
npm create vite@latest nomeDoSeuProjeto --template react
```

<br>

### Como executar um projeto react?
Um dos motivos do Vite ser tão veloz e que ele não manda pasta node modules, assim independênte se criar um projeto novo ou baixar um e necessário rodar o comando abaixo para que ele baixe as dependências necessárias do projeto.
```
npm install
```

Após isso basta rodar o comando abaixo, e ele irá carregar o servidor do Node. 
```
npm run dev
```

para encerrar basta um dos dois comandos abaixo.
```
CTRL + C 

/// or

q
```


### Estrutura de um projeto React
No React nos temos um arquivo `index.html`, que nele temos uma div com a classe de 'root' e um script passando um arquivo com a tag `jsx`

Quando for criado um novo porjeto utilizando o React, nos encontraremos a presença de alguns arquivos como `index.html` com uma classe "root" e um script passando um arquivo `.jsx` Além de uam pasta chamada `src`, aonde ficara uma pasta contendo a pasta pages, do react, pasta de assets e o `main.jsx`

> #### JSX, o que é ?
> E a sintaxe utilizada pelo React, e de forma bem resumida dentro de um arquivo .jsx, nos temos uma função com um retorno um conteúdo HTML.

#### Estrutura de páginas
Na estrutura padrão do React nos temos dois arquivos responsáveis pelas dependências que são `package.json` e `package-lock.json`. Caso tenha alguma dúvida tenho um resumo sobre o Node, so clicar <a href="https://github.com/LFeli/Rocketseat-estudos-discovery-fundamentar/blob/main/17%20-%20NodeJS/module-04-summary.md" target="_blank">Aqui</a>. 

> Além disso temos o arquivo de configuração específico do Vite, nos não mexemos nele so deixamos ele **quietinho** no canto dele.

Pra fazer uma "instalação limpa" e praticamente limpar todos os arquivos e apenas manter a estrutura das pastas e os arquivos jsx, abaixo há um exemplo:

<img src="./assets-for-readme/exemple-clean-installation.png" alt="Exemplo de uma instalação limpa">
### O que é o ReactJS ?

Nada mais que uma biblioteca de JS com objetivo de criação de interfaces, por que chamamos de biblioteca e não framwork? Simples e por que ele não tem uma `opinião forte`, como estruturas de pastas, regras e etcs.

### Como criar um projeto React?
Para criarmos algum projeto React, podemos utilizar algumas estrategias como o `Create React app`, `Vite`, `Next`, `Gastby`, `Remix`. OBS: a própria documentaação não recomenda o Create React App..

Recentemente Houve uma mudança nas documentações que o proprio react, sugeri utilizar um frameworks como citado a cima.

Uma grande observação que as novas versões do Next.js que a opção padrão de estilização dentros dos novos projetos Nexts esão voltadas agora ao Tailwind e não ao CSS models.

Caso queria ver mais sobre isso há um vídeo na Rocketseat, ou basta clicar [aqui](https://www.youtube.com/watch?v=1ZDbOkW5ITs&t=622s).

No curso atualmente e utiliza o Vite.

Já para criar um projeto utilizano o Vite, e necessário utilizar a seguinte sintaxe:
```
npm create vite@latest nomeDoSeuProjeto --template react
```

### Como executar um projeto react?
Um dos motivos do Vite ser tão veloz e que ele não manda pasta node modules, assim toda vez precisamos rodar o comando `npm install` para que ele baixe as dependências necessárias.

Após isso basta rodar `npm run dev`, e ele irá carregar o servidor do Node, para encerrar eu uso o famoso `CTRL + C` ou `q`.
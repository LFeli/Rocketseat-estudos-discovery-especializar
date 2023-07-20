## O que é Github para times?
Algumas ferramentas e coisas interessantes para nos auxiliar para quando estiver desenvolvendo com outros colegas programadores.


### Colaboradores
E possível adicionar colaboradores em nossos repositórios. Para adicionar basta acessar o repositório que deseja adicionar um colaborador e seguir este caminho

```
    Settings -> Collaborators -> // Colocar o github name
```

Após isso o github irá mandar um invite para o perfil adicionado e após ele aceitar já poderá mexer no projeto.


### Branches
Podemos criar uma nova bifurcação de nosso projeto para utilizarmos em qualquer fim, como por exemplo deixar a `main` (Como produção) e uma branch `dev` (Para apenas o desenvolvimento de uma aplicação).

Para criar uma branch usamos o seguinte comando:
```
    //terminal
    git checkout -b "branchName"
```

Para trocarmos para outra branch e o seguinte comando
```
    //terminal
    git checkout "branchName"
```


### Merge
Colocar o conteúdo de outra branch para nossa branch principal.

Primeira coisa e você já esta na branch que deseja fazer o merge, após isso irá usar esse comando.

```
    //terminal
    git merge "branchName"
```

### Apagar uma branch
Caso desejamos excluir uma branch e necessário utilizar o seguinte comando:

```
    //terminal
    git branch -D "branchName"
```

Para conseguir apagar você não pode estar na branch que deseja apagar

OBS: Ela irá apenas apagar a branch local, caso queira remover a branch do repositório remoto e necessário usar esse comando também.
```
    //terminal
    git push origin --delete "branchName"
```

### Atualizando as branch
Quando manipulamos com múltiplas e algum de nossos colegas criar uma nova branch, nos precisamos atualizar o nosso repositório local para ficar em dia igual ao remoto, para isso precisamos usar o seguinte comando:
```
    //terminal
    git fetch
```

Ele vai baixar porém não vai exibir logo de cara que existem outras branches, ai vai ser preciso acessar algumas dessas branches remotas para que ele atualize a listagem

Mas se por exemplo uma dessas branches e excluída como que nos atualizamos ? Nesse caso e preciso utilizar uma variação do fetch
```
    //terminal
    git fetch -p
```

### Configurando de Branch padrão e colocando proteção na main
Para configurarmos uma branch como default ou adicionar as regras da main e necessário seguir este caminho após esta com o seu repositório aberto.
```
    Settings -> Branches 
```

Já sobre as rules paras as branches já pré-definidas 


### Pull request
No pull request podemos fazer algumas ações, como enviar feedback, aprovar e requisitar mudanças.

Dica: Quando não tiver nenhuma alteração e costume colocar a seguinte frase para não deixar vazio LGTM e algum ícone de seu gosto

LGTM (Look Good To Me)

### Resolvendo conflitos
Quando haver códigos que podem gerar conflitos, o próprio git irá avisar que você está em conflito e coloca você em uma tela mostrando o código atual  (last committed) e seu código e apresentas algumas opções além de uma interface para facilitar a resolução de conflitos 

### Criando PR's
Para criarmos um PR nos precisamos subir o arquivo usando o push

E na própria tela do repositório ele mostra um alerta para comparar e fazer o PR, se não devemos acessar a area de Pull Request e criar um novo PR.

Nesta parte devemos setar algumas configs, como 

- **branch base**: Que vai receber o conteúdo
- **branch compare**: Que vamos comparar para mandar o conteúdo
- **Pull request name** Nome do PR
- **Pull request description** Descrição do PR

Outras opções
- **Reviewers**: Definir quem irá fazer o review
- **Assignees**: Responsável pelo PR

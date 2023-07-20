## O que é o CSS transition?
So pode usar em propriedades codificáveis como padding, margin, opacity e etc.

### Transition Property
E a propriedade que queremos que irá ter a transição, como por exemplo um background-color

- E para transição funcionar e necessário colocar o seu tempo
- Caso você queira que tanto quando iniciar uma transição e quando voltar tenha uma animação e não seja algo bruto, e necessário que coloque uma transition em ambos os states. 

**ex**:
```css
// para pegar na volta
.box-red{
    background-color: #f00;
    transition: background-color 1s
}

// Para pegar no inicio
.box-red:hover{
    background-color: #ff0;
    transition: background-color 5s
}
```

Quando você tem mais de uma propriedade que deseja adicionar no transition você pode usar a shortcut passando como paramento de pro property (`all`) Ou da maneira abaixo:

```css
.box-red{
    background-color: #f00;
    transition-property: background-color, width;
    transition-duration: 1s;
}
```


### Transition Timing Function
São as props de cubic-bezier aonde temos algumas ja definidas definidas mas temos algumas outras ja no próprio css. Para acessar basta apenas digitar o nome na shortcut ou usando a propriedade abaixo:

```css
.box-red{
    transition-timing-function: value;
}
```

Os valores aceitos nessa propriedades são muitos, mas aqui tem um pequeno resumo das principais ja implementa no próprio CSS.

- **ease:** Início lento, rápido e final lento (este é o padrão)  
- **linear:** Mesma velocidade do início ao fim  
- **easy-in:** Início lento
- **easy-out:** Final lento  
- **easy-in-out:** Início e fim lentos  
- **cubic-bezier(n,n,n,n):** Permite definir seus próprios valores em uma função cubic-bezier  


### Transition Delay
Como o nome da propriedade ja sugeri e a maneira que temos para colocar o delay de um transition então você pode montar sua transição da maneira que gostar, porém se colocar a prop `transition-delay` ela so irá iniciar a sua animação após determinado tempo de delay.

```css
    .box-red{
    transition-delay: value;
}
```

### O que é CSS animation?
Maneira que criamos animações sem que o usuário veja ou sem que o usuário interagir


### Animation name e duration
Para criarmos uma animação usando uma prop chamada `@keyframes name{}` aonde o **name** será o nome e dentro dessa estrutura a codificação da nossa animação.

Temos algumas maneiras de trabalhar os estados da animação, um dos mais famosos e o **from** (`de`) **to** (`para`) ex:

```css
@keyframes exampleOne {
    from {
        background-color: violet;
    }

    to{
        background-color: pink;
    }
}
```

Porém para aplicarmos essa animação a algum objeto e necessário chamar e passar pelo menos duas props (`E possível usar a shortcut para encurtar o código`)
```css
    .box-red{
    animation-name: exampleOne;
    animation-duration: 4s
}
```

### Keyframes com porcentagem

Há uma outra maneira de definir os pontos da animação tirando o (`from, to`) que é usando as porcentagens

```css
@keyframes exampleTwo {
    0%{
        background-color: violet;
    }

    25%{
        background-color: pink;
    }

    50%{
        background-color: yellow;
    }

    75%{
        background-color: orange;
    }

    100%{
        background-color: red;
    }
}
```

### Animation delay
Mesma ideia do `transition-delay`, ele so irá iniciar a animação após o tempo de delay for concluído ex:
```css
    .box-red{
    animation-name: exampleOne;
    animation-duration: 4s;
    animation-delay: 3s;
}
```


### Animation iteration count
E a quantidade de vezes que uma animação vai ocorrer ex:
```css
    .box-red{
    animation-name: exampleOne;
    animation-duration: 4s;
    animation-delay: 3s;
    animation-iteration-count: 2;
}
```

OBS: O delay não funciona se houver mais de uma vez, apenas no primeiro start da animação, A solução caso precise e adicionar em alguma parte do @keyframes a prop de delay.



### Animation direction
Essa prop nos permite trabalhar com a direção da animação e existem para ela alguns valores ja pré-definidos.

- **normal:** `começa pela primeira chave do @keyframes e vai ate a última`, se o iteration count estiver setado, no momento de repetir, será também da primeira chave do @keyframes ate a ultima
- **reverse:** `começa pela última chave do @keyframes e vai ate a primeira`, se o iteration count estiver setado, no momento de repetir, será também da última chave do @keyframes ate a primeira.
- **alternate:** `começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será da última chave do @keyframes ate a primeira, e na próxima repetição volta a ser da primeira chave para a última e assim por diante alternando`.
- **alternate-reverse:** `começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será da primeira chave do @keyframes ate a última, e na próxima repetição volta a ser da última chave para a primeira e assim por diante alternando`.


### Animation Timing Function
Mesma ideia e funções do transition, abaixo vai ter uma colinha sobre o que cada prop faz:

- **ease**: Início lento, rápido e final lento (este é o padrão)
- **linear**: Mesma velocidade do início ao fim
- **easy-in**: Início lento
- **easy-out**: Final lento
- **easy-in-out**: Início e fim lentos


### Animation fill mode
E a propriedade que definimos se  o nosso elemento ele vai manter as estilizações setadas no meio da animação

```css
.box-red{
    animation-name: exampleOne;
    animation-duration: 4s;
    animation-delay: 3s;
    animation-iteration-count: 2;

    animation-fill-mode: forwards;
}
```

No caso o `forwards` vai preservar os estilos da animação, sua outra variação e o `backwards` e mesma ideia mas ele vai priorizar a estilização da primeira chave do keyframe e não vai preservar.

E por último temos o `both` ele vai rodar com o inicio do keyframes e depois ele preservar os estilos da ultima chave.
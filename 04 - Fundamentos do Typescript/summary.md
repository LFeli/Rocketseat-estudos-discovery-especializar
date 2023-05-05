## O que é?
Foi criado pela Microsoft, que e nada mais que um superSet, adicionando tipagem ao JS.

### Verificador de tipos estatico.
A vantagem de usarmos o typescript e que no processo de construção de algum código, ele irá nos informas se algo ta errado ou não e muito recomendando.

Por exemplo:
```js
function sum(a, b){
    return a + b;
}
```
A função acima parece certo se pensarmos que o Javascript não utiliza tipagem, porém se rodarmos ela no TS ele irá pedir pra definirmos o tipo da variável, pois pro JS pode ser qualquer coisa. Então para que funcione precisamos fazer desta nameira:
```ts
function sum(a: number, b: number){
    return a + b;
}
```

### Any
`Por padrão no TS quando não dizemos o tipo dela a variável será do tipo any` Mas ao final o que e o any? Será qualquer coisa como funciona no JS.

Porém evite de usar o any, pois querendo ou não perde o sentido de se utilizar o TS.

### Inferência de tipo
No typescript nos podemos atribuir um tipo de dados especifico a uma variável.
```ts
let variable: string;
```

Porém a inferência de tipo e o TS de forma automatica reconhecer o tipo da sua variável.

### Tipos primitivos
- string
- boolean
- number

### Matrizes
E possível definir tipagem para arrays.

```ts
let myArray: number[];

let users: Array<string>;
```

### Funções
Para tiparmos uma função há dois critérios, se a função `não tem um return`, ela será doi tipo void(ele pode ser inferido automaticamente).
```ts
function myFuncution(value: string): void{
    console.log(value)
}
```

Caso ela tenha um return ele poode ser qualquer tipo primitivo:
```ts
function myFuncution(value:number): number{
    return console.log(value)
}
```

Uma terceira maneira de tipar as funções, e deixar o TS inferir automaticamente, porém precisamos tipar variáveis passando na função.

### Union
E possível termos tipos diferentes do mesmo dado, porém como fazemos pro TS aceitar ? E simples, iremos utilizar o operador union `|`
```ts
function exemple(valueID: number | string){
    return valueID;
}

// Dessa maneira ele irá aceitar tanto number quanto string.
exemple(12)
exemple('34')
```


### Generics
Ele e utilizado para deixar a tipagem flexivel, porém sua diferença pro any e que ele define a tipagem em execução. Porém a tipagem que vale e a escolhida no momemnto da declaração.

Antes de definirmos um generics há uma boa pratica. no generics nos colocamos um "apelido" e ja existe alguns padrões que ajudam em sua indentificação.

- S => State
- T => Type
- K => Key
- V => Value
- E => Element

Sua sintaxe padrão e `<L>` **O L representa a letra**. Um exemplo:
```ts
function useState<T>(){
    let state: T;

    function get(){
        return state;
    }

    function set(value: T){
        state = value;
    }

    return{ get, set}
}

// E para usarmos o generics?

// Agora o newStates so aceita valores number.
let newState = useState<number>();
```

E possivel no generics declarar mais de um tipo, como number e string. Porém a sintaxe para declararmos e um pouco diferente.
```ts
function useState<T extends number | string>(){
    // Um codigo bonito aqui.
}

// Agora quando declarar number ou string.
```
Além disso e possível declararmos um tipo padrão quando não informamos.

```ts
function useState<t extends number | string = number>(){
    // Um codigo bonito aqui.
}

// Agora o tipo default quando não for informado e number.
```

### Type
Como podemos reaproveitar tipos em lugares diferentes? Com o Type e possível.`Sempre considere criar tipos com as iniciais Maisculas`

Vamos supor que vc tem duas variáveis que irão receber os mesmos types. Para evitar repetições e dor de cabeça na hora de manutenção nos iremos utilizar o `type`, exemplo logo abaixo:
```ts
type IdType = number | string | undefined;

let userID: IdType;
let adminID: IdType;
```

### Type assertions
E utilizado quando o `TS não sabe a tipagem de um determinado objeto` e você diz para o TS qual e a tipagem correta. `Muito utilizado no consumo de API's`. exemplo:

```ts
type UserResponse = {
    id: number;
    name: number;
    avatar: string;
} // aqui estou usando o type assertions, e dizendo o que é cada tipo

let userResponse = {} as UserResponse // precisa usar o 'as' para funcionar.
```

### Objetos
Para criar tipagem em objetos e um pouco diferente no TS, pois precisamos criar um tipo com os itens que irá receber dentro daquele determinado objeto, além de ja determinar seus tipos.
```ts
type Point = {
    x: number;
    y: number;
}

function printCord(point: Point){ // A variável de parametro e quem recebe os tipos
     console.log(`O eixo X é: ${point.x}`)
     console.log(`O eixo Y é: ${point.y}`)
}
```

Mas puxa e apenas uma variável que está recendo mas são dois valores, como passamos?
```ts
// Necessário passar entre chaves e informando o valor de cada tipo.
printCord({x: 101, y:150})
```

#### Opcional
Em alguns momentos algumas propriedades vão ser opcionais. A sintaxe para deixar opcional e `?:` assim quando criar um novo objeto com um tipo que contém essa notação vai ser totalmente opcinal por ou não. exemplo:
```ts
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}
```

### Interseção de tipos

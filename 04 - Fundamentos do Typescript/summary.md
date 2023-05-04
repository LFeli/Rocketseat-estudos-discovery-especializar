### O que é?
Foi criado pela Microsoft, que e nada mais que um superSet, adicionando tipagem ao JS.

#### Verificador de tipos estatico.
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

#### Any
`Por padrão no TS quando não dizemos o tipo dela a variável será do tipo any` Mas ao final o que e o any? Será qualquer coisa como funciona no JS.

Porém evite de usar o any, pois querendo ou não perde o sentido de se utilizar o TS.
# Sincronismo e Assincronismo 

Sistemas síncrono (synchronous), uma tarefa é concluída após a outra.  
**ex: Uma imagem so vai iniciar um novo carregamento apenas quando a anterior tiver terminado de carregar.**

- Ou seja a tarefa anterior precisa ser concluída para se iniciar a proxima.
- Por padrão o JS ele e um sistema síncrono.

Já sistemas assíncronos (asynchronous), tarefas são executadas de maneira independente uma da outra.

ex: No exemplo das imagens elas seria carregas do modo independente, ou até mesmo no mesmo momento.

- O JS poderá usar o assincronismo ao seu favor.

## Callback conceito
E quando passamos uma função como argumento dentro de outra função é depois ela e chamada de volta.

## SetTimeOut
E uma função que recebe como argumento uma função e o tempo para ser executada, essa função de argumento no caso seria uma callback.

## Promise
A promessa de algo que irá vai acontecer no futuro.

- É um objeto Javascript com a promessa de algo que será realizado.
- É usado para operações assíncrona
  - Carregar um arquivo
  - Leitura de dados via API

Uma promise ela tem 4 estágios, sendo eles:
- **Pending:** Estado inicial, assim que o objeto da promessa é iniciado.
- **Fulfilled:** A promessa foi concluída com sucesso.
- **Rejected:** A promessa foi rejeitada, houve um erro.
- **Settled:** Seja com sucesso ou erro, ela foi finalmente concluída.
# Exercício - Gerenciador de Tasks

O objetivo deste exercício é criar um servidor utilizando **Express** para gerenciar uma lista de tarefas (*tasks*). A lista de tarefas será armazenada em memória e manipulada por meio de duas rotas HTTP: uma para criar novas tarefas e outra para listar as tarefas existentes.

---

## Requisitos

O servidor deve atender aos seguintes requisitos:

### 1. Inicialização da Lista de Tarefas

- O servidor deve possuir uma lista de tarefas (`tasks`) que inicia como um array vazio:
  ```js
  const tasks = [];
### 2. Rotas

### POST /tasks

**Descrição**: Adiciona uma nova tarefa à lista.
- **Body**:
  ```json
  {
    "description": "codar",
    "isChecked": false
  }

 ### GET /tasks
**Descrição**: Retorna a lista de tarefas adicionadas até o momento.

**Resposta**:
Um array contendo todas as tarefas.

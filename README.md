# TodoList Fullstack

Este é um projeto de lista de tarefas (TodoList) com uma aplicação fullstack desenvolvida usando tecnologias como Node.js, Docker, JavaScript, HTML e CSS.

## Funcionalidades

- Adicionar uma nova tarefa à lista.
- Marcar uma tarefa como concluída, em andamento ou pendente.
- Editar o título de uma tarefa.
- Excluir uma tarefa da lista.

## Pré-requisitos

- Node.js (v18.15.0)
- Docker (v23.0.5)
## Configuração

1. Clone the repository:
```
git clone https://github.com/luluoliv/todolist-fullstack.git
```

2. Change into the project directory:
```bash
cd todolist-fullstack
```

3. Build the Docker image:
```bash
docker build -t todolist-app .
```

4. Run the Docker container:
```
docker run -p 3333:3333 -d todolist-app
```
## Usage
- To add a task, enter the title in the input field and click the "Add Task" button.
- To update the status of a task, select the desired status from the dropdown menu in the corresponding task row.
- To edit a task, click the "Edit" button, update the title in the input field, and press Enter.
- To delete a task, click the "Delete" button in the corresponding task row.

## Contributing


## Acknowledgements
This project was developed as part of a learning experience.

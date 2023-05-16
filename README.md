# TodoList Fullstack

This is a to-do list project (TodoList) with a fullstack application developed using technologies such as Node.js, Docker, JavaScript, HTML and CSS.

## Functionalities

- Add a new task to the list.
- Mark a task as completed, in progress or pending.
- Edit the title of a task.
- Delete a task from the list.

## Prerequisites

- Node.js (v18.15.0)
- Docker (v23.0.5)
## Settings

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


## Acknowledgments
This project was developed as part of a learning experience.

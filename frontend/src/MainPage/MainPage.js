import React, { useEffect, useState } from "react";
import "./MainPage.css";

export function MainPage() {
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch("http://localhost:3333/tasks");
        const tasks = await response.json();
        setTasks(tasks);
    };

    const addTasks = async (event) => {
        event.preventDefault();
        const task = { title: inputTask };

        await fetch("http://localhost:3333/tasks", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });

        fetchTasks();
        setInputTask("");
    };

    const deleteTask = async (id) => {
        await fetch(`http://localhost:3333/tasks/${id}`, {
            method: "delete",
        });

        fetchTasks();
    };

    const updateTask = async ({ id, title, status }) => {
        await fetch(`http://localhost:3333/tasks/${id}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, status }),
        });

        fetchTasks();
    };

    const formatDate = (dateUTC) => {
        const options = { dateStyle: "long", timeStyle: "short" };

        const date = new Date(dateUTC).toLocaleString("pt-br", options);
        return date;
    };

    return (
        <main>
            <form className="add-form" onSubmit={addTasks}>
                <input
                    type="text"
                    placeholder="Add task"
                    onChange={(e) => setInputTask(e.target.value)}
                    value={inputTask}
                ></input>
                <button type="submit">+</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Created at</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="task-table">
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{formatDate(task.created_at)}</td>
                            <td>
                                <select
                                    value={task.status}
                                    onChange={(e) =>
                                        updateTask({
                                            id: task.id,
                                            title: task.title,
                                            status: e.target.value,
                                        })
                                    }
                                >
                                    <option value={"pending"}>pending</option>
                                    <option value={"in progress"}>
                                        in progress
                                    </option>
                                    <option value={"completed"}>
                                        completed
                                    </option>
                                </select>
                            </td>
                            <td>
                                <button
                                    className="btn-action"
                                    onClick={() => updateTask(task.title)}
                                >
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </button>
                                <button
                                    className="btn-action"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

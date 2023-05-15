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

        const response = await fetch("http://localhost:3333/tasks", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });

        fetchTasks();
        setInputTask("");
    };

    const deleteTask = async (id) => {
        const response = await fetch(`http://localhost:3333/tasks/${id}`, {
            method: "delete",
        });

        fetchTasks();
    };

    const updateTask = async ({ id, title, status }) => {
        const response = await fetch("http://localhost:3333/tasks", {
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
            <form className="add-form">
                <input type="text" placeholder="Add task"></input>
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
                    {/* <tr>
                        <td>Task title</td>
                        <td>date</td>
                        <td>
                            <select>
                                
                            </select>
                        </td>
                        <td>
                            <button className="btn-action">
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                            <button className="btn-action">
                                <span className="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </main>
    );
}

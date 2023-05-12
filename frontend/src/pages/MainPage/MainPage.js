import React from "react";
import "../MainPage/MainPage.css";
import "../script";

export function MainPage() {
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
                <tbody>
                    <tr>
                        <td>Task title</td>
                        <td>date</td>
                        <td>
                            <select>
                                <option value={"pending"}>hetahht</option>
                                <option value={"in progress"}>ahthate</option>
                                <option value={"completed"}>ahhtht</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn-action">
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                            <button className="btn-action">
                                <span class="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}

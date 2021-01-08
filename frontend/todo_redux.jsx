import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import store from "./store/store";
import {receive_todo, receive_todos} from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    window.store = store();
    window.receive_todo = receive_todo;
    window.receive_todos = receive_todos;
    ReactDOM.render(<Root store={store} />, root);
});

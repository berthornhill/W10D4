import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import configureStore from "./store/store";
import {receive_todo, receive_todos} from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    window.configureStore = configureStore;
    window.receive_todo = receive_todo;
    window.receive_todos = receive_todos;
    ReactDOM.render(<App />, root);
})

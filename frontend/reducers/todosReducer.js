import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions.js";

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_TODOS:
            const newTodos = unpackArray(action.todos);
            // const newState = Object.assign({}, state, newTodos);
            return newTodos;
        case RECEIVE_TODO:
            const newTodo = {[action.todo.id]: action.todo} // why do we need to wrap in [action.todo.id]
            const newState = Object.assign({}, state, newTodo);
            return newState;
        default:
            return state;
        }

}

// [{ id: 1, ...etc }, { id: 2, ...etc }, ...etc]


const unpackArray = function(array) {
    let objects = {};
    
    array.forEach (obj => {
        objects[obj.id] = obj
    }) 

    return objects;
} 

export default todosReducer;

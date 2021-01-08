import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions.js";

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            const newTodos = unpackArray(action.todos);
            const newState = Object.assign({}, state, newTodos);
            return newState;
        case RECEIVE_TODO:
            const newTodo = {[action.todo.id]: action.todo}
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

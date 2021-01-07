import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions.js";

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            const newTodos = {
                [action.id]: { 
                    title: action.title, // consider how to access this info once 'todo' exists
                    body: action.body,
                    done: action.done,
                    id: action.id 
                }
            }
            const newState = Object.assign({}, state, newTodos);
            return newState;
        default:
                return state;
        }

}


export default todosReducer;

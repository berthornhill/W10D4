export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const receive_todos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
    
}

export const receive_todo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo
    };
};


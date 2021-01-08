export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const receive_todos = (todos) => { //user clicks a button to show all the todos or send to index page
    return {
        type: RECEIVE_TODOS,
        todos
    };
};

export const receive_todo = (todo) => {  
    //user is writing on the form to add a new todo => submit || Edit a single todo
    return {
        type: RECEIVE_TODO,
        todo
    };
};


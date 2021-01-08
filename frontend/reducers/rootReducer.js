import todosReducer from "./todosReducer";
import { combineReducers } from "redux"; //method built into redux that manages an object of reducers


const rootReducer = combineReducers({
   todos: todosReducer
})

export default rootReducer;

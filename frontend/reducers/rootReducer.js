import todosReducer from "./todosReducer";
import { combineReducers } from "redux"; //method built into redux that manages an object of reducers


const rootReducer = combineReducers({
   todosReducer: todosReducer
})

export default rootReducer;

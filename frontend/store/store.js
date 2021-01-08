import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';



const configureStore = (state = {}) => {
    const store = createStore(rootReducer, state);
    return store;
    }
export default configureStore;
// 
// const store = createStore(rootReducer);

// export default store;

// obj1 = {id: 1, body: "this"}
// obj2 = {id: 2, body: "this"}
// obj3 = {id: 3, body: "this"}
// obj4 = {id: 4, body: "this"}
// Application reducer

import { initialState } from './index';

const TodoReducer = function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DONE_TODO':
            console.log('DONE_TODO');
            return state;
        case 'DELETE_TODO':
            let tasks = [...state];
            let taskIndex = tasks.indexOf(action.payload);
            tasks.splice(taskIndex, 1);
            return tasks;
        default:
            return state;
    }
}
  
export default TodoReducer;  
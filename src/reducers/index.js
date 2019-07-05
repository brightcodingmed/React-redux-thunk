import { combineReducers } from 'redux';
import todoReducer from './todosReducer/todoReducer';

export default combineReducers({
  myTodos: todoReducer
});

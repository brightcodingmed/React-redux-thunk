const initialState = {
   todos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case 'GET_TODOS':
        return {
          ...state,
          todos: action.payload
        };
      case 'ADD_TODO':
        return {
          ...state,
          todos: [action.payload, ...state.todos]
        }
      default:
        return state;
    }
}
import axios from 'axios';

export const getTodos = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log('result: ', res)
    dispatch({
      type: 'GET_TODOS',
      payload: res.data
    });
  };
  
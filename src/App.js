import React from 'react';
import { Provider } from 'react-redux';
import Todos from './components/todos/Todos';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store';
import './App.css';

function App() {
  return (
  <Provider store={store}>  
    <div className="App">
     <Todos />
    </div>
  </Provider>
  );
}

export default App;

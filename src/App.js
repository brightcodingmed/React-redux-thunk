import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store';
import './App.css';

function App() {
  return (
  <Provider store={store}>  
    <div className="App">
     <button className="btn btn-primary">salam</button> 
    </div>
  </Provider>
  );
}

export default App;

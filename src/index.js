import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TodoList from './todoList';
import reportWebVitals from './reportWebVitals';

var destination = document.querySelector("#container")

ReactDOM.render(

 <div>   
    <TodoList/>
    </div>,
 destination
);


reportWebVitals();

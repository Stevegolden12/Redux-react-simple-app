import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
/* Curly Braces is a part of the library*/
import { createStore } from 'Redux';

const store = createStore(); 

ReactDOM.render(
    <h1>Hello, now!</h1>,
    document.getElementById('root')
);

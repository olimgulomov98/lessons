import React from 'react';
import ReactDOM from 'react-dom/client';
import Class from './Class';
import Functional from './Functional';
import './index'
import Products from './Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Class />
    <Functional />
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import { Controlled } from './Components/Controlled';
import { Parent } from './Components/Parent';
import { Uncontrolled } from './Components/Uncontrolled';
import './index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display: 'flex'}}>
      <Controlled />
      <Uncontrolled />
    </div>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index'
import UseReducer from './UseReducer';
import UseState from './UseState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display: 'flex'}}>
    {/* <UseState /> */}
    <UseReducer />
      
    </div>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button/Button';
import Comp from './Component/Comp';
import Theme from './Theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comp />
    <Button width='150px' color='red'>Login</Button>
    <Button width='300px' color='blue'>Log out</Button>
    <Button width='500px' color='gray'>Log out</Button>
    <Button>Log out</Button>
    <Button bg='crimson' width='100%' color='white'>Register</Button>
    <Theme />
  </React.StrictMode>
);



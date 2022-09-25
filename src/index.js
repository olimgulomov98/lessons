import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Footer from './Footer'
// import {Navbar, Products} from './Navbar'
import Navbar from './Navbar'

const data = [
  {name: 'React', color: 'red'},
  {name: 'html', color: 'black'},
  {name: 'css', color: 'green'},
  {name: 'javascript', color: 'blue'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
        data.map((value) => {
          return (
            <Navbar title={value} />
          )
        })
      }
      {/* <Navbar title={{name: 'React', color: 'red'}} /> */}
      {/* <Navbar title='Html' color='black' /> */}
      {/* <Navbar title='Css' color='blue' bg='green' /> */}
  </React.StrictMode>

  // <React.StrictMode>
  //   <h1>Hello world</h1>
  //   <Navbar />
  //   <Footer />
  //   <Products />
  // </React.StrictMode>
);



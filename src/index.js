import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyApp from './Try';
import Navigation from './components/Nav';
import Quote from './components/QoutesContainer';
import About from './components/Aboutus';
import Footer from './components/Footer';
import Divisions from './components/CollegeDivisions';
import {BrowserRouter} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>


  //   {/* <App/> */}
  //   {/* <MyApp /> */}
  // </React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

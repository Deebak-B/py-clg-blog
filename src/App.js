
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Nav';
import Quote from './components/QoutesContainer';
import Footer from './components/Footer';
import Divisions from './components/CollegeDivisions';
import About from './components/Aboutus';
import Blog from './components/finalBlog';
import EngineeringList from './components/Engineering/EngineeringCollegesList';
import { Login } from './components/Login';
import { Register } from './Register';

// Created Components
function App() {

  return (
<div>
  <Routes>
      <Route path='/' element={
        <React.Fragment>
        <Navigation/>
        <Quote/>
        <About />
        <Divisions/>
        <Footer />
        </React.Fragment>
      }>
      </Route>
{/* Login and Registration Route */}
<Route path='/login' element={
        <Login/>  
}>
</Route>

<Route path='/register' element={
  <Register/>
}></Route>

      <Route path='/test' element={
        <Blog/>
      }> </Route>
      
      <Route path='/engineering' element={
      <React.Fragment>
        <Navigation/>
        <EngineeringList/>
      </React.Fragment>
      }>

      </Route>
  </Routes>

</div>
  );
}

export default App;

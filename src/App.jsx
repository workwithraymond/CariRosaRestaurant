import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Main from './components/AddMenu/Main';
import MainMenu from './components/MainMenu';
import ContactPage from './components/ContactPage';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './index.css';
import './App.css';

function App() {
  

  return (
    <>

    <Router>
      
    <Navbar/>  
      <Routes>

      <Route path = '/' element= {<Home/>} />
     <Route path = '/' element= {<About/>} />
     <Route path = '/main' element= {<Main/>} />
     <Route path = '/mainmenu' element= {<MainMenu/>} />
     <Route path = '/contact' element= {<ContactPage/>} />
     <Route path = '/reviews' element= {<Reviews/>} />
     <Route path = '/footer' element= {<Footer/>} />  
      </Routes>
     
      
      
      
      
      

    </Router>
     

     
    </>
    
      

   
  )
}

export default App

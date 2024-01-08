import React from 'react';

import Menu from './components/NewMenu'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './index.css';
import './App.css';

function App() {
 

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <ContactPage/>
      <Reviews/>
      <Footer/>

    </div>
  )
}

export default App

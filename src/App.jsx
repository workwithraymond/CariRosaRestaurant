import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
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

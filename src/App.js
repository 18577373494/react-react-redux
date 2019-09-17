import React from 'react';
import logo from '@/logo.svg';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import {Component} from 'react'
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
  
}

export default App;

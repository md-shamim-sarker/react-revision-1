import React from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;

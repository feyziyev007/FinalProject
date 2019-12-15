import React from 'react';
import './App.css';
import PageCart from './Components/PageCart';
import PageHP from './Components/PageHP';
import PagePDP from './Components/PagePDP';
import PagePLP from './Components/PagePLP';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <PageHP />
      {/* <PageCart />
      <PagePDP />
      */}
        <PagePLP />
        <Footer />
    </div>
  );
}

export default App;

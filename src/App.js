import React from 'react';
import './App.css';
import PageCart from './Components/PageCart';
import PageHP from './Components/PageHP';
import PagePDP from './Components/PagePDP';
import PagePLP from './Components/PagePLP';

function App() {
  return (
    <div>
      <PageHP />
      <PageCart />
      <PagePDP />
      <PagePLP />
    </div>
  );
}

export default App;

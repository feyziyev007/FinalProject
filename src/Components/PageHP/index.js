import React from 'react';
import style from './style.scss';
import Header from '../Header/index';
import Slider from './Components/Slider/Slider';
import ProductList from './Components/ProductList/ProductList';
import Footer from '../Footer/index';

export default class PageHP extends React.Component {
  render() {
    return (
      <section class="page-hp">
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </section>
    );
  }
}

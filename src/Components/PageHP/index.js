import React from 'react';
import style from './style.scss';
import Slider from './Components/Slider/Slider';
import ProductList from './Components/ProductList/ProductList';

export default class PageHP extends React.Component {
  render() {
    return (
      <section class="page-hp">
        <Slider />
        <ProductList />
      </section>
    );
  }
}

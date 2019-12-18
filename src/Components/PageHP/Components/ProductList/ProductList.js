import React from 'react';
import style from './style.scss';
import ProductCard from './ProductCard/ProductCard';

export default class ProductList extends React.Component {
  render() {
    const products = [
      {
        id: 1,
        category: 'men',
        fit: 'skinny',
        brand: 'buffalo',
        description: 'a superb pair of jeans',
        price: 200,
        color: 'black',
        size: '28',
        images: ['img/products/women/skinny/001.png'],
        date: '2019-12-15'
      },
      {
        id: 2,
        category: 'women',
        fit: 'skinny',
        brand: 'buffalo',
        description: 'a superb pair of jeans',
        price: 200,
        color: 'black',
        size: '28',
        images: ['img/products/women/skinny/001.png'],
        date: '2019-12-15'
      },
      {
        id: 3,
        category: 'accessory',
        fit: 'skinny',
        brand: 'buffalo',
        description: 'a superb pair of jeans',
        price: 200,
        color: 'black',
        size: '28',
        images: ['img/products/women/skinny/001.png'],
        date: '2019-12-15'
      }
    ];

    return (
      <div className="ProductList">
        <div className="row">
          {products.map(item => (
            <ProductCard imgUrl={item.images[0]} imgCategory={item.category} />
          ))}
        </div>
      </div>
    );
  }
}

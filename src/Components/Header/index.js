import React from 'react';
import style from './style.scss';
import logo from '../../logo.svg';
import cart from '../../cart.svg';
// import Category from './Components/index';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    const Datas = [
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
      <section className="header ">
        <section className="container">
          <header className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <div className="header-left d-flex justify-content-start header-logo">
                {/* {Datas.map(item => {
                return <Category title={item.category} />;
              })} */}
                <a href="#">
                  <img src={logo}></img>
                </a>
              </div>
            </Link>

            <div className="header-right d-flex justify-content-end">
              <Link to="/list">
                <a href="#">
                  <img src={cart}></img>
                  Shop List
                </a>
              </Link>{' '}
              <Link to="/cart">
                <a href="#">
                  <img src={cart}></img>
                  Shopping Bag
                </a>
              </Link>
            </div>
          </header>
        </section>
      </section>
    );
  }
}

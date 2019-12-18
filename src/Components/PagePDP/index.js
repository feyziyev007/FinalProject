import React from 'react';
import style from './style.scss';
import SomeData from "../PagePDP/Components/index";
import Category from "../Header/Components";

export default class PagePDP extends React.Component {
  render() {
    const Data=[
      {
        id: 1,
        description:'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm. FREE STANDARD SHIPPING ON ORDERS OVER £100',
        category: 'women',
        brand: 'buffalo',
        title: 'converse sherp bomber jacket',
        price: '420$',
        color: 'black',
        size: '8',
        url: ['https://via.placeholder.com/500'],
        date: '2019-12-15'
      },
      {
        id: 2,
        description:'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm. FREE STANDARD SHIPPING ON ORDERS OVER £100',
        category: 'women',
        brand: 'buffalo',
        title: 'converse sherp bomber jacket',
        price: '420$',
        color: 'brown',
        size: '8',
        url: ['https://via.placeholder.com/500'],
        date: '2019-12-15'
      },
      {
        id: 3,
        description:'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm. FREE STANDARD SHIPPING ON ORDERS OVER £100',
        category: 'women',
        brand: 'buffalo',
        title: 'converse sherp bomber jacket',
        price: '420$',
        color: 'black',
        size: '8',
        url: ['https://via.placeholder.com/500'],
        date: '2019-12-15'
      }
    ]

    return (
        <div className="container">
          <div className=" row ">
            <div className="  ">
              {Data.map(item => {
                return <SomeData title={item.title} brand={item.brand} color={item.color} price={item.price} size={item.size} image={item.url} description={item.description}/>;
              })}
            </div></div></div>
    )
  }
}

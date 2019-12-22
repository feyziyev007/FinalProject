import React from 'react';
import style from './style.scss';

class Product extends React.Component {
  render() {
    const {
      img,
      id,
      description,
      color,
      size,
      category,
      fit,
      price,
      brand,
      class_name
    } = this.props;
    console.log(this.props);
    return (
      <div className="product">
        <img
          src={`${img}`}
          width="250px"
          height="500px"
          className="clothes__img"
        />
        <label className={class_name}>Jeans for {category}</label>
        <label className={class_name}>Color: {color}</label>
        <label className={class_name}>Brand: {brand}</label>
        <label className={class_name}>Price: ${price}</label>
      </div>
    );
  }
}

export default Product;

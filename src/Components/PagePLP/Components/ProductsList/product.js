import React from "react";
import style from './style.scss';

class Product extends React.Component {
  render(){
    const {img, description, color, size, category,fit,price,brand, class_name} = this.props;
    console.log(this.props);
    return (<div className='product'>
        <label className={class_name}>for {category}</label>
        <label className={class_name}>{color}</label>
        <label className={class_name}>${price}</label>
      <img src={`${img}`} width='300px' height='600px'/>
    </div>);
  }
}

export default Product;
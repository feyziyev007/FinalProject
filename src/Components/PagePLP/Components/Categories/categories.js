import React from "react";
import style from './style.scss';

class Categories extends React.Component {
  render(){
    const {category,size,brand, class_name} = this.props;
    console.log(this.props);
    return <label className={class_name}>{category}{size}{brand}</label>;
  }
}

export default Categories;
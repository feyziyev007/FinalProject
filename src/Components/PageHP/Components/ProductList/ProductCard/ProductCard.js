import React from 'react';
import style from './style.scss';

export default class ProductCard extends React.Component {
  render() {
    const { imgUrl, imgCategory } = this.props;
    console.log(this.props);

    return (
      <div className="col-4">
        <div class="card">
          <img src={imgUrl} class="card-img-top" alt="..." />
          <div class="card-body">{imgCategory}</div>
        </div>
      </div>
    );
  }
}

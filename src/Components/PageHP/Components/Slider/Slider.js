import React from 'react';
import style from './style.scss';

export default class Slider extends React.Component {
  render() {
    return (
      <div class="">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../img/PageHP/hp-slider-1.png" class="d-block w-100" />

              <div class="carousel-caption d-none d-md-block">
                <h2>New Collection</h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../img/PageHP/hp-slider-2.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>END-OF-SEASON SALE</h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../img/PageHP/hp-slider-3.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>ENJOY 70% OFF</h2>
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import style from './style.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <section class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-title">HELP</div>
            <div class="col-md-4 footer-title">FOLLOW US</div>
            <div class="col-md-4 footer-title">COMPANY</div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <ul class="footer-ul">
                <li>
                  <a href="#">Frequently asked questions</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">How to purchase</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="footer-ul">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="footer-ul">
                <li>
                  <a href="#">History of the brand</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Work with Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

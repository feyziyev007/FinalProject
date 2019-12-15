import React from 'react';
import style from './style.scss';

export default class Category extends React.Component {
  render() {
    const { title } = this.props;
    console.log(this.props);

    return (
      <div>
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {title}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">
              Action
            </a>
          </div>
        </div>
      </div>
    );
  }
}

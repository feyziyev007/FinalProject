import React from 'react';
import style from './style.scss';

export default class Category extends React.Component {
  render() {
    const { title } = this.props;
    console.log(this.props);

    return (
      <div>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {title}
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
          </div>
        </div>
      </div>
    );
  }
}

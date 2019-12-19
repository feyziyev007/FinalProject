import React from 'react';
import styles from './styles.scss';

export default class ListItem extends React.Component {
  render() {
    const { categoryName, class_name } = this.props;

    return <li className={class_name}>{categoryName}</li>;
  }
}

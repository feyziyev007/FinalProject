import React from 'react';
import styles from './styles.scss';

export default class ListItem extends React.Component {
  render() {
    const { title, class_name } = this.props;

    return <li className={class_name}>{title}</li>;
  }
}

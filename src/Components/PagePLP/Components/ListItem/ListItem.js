import React from 'react';
import styles from './styles.scss';

export default class ListItem extends React.Component {
  render() {
    const { listName, class_name } = this.props;

    return <input type="checkbox" placeholder={`${listName}`}/>;
  }
}

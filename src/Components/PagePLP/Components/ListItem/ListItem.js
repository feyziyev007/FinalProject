import React from 'react';
import styles from './styles.scss';

export default class ListItem extends React.Component {
    render() {
        const {listName} = this.props;

        return (<div className='categoriesList__item'>
            <label for={`${listName}`} className='categoriesList__item__p' >{listName}</label>
            <input type="checkbox" id={`${listName}`}/>
        </div>);
    }
}

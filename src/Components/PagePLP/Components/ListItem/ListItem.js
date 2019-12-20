import React from 'react';
import styles from './styles.scss';

export default class ListItem extends React.Component {
    render() {
        const {listName} = this.props;

        return (<div className='categoriesList__item'>
            <p className='categoriesList__item__p' >{listName}</p>
            <input type="checkbox" placeholder={`${listName}`}/>
        </div>);
    }
}

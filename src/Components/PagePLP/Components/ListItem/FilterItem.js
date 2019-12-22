import React from 'react';
import styles from './styles.scss';

export default class FilterItem extends React.Component {
    render() {
        const {listName, onChangeHeandler } = this.props;

        return (
        <div className='categoriesList__item'>
            <label for={`${listName}`} className='categoriesList__item__p' >
                {listName}
            </label>
            <input type="radio" name="." id={`${listName}`} onChange={()=>onChangeHeandler()}/>

        </div>
        );
    }
}

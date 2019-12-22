import React from 'react';
import style from './style.scss';
import { connect } from 'react-redux';
import {setItemsAction} from "../../../actions/productAction";
class SomeData extends React.Component {
    state = {
        quantity: 0,
    };

    render() {
        const { fit, image, description, title, color, price, size, brand } = this.props;

        return (
            <form className="card-details">
                <div className="card-details clearfix">
                    <img className="rounded float-left col-md-6 col-lg-6 col-xs-6 " src={`${image}`}/>
                    <div className="details-card-body float-right col-md-6 col-lg-6 col-xs-6">
                        <h5 className="card-title text-capitalize mt-5">
                            {title}
                        </h5>
                        <h2 className="card-text font-weight-bold text-capitalize">
                            {price}
                        </h2>
                        <span className="font-weight-bold">
                            Choose your fav color:
                        </span>
                        <div className="available-color rounded-circle" style={{backgroundColor: `${color}`}}/>
                        <p className="card-text font-weight-bold text-capitalize ">
                            Brand: {brand}
                        </p>
                        <p className="card-text font-weight-bold text-capitalize ">
                            Fit: {fit}
                        </p>
                        <span className="font-weight-bold">
                            Available sizes:
                        </span>
                        <p className="font-weight-bold ">
                            {size}
                        </p>
                        <span className="font-weight-bold">
                            Quantity:
                        </span>
                        <input
                            type="number"
                            required min="1"

                            onChange={(event)=>{this.setQuantity(event)}}
                        />
                        <p className="card-text ">{description}</p>

                        <button className="btn btn-dark"
                                onClick={(event)=>{this.submitHandler(event)}}
                        >
                            Add to basket
                        </button>
                    </div>
                </div>
            </form>
        );
    }

    setQuantity(event) {
        event.preventDefault();

        this.setState({ quantity: event.target.value })
    }

    submitHandler(event) {
        event.preventDefault();

        const { itemsFromBasket, onSetItems, ...itemBaseInfo} = this.props;
        const itemInfo = Object.assign(
            {},
            itemBaseInfo,
            {quantity: this.state.quantity}
        );

        this.props.onSetItems([itemInfo])
    }
}

const mapStateToProps = store => {
    console.log('SomeData STORE = ', store);
};

const mapDispatchToProps = dispatch =>{
    return{
        onSetItems: (items)=> dispatch(setItemsAction(items))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SomeData);

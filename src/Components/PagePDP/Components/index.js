import React from 'react';
import style from './style.scss';
import { connect } from 'react-redux';
import {setItemsAction} from "../../../actions/productAction";
import {Link} from "react-router-dom";

class SomeData extends React.Component {

    state = {
        quantity: 0,
    };

    render() {
        const { fit, image, description, title, color, price, size, brand } = this.props;

        return (
            <form className="card-details">
                <div className="card-details clearfix">
                    <img className="mt-5 rounded float-left col-sm-12 col-md-12 col-lg-6 col-xs-12 " src={`${image}`}/>
                    <div className="details-card-body float-right col-sm-12 col-md-12 col-lg-6 col-xs-12">
                        <h5 className="card-title text-capitalize mt-5">
                            {title}
                        </h5>
                        <h2 className="card-text font-weight-bold text-capitalize">
                            price: $ {price}
                        </h2>



                        <div className="available-color rounded-circle" style={{backgroundColor: `${color}`}}/>
                        <p className="card-text font-weight-bold text-capitalize ">
                            Brand: {brand}
                        </p>
                        <p className="card-text font-weight-bold text-capitalize ">
                            Fit: {fit}
                        </p>

                        <span className="font-weight-bold">
                            Size:
                        </span>

                        <p className="font-weight-bold ">
                            Available sizes:  {size}
                        </p>
                        <span className="font-weight-bold">
                            Quantity:
                        </span>
                        <input className="form-control col-xs-1 col-sm-4 col-md-4 col-lg-4"
                            type="number"
                            required min="1"

                            onChange={(event)=>{this.setQuantity(event)}}
                        />
                        <Link to='/form'>
                            <button className="btn btn-dark mt-3"
                                >
                            Add to basket
                        </button>
                        </Link>
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

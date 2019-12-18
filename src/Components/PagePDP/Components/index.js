import React from 'react';
import style from './style.scss';

export default class SomeData extends React.Component {
    render() {

        const { image,description,title, color, price,size,brand } = this.props;
        console.log(this.props);

        return (

            <div className="card-details ">
                <img className="rounded " src={image}/>
                <div className="card-body ">
                    <h5 className="card-title text-capitalize">{title}</h5>
                    <p className="card-text font-weight-bold text-capitalize">{price}</p>
                    <p className="card-text font-weight-bold text-capitalize">{color}</p>
                    <p className="card-text font-weight-bold text-capitalize ">{brand}</p>
                    <div className="sizes row ">
                        <p className="font-weight-bold ml-3">{size}</p>
                    </div>
                    <h6 className="details font-weight-bold"></h6>
                    <p className="text-secondary">
                    </p>
                    <p className="card-text ">{description}</p>
                    <a href="#" className="btn btn-dark">Add To Basket</a>
                </div> </div>
        );
    }
}

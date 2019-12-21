import React, {useEffect, useState} from 'react';
import style from './style.scss';
import SomeData from "../PagePDP/Components/index";
import Category from "../Header/Components";

export default class PagePDP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            product: []
        }
    }

    componentDidMount() {
        const getData = async () => {
            await fetch("https://my-json-server.typicode.com/nianman/json-mock2/products")
                .then(result => result.json())
                .then(product => {
                    this.setState({
                        ...this.state,
                        isLoaded: true,
                        product: product
                    })
                })
        };
        getData();
    }

    render() {

        let chosenElement = this.state.product.filter(product => {
            console.log('SLK product = ', product.id, this.props.match.params.id);

            return product.id.toString() === this.props.match.params.id
        });
        console.log('chosenElement', chosenElement);

        // const chosenElement = this.state.product.forEach(product => {
        //     if (product.id === this.props.match.id){
        //         return product.id;
        //     }
        // });

        //
        // const arr = [{id: 10, name:'10'}, {id: 20, name: '20'}, 5986, 30, 415611, 583];
        // //
        //
        // const arr2 = arr.filter(
        //     item=> {
        //         if(item.id % 10 === 0 ) {
        //             return true;
        //         }
        //     });
        //
        // console.log('filtering = ', arr2);

        return (
            <div className="container ">
                <div className=" row">
                    <SomeData
                        id={this.state.product.id}
                        fit={this.state.product.fit}
                        title={this.state.product.title}
                        brand={this.state.product.brand}
                        color={this.state.product.color}
                        price={this.state.product.price}
                        size={this.state.product.size}
                        image={this.state.product.images}
                        description={this.state.product.description}
                    />}
                </div>
            </div>
        );
    }
}


// let data=[
//   {
//     id: 1,
//     description:'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm. FREE STANDARD SHIPPING ON ORDERS OVER £100',
//     category: 'women',
//     brand: 'CONVERSE',
//     fit:'straight',
//     title: 'converse sherp bomber jacket',
//     price: '420$',
//     color: '#d9b38c',
//     size: '8',
//     images: ['https://www.fillmurray.com/500/500'],
//     date: '2019-12-15'
//   },
//   {
//     id: 2,
//     description:'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm. FREE STANDARD SHIPPING ON ORDERS OVER £100',
//     category: 'men',
//     brand: 'CONVERSE',
//     fit:'skinny',
//     title: 'converse sherp bomber jacket',
//     price: '420$',
//     color: '#d9b38c',
//     size: '10',
//     images: ['https://picsum.photos/500'],
//     date: '2019-12-15'
//   },
//   {
//     id: 3,
//     description:'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm. FREE STANDARD SHIPPING ON ORDERS OVER £100',
//     category: 'women',
//     brand: 'CONVERSE',
//     fit:'oversize',
//     title: 'converse sherp bomber jacket',
//     price: '420$',
//     color: '#d9b38c',
//     size: '8',
//     images: ['https://picsum.photos/500'],
//     date: '2019-12-15'
//   }
// ]

// data = [
//   {
//     id: 1,
//     description:'Mouton coat made of 100% sheepskin leather. Straight cut, collar with adjustable hood, front zip fastening, long sleeves and an adjustable hem. The back length for size M is 61,9 cm. FREE STANDARD SHIPPING ON ORDERS OVER £100',
//     category: 'women',
//     brand: 'CONVERSE',
//     fit:'straight',
//     title: 'converse sherp bomber jacket',
//     price: '420$',
//     color: '#d9b38c',
//     size: '8',
//     images: ['https://www.fillmurray.com/500/500'],
//     date: '2019-12-15'
//   }]

//     return (
//         <div className="container ">
//             <div className=" row">{
//               data.map((item,id) => {
//                 return <SomeData
//                     fit={item.fit}
//                     title={item.title}
//                     brand={item.brand}
//                     color={item.color}
//                     price={item.price}
//                     size={item.size}
//                     image={item.images}
//                     description={item.description}
//                 />;
//               })}
//             </div>
//         </div>
//
//     )
//   }
// }
// const a = fetch(
//     'https://my-json-server.typicode.com/nianman/json-mock2/products'
// ).then(res => console.log(res.json()));
// console.log(a);

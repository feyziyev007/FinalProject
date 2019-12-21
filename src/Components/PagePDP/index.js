import React, {useEffect, useState} from 'react';
import style from './style.scss';
import SomeData from "../PagePDP/Components/index";
import Category from "../Header/Components";

export default class PagePDP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            product: [],
        }
    }

    componentDidMount() {
        const getData = async () => {
            await fetch("https://my-json-server.typicode.com/nianman/json-mock2/products")
                .then(result => result.json())
                .then(product => {
                    console.log('SLK product = ', product);
                    this.setState({
                        isLoaded: true,
                        product: product
                    })
                })
        };

        getData();
    }

    render() {


        let chosenElement = this.state.product.find(product => {
            return product.id.toString() === this.props.match.params.id
        });

        console.log('SLK chosen element === ', chosenElement);
        return (
            <div className="container ">
                <div className=" row">
                    {this.state.isLoaded ? <SomeData
                        id={chosenElement.id}
                        fit={chosenElement.fit}
                        title={chosenElement.title}
                        brand={chosenElement.brand}
                        color={chosenElement.color}
                        price={chosenElement.price}
                        size={chosenElement.size}
                        image={chosenElement.images}
                        description={chosenElement.description}
                    /> : null}
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

import React, { useState } from 'react';
import './List.css';

import Product from '../Product/Product';


const List = ({addItemToCart}) => {

    const [data, setData] = useState(null)

    React.useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setData(data)
             
            })
    }, [])

    return (
        <div className="each-item-wrapper">
            {
                data && data.products.map((eachItem, index) => {
                    return <Product item={eachItem} key={index} addItemToCart={addItemToCart} />
                })
            }
         
        </div>
    )
}
export default List;
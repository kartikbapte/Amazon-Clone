import React from 'react'
import './Cart.css';
import {Link, NavLink} from 'react-router-dom'
import ShoppingBasketIcon  from "@mui/icons-material/ShoppingBasket"

// import { CartContext } from '../../context/cartContext';

function Cart({cartValue}) {
    // let value = React.useContext(CartContext)
   
    return (
            <Link to="/" className="headerLink">
                <div className="headerOption_Basket">
                    <ShoppingBasketIcon />
                    <span className="headerOption_two bakestCount">{cartValue.length}</span>
                </div>
            </Link> 
    );
}

export default Cart;  
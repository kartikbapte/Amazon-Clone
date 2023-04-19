import "./Header.css"
import {Link, NavLink} from 'react-router-dom'
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
// import ShoppingBasketIcon  from "@mui/icons-material/ShoppingBasket"
import { useNavigate } from 'react-router-dom';
// import { CartContext } from "../../context/CartContext";
import React, {useState} from "react";
import List from "../../components/List/List"
import Cart from "../../components/Cart/Cart"
import Front from "../../components/Front/Front";



const Header = () => {
  const [cartValue, setCartValue]=useState([]);
  const addItemToCart = (selectProduct) =>{
    setCartValue([...cartValue, selectProduct])
  }
  // let value = React.useContext(CartContext)
  const navigate1 = useNavigate();
    return (
        <div>
        <nav className='header'>
         <div className='header_Top'>
           <div className='header_left_nav'>
             <MenuIcon/>
           </div>
           <Link to='/'>
            <img className="logo" src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
           </Link>
           <div className="headerSearch">
            <input type="search" className="headerSearch_input"/>
            <SearchIcon className="headerSearchIcon"/>
           </div>
           <div className="headerNavbar">
            {/* signin/signout */}
               <Link to="/" className="headerLink">
                <div class="headerOptions"></div>
                <span className="headerOption_one">Hello</span>
                <span className="headerOption_two">User</span>
               </Link>
               {/* Return order */}
               <Link to="/" className="headerLink">
                <div class="headerOptions"></div>
                <span className="headerOption_one">Return</span>
                <span className="headerOption_two">Order</span>
               </Link>
               {/* Prime */}
               <button  type="submit" value="Submit" class="headerOption"  onClick={()=>navigate1('/')}>Sign out</button>
                {/* <div class="headerOptions"></div>
                <span className="headerOption_one">Try</span>
                <span className="headerOption_two">Prime</span> */}
               {/* </Link> */}
               {/* Profile */}
               <Link to="/" className="headerLink">
                <div class="headerOptions"></div>
                <span className="headerOption_one">Your</span>
                <span className="headerOption_two">Profile</span>
               </Link>
               {/* basket */}
               {/* <Link to="/" className="headerLink">
                <div className="headerOption_Basket">
                    <ShoppingBasketIcon />
                    <span className="headerOption_two bakestCount">4</span>
                </div>
               </Link> */}
               <Cart cartValue={cartValue} />
                   {/* <Link to="/Cart" className="cart-wrapper">
            <img src="https://vectorified.com/images/amazon-shopping-cart-icon-9.png" alt="cart-img" />
            <span>{value.cartValue.length}</span>
                  </Link> */}
           </div>
         </div>
        </nav>
        {/* <NavLink to='/list'>Product List</NavLink> */}
        <Front />
        <List addItemToCart={addItemToCart} />
     
       </div>
    );
}

export default Header;
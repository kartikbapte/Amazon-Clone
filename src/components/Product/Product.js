import React from 'react';
import './Product.css';
// import { CartContext } from '../../context/CartContext';

function Product({item,addItemToCart}) {

  
    return (
      <div className="each-item">
      <div className="img-wrapper">
          <img src={item.images[0]} alt="product-img" />
      </div>
      <div className="content-wrapper">
          <h3 className="brand-name">{item.title}</h3>
          <h4 className="brand-desc"> {item.description}</h4>
          <h5>
              <span className="b-d-price">Rs. {item.price}</span>
              {/* {item.discountDisplayLabel ? <span className="b-price">Rs. {item.mrp}</span> : null}
              <span className="b-discount">{item.discountDisplayLabel}</span> */}
          </h5>
          <button
              // className={`add-to-cart-btn ${added ? 'disabled' : ''}`}
             
              onClick={addItemToCart}
              // disabled={added}
              className="add-to-cart-btn"
              >Add to Cart</button>
      </div>
  </div> 
    )
}

export default Product;
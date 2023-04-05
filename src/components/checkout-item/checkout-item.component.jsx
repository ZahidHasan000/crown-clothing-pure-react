import React from 'react';
import { connect } from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem
} from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);


// import React from "react";

// //Remove items from cart
// import { connect } from "react-redux";
// //Remove items from cart
// // import { clearItemFromCart } from "../../redux/cart/cart.actions";

// // Remove items at checkout(increase or decrease checkout page quantity) after(cart.utils.js)
// import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

// import './checkout-item.styles.scss'

// // const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
// //     <div className="checkout-item">
// //         <div className="image-container">
// //             <img src={imageUrl} alt="item" />
// //         </div>
// //         <span className="name">{name}</span>
// //         <span className="quantity">{quantity}</span>
// //         <span className="price">{price}</span>
// //         <span className="remove-button">&#10006;</span>
// //     </div>
// // );

// //Remove items from cart
// // const CheckoutItem = ({ cartItem, clearItem }) => {

// // Remove items at checkout(increase or decrease checkout page quantity) after(cart.utils.js)
// const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

//     const { name, imageUrl, price, quantity } = cartItem

//     return (
//         <div className="checkout-item">
//             <div className="image-container">
//                 <img src={imageUrl} alt="item" />
//             </div>
//             <span className="name">{name}</span>
//             {/* <span className="quantity">{quantity}</span> */}

//             {/* Remove items at checkout(increase or decrease checkout page quantity) */}
//             {/* <span className="quantity">
//                 <div className="arrow">&#10094;</div>
//                 <span className="value">{quantity}</span>
//                 <div className="arrow">&#10095;</div>
//             </span> */}

//             {/* Remove items at checkout(increase or decrease checkout page quantity) after(cart.utils.js) */}
//             <span className="quantity">
//                 <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
//                 <span className="value">{quantity}</span>
//                 <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
//             </span>

//             <span className="price">{price}</span>
//             <span className="remove-button" onClick={() => clearItem(cartItem)}>
//                 &#10006;
//             </span>
//         </div>
//     );
// };

// //Remove items from cart
// const mapDispatchToProps = dispatch => ({
//     clearItem: item => dispatch(clearItemFromCart(item)),

//     // Remove items at checkout(increase or decrease checkout page quantity) after(cart.utils.js)
//     addItem: item => dispatch(addItem(item)),
//     removeItem: item => dispatch(removeItem(item))
// });

// //Remove items from cart
// export default connect(null, mapDispatchToProps)(CheckoutItem);

// // export default CheckoutItem;
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// import React from "react";

// import { connect } from "react-redux";

// //user selector
// import { createStructuredSelector } from "reselect";

// //(Modify after App js)reason for checkout page
// import { withRouter } from "react-router-dom";

// import CustomButton from "../custom-button/custom-button.component";

// import CartItem from "../cart-item/cart-item.component";

// //another selector
// import { selectCartItems } from "../../redux/cart/cart.selectors";

// //Dispatch Action Shorthand(cart-item replace the chekout page)
// import { toggleCartHidden } from '../../redux/cart/cart.actions'

// import './cart-dropdown.styles.scss';

// // const CartDropdown = () => (
// //     <div className="cart-dropdown">
// //         <div className="cart-items" />
// //         <CustomButton>CHECKOUT</CustomButton>
// //     </div>
// // );

// // const CartDropdown = ({ cartItems }) => (

// //(Modify after App js) reason for checkout page
// // const CartDropdown = ({ cartItems, history }) => (

// //Dispatch Action Shorthand(cart-item replace the chekout page)
// const CartDropdown = ({ cartItems, history, dispatch }) => (

//     <div className="cart-dropdown">
//         <div className="cart-items">
//             {
//                 // cartItems.map(cartItem => (
//                 //     <CartItem key={cartItem.id} item={cartItem} />
//                 // ))

//                 //reason for Checkout page
//                 cartItems.length ? (
//                     cartItems.map(cartItem => (
//                         <CartItem key={cartItem.id} item={cartItem} />
//                     ))
//                 ) : (
//                     <span className="empty-message">Your cart is empty</span>
//                 )
//             }
//         </div>
//         {/* (Modify after App js)reason for checkout page */}
//         {/* <CustomButton onClick={() => history.push('./checkout')}>CHECKOUT</CustomButton> */}

//         {/* //Dispatch Action Shorthand(cart-item replace the chekout page) */}
//         <CustomButton onClick={() => {
//             history.push('./checkout');
//             dispatch(toggleCartHidden()
//             );
//         }}>
//             CHECKOUT
//         </CustomButton>

//         {/* <CustomButton>CHECKOUT</CustomButton> */}
//     </div >
// );

// // const mapStateToProps = ({ cart: { cartItems } }) => ({
// //     cartItems
// // });

// //another selector(save us our performance in CHECKOUT box when we sign out in our App)
// // const mapStateToProps = state => ({
// //     cartItems: selectCartItems(state)
// // });

// //user selector
// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems
// });
// //(Modify after App js)reason for checkout page
// export default withRouter(connect(mapStateToProps)(CartDropdown));

// // export default connect(mapStateToProps)(CartDropdown);

// // export default CartDropdown;
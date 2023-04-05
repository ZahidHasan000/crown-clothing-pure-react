import React from "react";

// After Styled component 2
// import { Link } from 'react-router-dom';

import { connect } from "react-redux";

//user selector
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//user selector
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg"

// import './header.styles.scss'
// import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./header.styles";

// After Styled component 2
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

// const Header = ({ currentUser }) => (
const Header = ({ currentUser, hidden }) => (
    // Styled component 1
    <HeaderContainer>
        <LogoContainer to={'/'}>
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to={'/shop'}>
                SHOP
            </OptionLink>
            <OptionLink to={'/shop'}>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                    // Styled component 2
                    <OptionLink as={'div'} onClick={() => { auth.signOut() }}>
                        SIGN OUT
                    </OptionLink>

                    // <OptionDiv onClick={() => { auth.signOut() }}>
                    //     SIGN OUT
                    // </OptionDiv>
                ) : (
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : (<CartDropdown />)
        }

    </HeaderContainer>

    // <div className="header">
    //     <Link className="logo-container" to={'/'}>
    //         <Logo className="logo" />
    //     </Link>
    //     <div className="options">
    //         <Link className="option" to={'/shop'}>
    //             SHOP
    //         </Link>
    //         <Link className="option" to={'/shop'}>
    //             CONTACT
    //         </Link>
    //         {
    //             currentUser ? (
    //                 <div className="option" onClick={() => { auth.signOut() }}>
    //                     SIGN OUT
    //                 </div>
    //             ) : (
    //                 <Link className="option" to="/signin">
    //                     SIGN IN
    //                 </Link>
    //             )
    //         }
    //         <CartIcon />
    //     </div>
    //     {
    //         hidden ? null : (<CartDropdown />)
    //     }

    // </div>
);

//Redux set-up
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// });

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// });

//user selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

// export default Header;
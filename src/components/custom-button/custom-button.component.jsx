import React from "react";

// import './custom-button.styles.scss';
import { CustomButtonContainer } from "./custom-button.styles";

// Styled component 3
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

// const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
//     <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
//         {children}
//     </button>
// );

//cart item add for redux
// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
//     <button className={`${inverted ? 'inverted' : ''} 
//     ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
//         {...otherProps}
//     >
//         {children}
//     </button>
// );

export default CustomButton;
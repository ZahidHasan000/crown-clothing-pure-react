import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-styles.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);


// import React from "react";

// //reason for Add cart items
// import { connect } from "react-redux";

// import CustomButton from "../custom-button/custom-button.component";

// //reason for Add cart items
// import { addItem } from "../../redux/cart/cart.actions";

// import './collection-item.styles.scss'

// // const CollectionItem = ({ id, name, price, imageUrl }) => (

// //reason for Add cart items
// // const CollectionItem = ({ id, name, price, imageUrl, addItem}) => (
// //     <div className="collection-item">
// //         <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

// //         <div className="collection-footer">
// //             <span className="name">{name}</span>
// //             <span className="price">{price}</span>
// //         </div>
// //         <CustomButton inverted> Add to cart </CustomButton>
// //     </div>
// // );

// //addItem store in CollectionItem
// const CollectionItem = ({ item, addItem}) => {
//     const { name, price, imageUrl } = item;
//     return (
//     <div className="collection-item">
//         <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

//         <div className="collection-footer">
//             <span className="name">{name}</span>
//             <span className="price">{price}</span>
//         </div>
//         <CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
//     </div>
// )};

// //reason for Add cart items
// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// });

// //reason for Add cart items
// export default connect(null, mapDispatchToProps)(CollectionItem);

// // export default CollectionItem;
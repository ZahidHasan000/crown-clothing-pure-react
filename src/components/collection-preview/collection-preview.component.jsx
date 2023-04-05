import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);


// import React from "react";

// import CollectionItem from "../collection-item/collection-item.component";

// import './collection-preview.styles.scss';

// const CollectionPreview = ({ title, items }) => (
//     <div className="collection-preview">
//         <h1 className="title">{title.toUpperCase()}</h1>
//         <div className="preview">
//             {
//                 //reason for add cart items
//                 items
//                 .filter((item, idx) => idx < 4)
//                 .map((item) => (
//                     <CollectionItem key={item.id} item={item} />
//                 ))


//                 // items
//                 // .filter((item, idx) => idx < 4)
//                 // .map(({id, ...otherItemProps}) => (
//                 //     <CollectionItem key={id} {...otherItemProps} />
//                 // ))

//                 // items
//                 // .filter((item, idx) => idx < 4)
//                 // .map(item => (
//                 //     <div key={item.id}>{item.name}</div>
//                 // ))
//             }
//         </div>
//     </div>
// );

// export default CollectionPreview;

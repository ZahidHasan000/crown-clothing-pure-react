import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
// import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);


// import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import CollectionPreview from "../../components/preview-collections/collection-preview.compotent";

// // import { selectCollections } from "../../redux/shop/shop.selectors";

// //Data flow in our App
// import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

// import './collections-overview.styles.scss'

// const CollectionsOverview = ({ collections }) => (
//     <div className="collections-overview">
//         {
//             collections.map(({ id, ...otherCollectionProps }) => (
//                 <CollectionPreview key={id} {...otherCollectionProps} />
//             ))
//         }
//     </div>
// );

// const mapStateToProps = createStructuredSelector({
//     //Data flow in our App
//     collections: selectCollectionsForPreview

//     // collections: selectCollections
// });

// export default connect(mapStateToProps)(CollectionsOverview);

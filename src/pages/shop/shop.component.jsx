import React from "react";

// nested routing in shop page
import { Route } from "react-router-dom";

// Adding shop data to redux
import { connect } from "react-redux";

//Collection overview component
import CollectionsOverview from "../../components/collection-overview/collections-overview.component";

// nested routing in shop page
import CollectionPage from "../collection/collection.component";

// reason for Bringing shop data to our app
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

// withSpinner HOC 2
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// Adding shop data to redux
import { updateCollections } from "../../redux/shop/shop.actions";

import './shop-page.styles.scss'

// withSpinner HOC 2
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// we can easily convert from functional component to class component by this rules
// reason for Bringing shop data to our app
class ShopPage extends React.Component {

    // withSpinner HOC 2
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        // Adding shop data to redux
        const { updateCollections } = this.props

        const collectionRef = firestore.collection('collections');

        // promise pattern(data ki vabe fetch kora jay back end theke tai dekhano hoyese)
        // fetch('https://firestore.googleapis.com/v1/projects/crown-db-392e7/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(collections => console.log(collections));

        // promise pattern
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
        //     // console.log(snapshot);
        //     // convertCollectionsSnapshotToMap(snapshot);

        //     // Adding shop data to redux
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionsMap);

        //     // Adding shop data to redux
        //     updateCollections(collectionsMap);

        //     // withSpinner HOC 2
        //     this.setState({ loading: false });
        // });
    }

    render() {
        const { match } = this.props;

        {/* // withSpinner HOC 2 */ }
        const { loading } = this.state;

        return (
            <div className="shop-page">
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}

                {/* // withSpinner HOC 2 */}
                <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />

            </div>
        );
    }
}

// Adding shop data to redux
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => {
        dispatch(updateCollections(collectionsMap));
    }
});

// Adding shop data to redux
export default connect(null, mapDispatchToProps)(ShopPage);

// nested routing in shop page
// const ShopPage = ({ match }) => (
//     <div className="shop-page">
//         <Route exact path={`${match.path}`} component={CollectionsOverview} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
// );

//Collection overview component
// export default ShopPage;

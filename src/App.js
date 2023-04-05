import React from 'react';
// 
import { Route, Switch, Redirect } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';

//user selector
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//reason for checkout page
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Moving our shop data to firebase
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

//user selector
import { selectCurrentUser } from './redux/user/user.selectors';

// Moving our shop data to firebase
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors'


// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

// function App() {

class App extends React.Component {
  // We don't need this constructor for redux set-up
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //Reason for redux
    const { setCurrentUser } = this.props;

    // Moving our shop data to firebase
    // const { setCurrentUser, collectionsArray } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   console.log(user);
    // });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //Reason for redus set-up
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })


          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // }, () => {
          //   console.log(this.state);
          // });

          // console.log(this.state);
        });
      }
      //Reason for redux set-up
      // setCurrentUser(userAuth);

      // Moving our shop data to firebase
      // addCollectionAndDocuments('collections', collectionsArray);

      // Moving our shop data to firebase 2
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));

      // this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (

      <div>
        {/* for Redux set-up */}
        <Header />

        {/* <Header currentUser={this.state.currentUser} /> */}
        <Switch>
          {/* <Routes> */}
          {/* <BrowserRouter> */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />

          {/* //reason for checkout page */}
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route exact path='/signin' render={() => this.props.currentUser ?
            (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />

          {/* <Route exact path='/signin' component={SignInAndSignUpPage} /> */}
          {/* </BrowserRouter> */}
          {/* </Routes> */}

          {/* <Route path='/hats' component={HatsPage} /> */}
        </Switch>
      </div>

      //     // <div>
      //     //  <HomePage />
      //     // </div>
    )
  }

}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

//user selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

//Moving our shop data to firebase
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   collectionsArray: selectCollectionsForPreview
// });

//redux set-up 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

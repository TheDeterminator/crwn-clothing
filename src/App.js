import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import React, { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { checkUserSession, setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";

const App = ({ currentUser, checkUserSession }) => {
  // unsubscribeFromAuth = null;
  // const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null);

  useEffect(() => {
    checkUserSession();
    // setUnsubscribeFromAuth(
    //   auth.onAuthStateChanged(async (userAuth) => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);

    //       userRef.onSnapshot((snapShot) => {
    //         setCurrentUser({ id: snapShot.id, ...snapShot.data() });
    //       });
    //     } else {
    //       setCurrentUser(userAuth);
    //     }
    //   })
    // );
    return () => {
      // unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

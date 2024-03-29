import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ProductDetail from "./components/Product/ProductDetail"
import ProductsPage from "./components/Product/ProductPage"
import ReviewsByUser from './components/Review/ReviewsByUser';
import FooterBottom from './components/Footer';
import FourOFour from './components/FourOFour';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar loaded={loaded}/>
      <Switch>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/my-reviews" exact={true}>
          <ReviewsByUser/>
        </ProtectedRoute>
        <Route path='/' exact={true} >
        <ProductsPage />
        </Route>
        <Route>
          <FourOFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
